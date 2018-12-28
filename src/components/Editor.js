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
import "./Editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      active: true,
      id: this.props.match.params.id,
      url: "REPLACEME.com/editor/" + this.props.match.params.id,
    };
    this.getUpdatedTitle = this.getUpdatedTitle.bind(this);
    this.initializeTitleListener = this.initializeTitleListener.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
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
    var config = {
      apiKey: "AIzaSyBchbuTmDxfcTgGX8ZYC0lolc5Lz5NRpZ8",
      authDomain: "bdocs-e77b5.firebaseapp.com",
      databaseURL: "https://bdocs-e77b5.firebaseio.com",
      projectId: "bdocs-e77b5",
      storageBucket: "bdocs-e77b5.appspot.com",
      messagingSenderId: "971892271101",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    var firebaseRef = firebase.database().ref(this.state.id);

    this.initializeTitleListener(this.state.id);

    var codeMirror = window.CodeMirror(document.getElementById("firepad"), {
      lineWrapping: true,
    });

    Firepad.fromCodeMirror(firebaseRef, codeMirror, {
      richTextShortcuts: true,
      richTextToolbar: true,
    });

    this.setState({
      active: false,
    });
  }

  render() {
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

            <Popup trigger={<Button icon="help" />} width={2}>
              <Popup.Content>
                <b> Save this link </b> if you want to return to your document.
                If you do not save your link, you will not be able to return to
                your document.
                <br /> <br />
                To share this document, simply send the link to the other
                person.
              </Popup.Content>
            </Popup>
          </Form.Group>
        </Form>
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
