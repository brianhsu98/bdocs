import React from "react";
import { Popup, Button } from "semantic-ui-react";

const HelpButton = () => (
  <Popup trigger={<Button icon="help" />} width={2}>
    <Popup.Content>
      <b> Save this link </b> if you want to return to your document. If you do
      not save your link, you will not be able to return to your document.
      <br /> <br />
      To share this document, simply send the link to the other person.
    </Popup.Content>
  </Popup>
);

export default HelpButton;
