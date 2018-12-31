import React from "react";
import { withRouter } from "react-router";
import { Divider, Container, Segment, Grid, Button } from "semantic-ui-react";

class HomepageOptionSelector extends React.Component {
  render() {
    return (
      <Container>
        <Segment placeholder textAlign="center" inverted>
          <Grid columns={2} stackable>
            <Grid.Column verticalAlign="middle">
              <Button
                content="Past Documents"
                icon="history"
                size="massive"
                onClick={() => this.props.history.push("/pastDocuments")}
              />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Button
                content="Create a new document"
                icon="edit"
                size="massive"
                onClick={() => this.props.history.push("/editor")}
              />
            </Grid.Column>
          </Grid>
          <Divider vertical inverted content="OR" />
        </Segment>
      </Container>
    );
  }
}

export default withRouter(HomepageOptionSelector);
