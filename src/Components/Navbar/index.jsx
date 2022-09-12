import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="/">Coffee Maker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/productos"> Cafeteras </Nav.Link>
            <NavDropdown title="Preguntas frecuentes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Uno</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Dos </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tres</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/checkout"> <CartWidget /> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;