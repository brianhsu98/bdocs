import React from "react";
import {
  Grid,
  Button,
  Divider,
  Header,
  Segment,
  Container,
} from "semantic-ui-react";
import NewDocumentButtons from "./NewDocumentButtons";

class NewDocument extends React.Component {
  render() {
    return (
      <Segment inverted style={{ padding: "8vh 0em", marginTop: "-15px" }}>
        <Container>
          <Header
            as="h1"
            content="Create a new document"
            style={{ fontSize: "4em" }}
            inverted
          />
          <Header
            as="h3"
            content="Create either a new coding pad or a rich text document editor. New documents can be
        saved by either bookmarking the URL, or by going to the 'Past Documents' page."
            inverted
          />
        </Container>

        <NewDocumentButtons history={this.props.history} />
      </Segment>
    );
  }
}

export default NewDocument;
