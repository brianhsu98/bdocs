import React from "react";
import { Segment, Form } from "semantic-ui-react";
import ImportFileButton from "./ImportFileButton";
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
            width={12}
          />

          <ImportFileButton onFileDrop={this.props.onFileDrop} />
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
