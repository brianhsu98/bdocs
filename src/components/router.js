import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Editor from "./editor";

function WebsiteRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Editor</Link>
          </li>
        </ul>
        <Route path="/editor/:id" component={Editor} />
      </div>
    </Router>
  );
}

export default WebsiteRouter;
