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

class DocumentPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.newDocument = this.newDocument.bind(this);
    this.findDocument = this.findDocument.bind(this);
  }

  newDocument(e) {
    let editor_url = "/editor/" + shortid.generate();
    this.props.history.push(editor_url);
  }

  getInputValue(e) {
    this.setState({
      value: e.target.value,
    });
  }

  findDocument(e) {
    let editor_url = "/editor/" + this.state.inputValue;
    this.props.history.push(editor_url);
  }

  render() {
    return (
      <Container>
        <Segment placeholder textAlign="center" inverted>
          <Grid columns={2} stackable>
            <Grid.Column>
              <Input
                action={{
                  onClick: this.findDocument,
                  color: "blue",
                  content: <Icon name="search" />,
                }}
                focus
                placeholder="Document ID"
                onChange={this.getInputValue.bind(this)}
                value={this.state.value}
              />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Button
                content="Create new document"
                icon="edit"
                size="large"
                onClick={this.newDocument}
              />
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

export default withRouter(DocumentPrompt);
