import React from "react";
import * as firebase from "firebase";
import Firepad from "firepad";

import "./editor.css";

class Editor extends React.Component {
  componentDidMount() {
    // TODO: Put into a config file instead of storing here!
    var config = {
      apiKey: "AIzaSyBchbuTmDxfcTgGX8ZYC0lolc5Lz5NRpZ8",
      authDomain: "bdocs-e77b5.firebaseapp.com",
      databaseURL: "https://bdocs-e77b5.firebaseio.com",
      projectId: "bdocs-e77b5",
      storageBucket: "bdocs-e77b5.appspot.com",
      messagingSenderId: "971892271101",
    };
    firebase.initializeApp(config);
    var firepadRef = firebase.database().ref();
    console.log(firepadRef);

    var codeMirror = window.CodeMirror(document.getElementById("firepad"), {
      lineWrapping: true,
    });

    var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
      richTextShortcuts: true,
      richTextToolbar: true,
      defaultText: "Hello World!",
    });
  }
  render() {
    return (
      <div>
        <div id="firepad" />
      </div>
    );
  }
}

export default Editor;
