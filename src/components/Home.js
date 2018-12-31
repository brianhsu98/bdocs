import React from "react";
import {
  Grid,
  Segment,
  Container,
  Header,
  Icon,
  Divider,
} from "semantic-ui-react";
import HomepageOptionSelector from "./HomepageOptionSelector";
import NewDocumentButtons from "./NewDocumentButtons";

/**
 * The header of the homepage
 * Consists of a banner and the buttons.
 */
const HomepageHeading = () => (
  <React.Fragment>
    <Segment inverted style={{ padding: "10vh 0em", marginTop: "-15px" }}>
      <Container>
        <Header
          as="h1"
          content="bDocs"
          style={{ fontSize: "8em" }}
          inverted
          textAlign="center"
        />
        <Header
          as="h2"
          content="Acccountless collaborative code and rich text editing"
          inverted
          textAlign="center"
        />
        <NewDocumentButtons />
      </Container>
    </Segment>
  </React.Fragment>
);

const HomepageBody = () => (
  <React.Fragment>
    <Segment style={{ padding: "4em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Collaborative, real-time code and rich text editing.
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Unashamedly ripping off Google Docs since 2018.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Icon name="file alternate outline" size="massive" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Grid container divided columns="2" style={{ padding: "4em 0em" }}>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Importing Files
            <Icon style={{ marginLeft: "1em" }} name="cloud upload" />
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Want to import your own files? You can. Just click the upload file
            button in your editor!
          </p>
        </Grid.Column>
        <Grid.Column width={8} textAlign="left" style={{ paddingLeft: "2em" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Live Collaboration
            <Icon style={{ marginLeft: "1em" }} name="users" />
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Ever wanted to collaborate on a document, but not use Google Docs?
            You can! Use my thing instead.
          </p>
        </Grid.Column>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Sharing is Easy
            <Icon style={{ marginLeft: "1em" }} name="share" />
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            To share with anyone, just send them the link!
          </p>
        </Grid.Column>
        <Grid.Column width={8} style={{ paddingLeft: "2em" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Accountless and Anonymous
            <Icon style={{ marginLeft: "1em" }} name="user secret" />
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            You don't need an account to use any of the features of this site.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </React.Fragment>
);

const HomepageFooter = () => (
  <React.Fragment>
    <Divider />

    <Container style={{ paddingBottom: "1em" }} textAlign="left">
      <p style={{ fontSize: "1.33em" }}>
        Made by <a href="https://brianhsu.me"> Brian Hsu</a>
      </p>
    </Container>
  </React.Fragment>
);

const Home = () => (
  <div>
    <HomepageHeading />
    <HomepageBody />
    <HomepageFooter />
  </div>
);

export default Home;
