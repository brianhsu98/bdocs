import React from "react";
import * as firebase from "firebase";
import Firepad from "firepad";
import PropTypes from "prop-types";
import {
  Button,
  Popup,
  Form,
  Divider,
  Dimmer,
  Loader,
  Container,
} from "semantic-ui-react";
import ModeSelector from "./ModeSelector";
import HelpButton from "./HelpButton";
import "./Editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      active: true,
      id: this.props.match.params.id,
      url: process.env.PUBLIC_URL + "/" + this.props.match.params.id,
      session: null,
      mode: "ace/mode/python",
    };
    this.getUpdatedTitle = this.getUpdatedTitle.bind(this);
    this.initializeTitleListener = this.initializeTitleListener.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
  }

  /**
   * Updates firebase database and internal state whenever user
   * changes title input text box.
   */
  handleTitleChange(e) {
    this.setState({
      value: e.target.value,
    });
    firebase
      .database()
      .ref(this.state.id)
      .update({ title: e.target.value });
  }

  handleModeChange(_, data) {
    this.setState({
      mode: data.value,
    });
  }

  /**
   * Used to set state, updating the title with the new value from
   * the firestore.
   */
  getUpdatedTitle(snapshot) {
    this.setState({
      value: snapshot.val(),
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
    var config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    var firebaseRef = firebase.database().ref(this.state.id);

    this.initializeTitleListener(this.state.id);

    if (!this.props.isCode) {
      var codeMirror = window.CodeMirror(document.getElementById("firepad"), {
        lineWrapping: true,
      });

      Firepad.fromCodeMirror(firebaseRef, codeMirror, {
        richTextShortcuts: true,
        richTextToolbar: true,
      });
    } else {
      var ace = window.ace.edit("firepad");
      var session = ace.getSession();
      this.setState({
        session: session,
      });

      Firepad.fromACE(firebaseRef, ace);
    }

    this.setState({
      active: false,
    });
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
        <Form>
          <Form.Group>
            <Form.Input
              transparent
              placeholder="Title..."
              size="massive"
              style={{ width: "100%" }}
              onChange={this.handleTitleChange}
              value={this.state.value}
              width={10}
            />

            <Form.Input
              id="copy"
              action={{
                color: "teal",
                labelPosition: "right",
                icon: "copy",
                content: "Copy",
                onClick: this.copyToClipboard,
              }}
              width={6}
              value={this.state.url}
            />

            <HelpButton />
          </Form.Group>
        </Form>
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
