import React from "react";
import LRUCache from "lru-cache";
import { List, Container } from "semantic-ui-react";
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
        <List.Item>
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
      <Container>
        <List relaxed animated>
          {pastDocumentsList}
        </List>
      </Container>
    );
  }
}

export default PastDocuments;
