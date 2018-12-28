import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Editor from "./Editor";

class NavBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Menu borderless pointing>
              <Menu.Item as={NavLink} exact to={process.env.PUBLIC_URL + "/"}>
                Home
              </Menu.Item>
            </Menu>
          </Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route
            path={process.env.PUBLIC_URL + "/editor/:id"}
            component={Editor}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBar;
