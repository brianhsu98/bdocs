import React from "react";
import {
  Grid,
  Segment,
  Container,
  Header,
  Button,
  Icon,
  Divider,
} from "semantic-ui-react";

const HomepageHeading = () => (
  <React.Fragment>
    <Segment inverted style={{ padding: "20vh 0em", marginTop: "-15px" }}>
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
          content="Acccountless, anonymized collaborative text editing"
          inverted
          textAlign="center"
        />

        <Button size="massive" attached animated primary>
          <Button.Content visible>Create a document now</Button.Content>
          <Button.Content hidden>
            <Icon name="right arrow" />
            <Icon name="edit" />
          </Button.Content>
        </Button>
      </Container>
    </Segment>
  </React.Fragment>
);

const HomepageBody = () => (
  <React.Fragment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Collaborative, real-time text editing.
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
            Anonymized
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            No logging, mostly because implementing it takes too much effort.
          </p>
        </Grid.Column>
        <Grid.Column width={8} textAlign="left" style={{ paddingLeft: "2em" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Many unimplemented features.
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            I have ideas, but many of them are not implemented. Use at your own
            risk.
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
