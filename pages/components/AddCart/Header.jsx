import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = ({ count }) => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cart</Navbar.Brand>
          <Nav className="text-end justify-content-end">
            <Nav.Link href="#home">No Of Cart Items {count}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
