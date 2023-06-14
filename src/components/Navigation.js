import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";

export const Navigation = () => {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">somethingFancy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" bg="dark" expand="lg">
            <Nav className="me-auto">
              <Nav.Link href="#home" gap={2} className="col-md-5 mx-auto">
                {" "}
                Projects
              </Nav.Link>
              <Nav.Link href="#link" gap={2} className="col-md-5 mx-auto">
                About me
              </Nav.Link>
              <Nav.Link href="#link" gap={2} className="col-md-5 mx-auto">
                Contact me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Stack>
  );
};

export default Navigation;
