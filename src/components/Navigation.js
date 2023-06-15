import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" className="mx-5">
          somethingFancy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" bg="dark" expand="lg">
          <Nav className="me-auto m-4">
            <Nav.Link href="#home" className="mx-3">
              {" "}
              Projects
            </Nav.Link>
            <Nav.Link href="#link" className="mx-3">
              About me
            </Nav.Link>
            <Nav.Link href="#link" className="mx-3">
              Contact me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
