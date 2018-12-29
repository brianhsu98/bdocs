import React from "react";
import { Form } from "semantic-ui-react";
import ImportFile from "./ImportFile";
import SharingPopupButton from "./SharingPopupButton";

class TitleBar extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Input
            transparent
            placeholder="Title..."
            size="massive"
            style={{ width: "100%" }}
            onChange={this.props.onTitleChange}
            value={this.props.titleValue}
            width={10}
          />

          <ImportFile onFileUpload={this.props.onFileUpload} />
          <SharingPopupButton
            onCopyClick={this.props.onCopyClick}
            copyURL={this.props.copyURL}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default TitleBar;
