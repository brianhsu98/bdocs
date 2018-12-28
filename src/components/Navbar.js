import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Editor from "./Editor";

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
          <Route exact path={"/"} component={Home} />
          <Route
            path={"/editor/:id"}
            render={props => <Editor {...props} isCode={false} />}
          />
          <Route
            path={"/code/:id"}
            render={props => <Editor {...props} isCode={true} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBar;
