import React from "react";
import Popup from "reactjs-popup";
import { Container, Header, Button, Icon, Input } from "semantic-ui-react";
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
        {close => (
          <div>
            <Button
              circular
              floated="right"
              onClick={close}
              basic
              icon={<Icon name="close" />}
            />
            <Container
              style={{
                padding: "3em",
              }}
            >
              <Header as="h1" icon>
                <Icon name="share" />
                Sharing/Saving
                <Header.Subheader>
                  To share or save this document, <b>share/save this URL.</b> If
                  you do not have this URL, there is no way to return to this
                  document.
                </Header.Subheader>
              </Header>
              <Input
                id="copy"
                action={{
                  color: "teal",
                  labelPosition: "right",
                  icon: "copy",
                  content: "Copy",
                  onClick: this.props.onCopyClick,
                }}
                value={this.props.copyURL}
                fluid
              />
            </Container>
          </div>
        )}
      </Popup>
    );
  }
}

SharingPopupButton.defaultProps = {
  copyURL: "",
};

export default SharingPopupButton;
