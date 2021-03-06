import React from "react";
import Popup from "reactjs-popup";
import { Icon, Button, Header } from "semantic-ui-react";
import Dropzone from "react-dropzone";

import "./ImportFileButton.css";

class ImportFileButton extends React.Component {
  render() {
    return (
      <Popup
        trigger={<Button primary> Upload File</Button>}
        closeOnDocumentClick
        closeOnEscape
        modal
        className="popup-small"
      >
        {close => (
          <div>
            <Button
              circular
              floated="right"
              onClick={close}
              basic
              icon={<Icon name="close" />}
            />
            <Dropzone onDrop={e => this.props.onFileDrop(e, close)}>
              {({ getRootProps, getInputProps, isDragActive }) => (
                <div
                  {...getRootProps()}
                  style={{
                    width: "100%",
                    height: "30vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <input {...getInputProps()} />
                    {isDragActive && <Header>Drop files here.</Header>}
                    <Icon name="upload" size="massive" color="blue" />
                    <Header>
                      Click here to add files, or drag files here.
                    </Header>
                  </div>
                </div>
              )}
            </Dropzone>
          </div>
        )}
      </Popup>
    );
  }
}

export default ImportFileButton;
