import React from "react";
import LRUCache from "lru-cache";
import { Header, Segment, List, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PastDocuments extends React.Component {
  constructor(props) {
    super(props);
    this.getPastDocuments = this.getPastDocuments.bind(this);
  }

  getPastDocuments() {
    var cookieContents = this.props.cookies.get("recentlyAccessedDocuments");
    if (cookieContents === null || cookieContents === undefined) {
      return <div>No past documents!</div>;
    }

    var cache = new LRUCache({ max: 20 });
    cache.load(cookieContents);

    var pastDocuments = [];
    cache.forEach((value, key) => {
      var iconName;
      if (key.includes("code")) {
        iconName = "code file";
      } else {
        iconName = "file alternate outline";
      }
      pastDocuments.push(
        <List.Item key={key}>
          <List.Icon size="large" name={iconName} />
          <List.Content>
            <List.Header>
              <Link to={key}>{value.title}</Link>
            </List.Header>
            <List.Description>Last opened: {value.lastOpened}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
    return pastDocuments;
  }

  render() {
    var pastDocumentsList = this.getPastDocuments();
    return (
      <div>
        <Segment inverted style={{ padding: "8vh 0em", marginTop: "-15px" }}>
          <Container>
            <Header
              as="h1"
              content="Recently Opened Documents"
              style={{ fontSize: "4em" }}
              inverted
            />
            <Header
              as="h3"
              content="Your previously accessed 
            documents. Most recently opened document come first."
              inverted
            />
          </Container>
        </Segment>
        <Container>
          <List divided relaxed animated>
            {pastDocumentsList}
          </List>
        </Container>
      </div>
    );
  }
}

export default PastDocuments;
