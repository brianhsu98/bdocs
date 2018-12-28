import React from "react";
import {
  Divider,
  Container,
  Segment,
  Input,
  Grid,
  Button,
  Header,
  Icon,
} from "semantic-ui-react";

class DocumentPrompt extends React.Component {
  render() {
    return (
      <Container>
        <Segment placeholder textAlign="center" inverted>
          <Grid columns={2} stackable>
            <Grid.Column>
              <Input
                action={{ color: "blue", content: <Icon name="search" /> }}
                focus
                placeholder="Document ID"
              />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Button content="Create new document" icon="edit" size="large" />
            </Grid.Column>
          </Grid>
          <Divider inverted vertical>
            OR
          </Divider>
        </Segment>
      </Container>
    );
  }
}

export default DocumentPrompt;
