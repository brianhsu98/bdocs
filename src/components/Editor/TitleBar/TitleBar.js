import React from "react";
import { Form } from "semantic-ui-react";
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
            value={this.props.title || ''}
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

TitleBar.defaultProps = {
  title: "",
};

export default TitleBar;
