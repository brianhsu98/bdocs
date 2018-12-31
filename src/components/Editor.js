import React from "react";
import * as firebase from "firebase";
import Firepad from "firepad";
import PropTypes from "prop-types";
import LRUCache from "lru-cache";
import { Divider, Dimmer, Loader, Container } from "semantic-ui-react";
import ModeSelector from "./ModeSelector";
import TitleBar from "./TitleBar";
import "./Editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.constructURL = this.constructURL.bind(this);

    this.state = {
      title: "",
      active: true,
      id: this.props.match.params.id,
      url: this.constructURL(),
      session: null,
      mode: "ace/mode/python",
      firepad: null,
    };

    this.getUpdatedTitle = this.getUpdatedTitle.bind(this);
    this.initializeTitleListener = this.initializeTitleListener.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.getUpdatedMode = this.getUpdatedMode.bind(this);
    this.initializeModeListener = this.initializeModeListener.bind(this);
    this.onFileDrop = this.onFileDrop.bind(this);
    this.setFirepadContents = this.setFirepadContents.bind(this);
    this.setCookies = this.setCookies.bind(this);
  }

  /**
   * Appends the ID with the corresponding title to a LRUCache stored
   * in a cookie. Queries firebase database for most recent title.
   * This function is called twice: once when a component is loaded, and once
   * when a component is unmounted.
   */
  setCookies() {
    var cookies = this.props.cookies;
    var cookieContents = cookies.get("recentlyAccessedDocuments");
    var cache = new LRUCache({ max: 20 });
    var relativeURL = this.state.url.substr(this.state.url.indexOf("/"));
    var id = this.state.id;
    if (cookieContents !== null && cookieContents !== undefined) {
      cache.load(cookieContents);
    }
    firebase
      .database()
      .ref(id + "/title")
      .once("value")
      .then(function(snapshot) {
        var title = snapshot.val();
        if (title === null || title === "") {
          var title = "Document ID " + id;
        }
        cache.set(relativeURL, snapshot.val());
        var serializedCache = cache.dump();
        serializedCache = JSON.stringify(serializedCache);
        cookies.set("recentlyAccessedDocuments", serializedCache);
      });
  }

  /**
   * Constructs the URL containing this document. */
  constructURL() {
    var url = process.env.REACT_APP_BASE_URL;
    if (this.props.isCode) {
      url += "/code/";
    } else {
      url += "/editor/";
    }
    url += this.props.match.params.id;
    return url;
  }

  /**
   * Passed to ImportFile component.
   * Called when a user drags a new file into the box.
   */
  setFirepadContents(e) {
    this.state.firepad.setText(e.target.result);
  }

  /**
   * Given an array of files, extracts the text of the first
   * file. Used in the ImportFile component.
   */
  onFileDrop(files) {
    var uploadedFile = files[0];
    if (uploadedFile) {
      var readFile = new FileReader();
      readFile.onload = this.setFirepadContents;
      readFile.readAsText(uploadedFile);
    }
  }

  /**
   * When mode is changed, update the firebase and local state.
   * Used in the ModeSelector component.
   */
  handleModeChange(_, data) {
    this.setState({
      mode: data.value,
    });
    firebase
      .database()
      .ref(this.state.id)
      .update({ mode: data.value });
  }

  /**
   * Synchronizes mode between between documents using FIrebase.
   */
  getUpdatedMode(snapshot) {
    var mode;
    if (snapshot.val() === null) {
      mode = "ace/mode/python";
    } else {
      mode = snapshot.val();
    }
    this.setState({
      mode: mode,
    });
  }

  /**
   * Initializes the mode listener to synchronize mode
   */
  initializeModeListener() {
    var modeRef = firebase.database().ref(this.state.id + "/mode");
    modeRef.on("value", this.getUpdatedMode);
  }

  /**
   * Updates firebase database and internal state whenever user
   * changes title input text box.
   */
  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
    firebase
      .database()
      .ref(this.state.id)
      .update({ title: e.target.value });
  }

  /**
   * Used to set state, updating the title with the new value from
   * the firestore.
   */
  getUpdatedTitle(snapshot) {
    this.setState({
      title: snapshot.val(),
    });
  }

  /**
   * Creates a listener that looks for title changes/updates.
   */
  initializeTitleListener() {
    var titleRef = firebase.database().ref(this.state.id + "/title");
    titleRef.on("value", this.getUpdatedTitle);
  }

  /**
   * Triggered when the user presses the copy button.
   * Hacky, and not very reacty.
   */
  copyToClipboard() {
    document.getElementById("copy").select();
    document.execCommand("copy");
  }

  /**
   * Initializes Firebase, syncs with Firepad stored at the URL parameter ID,
   * and syncs the title again with the ID.
   * active is changed to prevent users from inputting changes before
   * the data from the firestore has been loaded.
   */
  componentDidMount() {
    // Load firebase config from .env file
    var config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    var firebaseRef = firebase.database().ref(this.state.id);

    this.initializeTitleListener();

    var firepad;

    if (!this.props.isCode) {
      var codeMirror = window.CodeMirror(document.getElementById("firepad"), {
        lineWrapping: true,
      });

      firepad = Firepad.fromCodeMirror(firebaseRef, codeMirror, {
        richTextShortcuts: true,
        richTextToolbar: true,
      });
    } else {
      var ace = window.ace.edit("firepad");
      ace.setOptions({
        fontSize: "11pt",
      });
      var session = ace.getSession();

      // Session is used later to change the mode of the editor
      this.setState({
        session: session,
      });

      firepad = Firepad.fromACE(firebaseRef, ace);

      this.initializeModeListener();
    }

    this.setState({
      firepad: firepad,
    });

    this.setState({
      active: false,
    });

    // Updates the recently used documents with this document once opened.
    this.setCookies();
  }

  /**
   * When the document is closed, updates the recently used documents page with the
   * document name.
   */
  componentWillUnmount() {
    this.setCookies(this.state.id);
  }

  render() {
    if (!this.state.active && this.props.isCode) {
      // Does not set mode until component mounted
      this.state.session.setMode(this.state.mode);
    }
    return (
      <Container>
        <Dimmer active={this.state.active}>
          <Loader />
        </Dimmer>

        <TitleBar
          onTitleChange={this.handleTitleChange}
          titleValue={this.state.title}
          onCopyClick={this.copyToClipboard}
          copyURL={this.state.url}
          onFileDrop={this.onFileDrop}
        />
        <Divider />

        <ModeSelector
          value={this.state.mode}
          handleModeChange={this.handleModeChange}
          visible={this.props.isCode}
        />

        <Divider />
        <div id="firepad" />
      </Container>
    );
  }
}

Editor.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Editor;
