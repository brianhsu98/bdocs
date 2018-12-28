import React from "react";
import { Input } from "semantic-ui-react";

class ImportFile extends React.Component {
  render() {
    return (
      <Input id="uploadedFile" type="file" onChange={this.props.onFileUpload} />
    );
  }
}

export default ImportFile;
