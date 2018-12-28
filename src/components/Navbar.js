import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import DocumentPrompt from "./DocumentPrompt";
import Editor from "./Editor";

class NavBar extends React.Component {
  render() {
    // TODO: Remove hidden navbar.
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Menu borderless pointing style={{ display: "none" }}>
              <Menu.Item as={NavLink} exact to="/">
                Home
              </Menu.Item>
              <Menu.Item as={NavLink} exact to="/editor">
                New Document
              </Menu.Item>
            </Menu>
          </Switch>
          <Route exact path="/" component={Home} />
          <Route path="/editor/:id" component={Editor} />
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBar;
