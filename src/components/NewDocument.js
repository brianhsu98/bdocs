import React from "react";
import { Header, Segment, Container } from "semantic-ui-react";
import HomepageOptionSelector from "./HomepageOptionSelector";

const NewDocument = () => (
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
      <HomepageOptionSelector />
    </Container>
  </Segment>
);

export default NewDocument;
