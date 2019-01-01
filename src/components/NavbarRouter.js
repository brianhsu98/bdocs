import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Editor from "./Editor/Editor";
import { withCookies } from "react-cookie";
import PastDocuments from "./PastDocuments/PastDocuments";
import NewDocument from "./NewDocument/NewDocument";

class NavbarRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu borderless pointing>
            <Menu.Item as={NavLink} exact to={"/"}>
              Home
            </Menu.Item>
            <Menu.Item as={NavLink} to={"/editor"}>
              Editor
            </Menu.Item>
            <Menu.Item as={NavLink} to={"/pastDocuments"}>
              Past Documents
            </Menu.Item>
          </Menu>
          <Route exact path={"/"} component={Home} />
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
          <Route
            path={"/pastDocuments"}
            render={props => (
              <PastDocuments {...props} cookies={this.props.cookies} />
            )}
          />
          <Route exact path={"/editor"} component={NewDocument} />
        </div>
      </BrowserRouter>
    );
  }
}

export default withCookies(NavbarRouter);
