import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GuidGenerator } from "./components/GuidGenerator";

import { ConvertCase } from "./components/ConvertCase";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Mon App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/guid-generator">
                  Générateur de GUID
                </Nav.Link>
                <Nav.Link as={Link} to="/convert-case">
                  Convertisseur de cas
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-3">
          <Routes>
            <Route path="/guid-generator" element={<GuidGenerator />} />
            <Route path="/convert-case" element={<ConvertCase />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
