import React from "react";
import shortid from "shortid";
import { withRouter } from "react-router";
import {
  Divider,
  Container,
  Segment,
  Input,
  Grid,
  Button,
  Icon,
} from "semantic-ui-react";

class HomepageOptionSelector extends React.Component {
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
        <Segment placeholder textAlign="center" inverted>
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column verticalAlign="middle">
                <Button
                  content="Create new rich text document"
                  icon="edit"
                  size="massive"
                  onClick={this.newRichTextDocument}
                />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Button
                  content="Create new coding document"
                  icon="edit"
                  size="massive"
                  onClick={this.newCodeDocument}
                />
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Button
                content="Past Documents"
                icon="history"
                size="massive"
                onClick={() => this.props.history.push("/pastDocuments")}
              />
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default withRouter(HomepageOptionSelector);
