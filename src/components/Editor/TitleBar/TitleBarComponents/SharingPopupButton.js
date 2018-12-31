import React from "react";
import Popup from "reactjs-popup";
import { Header, Button, Form } from "semantic-ui-react";
import "./SharingPopupButton.css";

class SharingPopupButton extends React.Component {
  render() {
    return (
      <Popup
        trigger={<Button primary> Share/Save </Button>}
        modal
        closeOnDocumentClick
        closeOnEscape
        className="popup-largePadding"
      >
        <Header as="h1"> Sharing/Saving </Header>
        To save the document, you must keep track of this URL.{" "}
        <b>If you lose this URL, you will lose the document.</b>
        <br />
        <br />
        To share this document with others, simply share the URL. Changes will
        be automatically synced.
        <br />
        <Form.Input
          id="copy"
          action={{
            color: "teal",
            labelPosition: "right",
            icon: "copy",
            content: "Copy",
            onClick: this.props.onCopyClick,
          }}
          value={this.props.copyURL}
        />
      </Popup>
    );
  }
}

export default SharingPopupButton;
