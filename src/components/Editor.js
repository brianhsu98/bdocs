import React from "react";
import * as firebase from "firebase";
import Firepad from "firepad";
import PropTypes from "prop-types";
import { Divider, Input, Dimmer, Loader, Container } from "semantic-ui-react";
import "./Editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      active: true,
      id: this.props.match.params.id,
    };
    this.getUpdatedTitle = this.getUpdatedTitle.bind(this);
    this.initializeTitleListener = this.initializeTitleListener.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      value: e.target.value,
    });
    firebase
      .database()
      .ref(this.state.id)
      .update({ title: e.target.value });
  }

  getUpdatedTitle(snapshot) {
    this.setState({
      value: snapshot.val(),
    });
  }

  initializeTitleListener() {
    var titleRef = firebase.database().ref(this.state.id + "/title");
    titleRef.on("value", this.getUpdatedTitle);
  }

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

    var firepad = Firepad.fromCodeMirror(firebaseRef, codeMirror, {
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
        <Input
          transparent
          placeholder="Title..."
          size="massive"
          style={{ width: "100%" }}
          onChange={this.handleTitleChange}
          value={this.state.value}
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
