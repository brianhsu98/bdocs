import React from "react";
import * as firebase from "firebase";
import Firepad from "firepad";
import PropTypes from "prop-types";
import { Dimmer, Loader, Container } from "semantic-ui-react";
import "./Editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyBchbuTmDxfcTgGX8ZYC0lolc5Lz5NRpZ8",
      authDomain: "bdocs-e77b5.firebaseapp.com",
      databaseURL: "https://bdocs-e77b5.firebaseio.com",
      projectId: "bdocs-e77b5",
      storageBucket: "bdocs-e77b5.appspot.com",
      messagingSenderId: "971892271101",
    };
    firebase.initializeApp(config);

    this.state = {
      initialLoadComplete: false,
    };
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    var firepadRef = firebase.database().ref(id);

    var codeMirror = window.CodeMirror(document.getElementById("firepad"), {
      lineWrapping: true,
    });

    var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
      richTextShortcuts: true,
      richTextToolbar: true,
    });

    this.setState({
      initialLoadComplete: true,
    });
  }
  render() {
    const firepadContentsLoaded = this.state.initialLoadComplete;
    if (firepadContentsLoaded) {
      return (
        <Container>
          <div id="firepad" />
        </Container>
      );
    } else {
      return (
        <Container>
          <div id="firepad">
            <Dimmer active />
          </div>
        </Container>
      );
    }
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
