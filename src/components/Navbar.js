import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import NewDocumentPrompt from "./NewDocumentPrompt";
import Editor from "./Editor";

class NavBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Menu borderless pointing>
              <Menu.Item as={NavLink} exact to="/">
                Home
              </Menu.Item>
              <Menu.Item as={NavLink} exact to="/editor">
                New Document
              </Menu.Item>
            </Menu>
          </Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/editor/" component={NewDocumentPrompt} />
          <Route path="/editor/:id" component={Editor} />
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBar;
