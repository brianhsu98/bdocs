import React from "react";
import { Form } from "semantic-ui-react";
import HelpButton from "./HelpButton";
import ImportFile from "./ImportFile";

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

          <Form.Input
            id="copy"
            action={{
              color: "teal",
              labelPosition: "right",
              icon: "copy",
              content: "Copy",
              onClick: this.props.onCopyClick,
            }}
            width={6}
            value={this.props.copyURL}
          />

          <HelpButton />
          <ImportFile onFileUpload={this.props.onFileUpload} />
        </Form.Group>
      </Form>
    );
  }
}

export default TitleBar;
