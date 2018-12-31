import React from "react";
import LRUCache from "lru-cache";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PastDocuments extends React.Component {
  constructor(props) {
    super(props);
    this.getPastDocuments = this.getPastDocuments.bind(this);
  }

  getPastDocuments() {
    var cookieContents = this.props.cookies.get("recentlyAccessedDocuments");
    console.log(cookieContents);
    if (cookieContents === null || cookieContents === undefined) {
      return <div>No past documents!</div>;
    }

    var cache = new LRUCache({ max: 20 });
    cache.load(cookieContents);

    var pastDocuments = [];
    cache.forEach((value, key) => {
      console.log(value);
      pastDocuments.push(
        <li key={key}>
          <Link to={value}>{value}</Link>
        </li>
      );
    });
    return pastDocuments;
  }

  render() {
    var pastDocumentsList = this.getPastDocuments();
    return <Container>{pastDocumentsList}</Container>;
  }
}

export default PastDocuments;
