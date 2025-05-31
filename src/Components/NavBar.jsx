import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./Cart/CartWidget";
import Logo from "../assets/DALL·E 2023-05-02 20.58.47 - a logo of a sun animated with glasses that is very nice.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{borderRadius: "50px", border: "3px solid #06391E", borderColor: "black", backgroundColor: "white"}}>
      <Container >
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            alt="Libreria El Sol"
            width="50"
            height="50"
          />
          Libreria El Sol
        </Navbar.Brand >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/mochila">Armá Tu Mochila</Nav.Link>
            <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categoria/utiles">Útiles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/cuadernos">Cuadernos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/mochilas">Mochilas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="align-items-center gap-3">
            <Nav.Link as={Link} to="/iniciar-sesion">Iniciar Sesión</Nav.Link>
            <Nav.Link as={Link} to="/registrarse">Registrarse</Nav.Link>
            <CartWidget style={{}} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
