import React, { Component } from "react";
import {
  Navbar,
  FormControl,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

class Navbars extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#" style={{ marginLeft: "15px" }}>
            Akses Sport
          </Navbar.Brand>
          <Nav classname="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Berita</Nav.Link>
            <Nav.Link>Live Scores</Nav.Link>
            <NavDropdown
              title="Piala & Liga"
              id="basic-nav-dropdown"
            ></NavDropdown>
            <Nav.Link>Transfer Pemain</Nav.Link>
            <Nav.Link>Tim</Nav.Link>
          </Nav>

          <Form className="d-flex" style={{ marginLeft: "430px" }}>
            <FormControl type="text" placeholder="Search" />
            <Button style={{ marginLeft: "7px" }} variant="outline-primary">
              Search
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
