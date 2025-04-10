import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="../../image/DALL·E 2023-05-02 20.58.47 - a logo of a sun animated with glasses that is very nice.png"
            alt="Libreria El Sol"
            width="40"
            height="40"
          />
          Libreria El Sol
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Ofertas</Nav.Link>
            <Nav.Link>Armá Tu Mochila</Nav.Link>
            <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Útiles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cuadernos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mochilas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#InciarSesion">Inciar Sesión</Nav.Link>
            <Nav.Link eventKey={2} href="#Regsitrarse">
              Registrarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
