import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Editor from "./Editor";
import { withCookies } from "react-cookie";

class NavBar extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Menu borderless pointing>
              <Menu.Item as={NavLink} exact to={"/"}>
                Home
              </Menu.Item>
            </Menu>
          </Switch>
          <Route
            exact
            path={"/"}
            render={props => <Home {...props} cookies={this.props.cookies} />}
          />
          <Route
            path={"/editor/:id"}
            render={props => (
              <Editor {...props} isCode={false} cookies={this.props.cookies} />
            )}
          />
          <Route
            path={"/code/:id"}
            render={props => (
              <Editor {...props} isCode={true} cookies={this.props.cookies} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default withCookies(NavBar);
