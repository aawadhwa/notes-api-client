import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";import "./App.css";
import Routes from "./Routes";


function App(props) {
  return (
  <div className="App container">
  <Navbar fluid collapseOnSelect>
  <Navbar.Header>
  <Navbar.Brand>
  <Link to="/">Scratch</Link>
  </Navbar.Brand>
  <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav pullRight>
  <Nav pullRight>
<LinkContainer to="/signup">
<NavItem>Signup</NavItem>
</LinkContainer>
<LinkContainer to="/login">
<NavItem>Login</NavItem>
</LinkContainer>
</Nav>
  </Nav>
  </Navbar.Collapse>
  </Navbar>
  <Routes />
  </div>
  );
  }
  export default App;