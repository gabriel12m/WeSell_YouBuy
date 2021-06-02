import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" expand="lg">
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}
