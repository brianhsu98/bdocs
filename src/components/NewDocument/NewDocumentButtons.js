import React from "react";
import { Container, Segment, Grid, Button, Divider } from "semantic-ui-react";
import shortid from "shortid";
import { withRouter } from "react-router-dom";

class NewDocumentButtons extends React.Component {
  constructor(props) {
    super(props);
    this.newRichTextDocument = this.newRichTextDocument.bind(this);
    this.newCodeDocument = this.newCodeDocument.bind(this);
  }

  newRichTextDocument() {
    let editor_url = "/editor/" + shortid.generate();
    this.props.history.push(editor_url);
  }

  newCodeDocument() {
    let editor_url = "/code/" + shortid.generate();
    this.props.history.push(editor_url);
  }

  render() {
    return (
      <Container>
        <Segment
          placeholder
          textAlign="center"
          inverted
          style={{ marginTop: "20px" }}
        >
          <Grid columns={2} stackable>
            <Grid.Column verticalAlign="middle">
              <Button
                content="New Rich Text Document"
                icon="edit"
                size="massive"
                onClick={this.newRichTextDocument}
                primary
              />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Button
                content="New Coding Pad"
                icon="code"
                size="massive"
                onClick={this.newCodeDocument}
                primary
              />
            </Grid.Column>
          </Grid>
          <Divider vertical inverted content="OR" />
        </Segment>
      </Container>
    );
  }
}

export default withRouter(NewDocumentButtons);
