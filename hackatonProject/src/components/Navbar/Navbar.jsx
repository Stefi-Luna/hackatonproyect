import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
           
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/phone">Telefonos</NavDropdown.Item>
              <NavDropdown.Item href="/tablet">Tablet</NavDropdown.Item>
              <NavDropdown.Item href="/pc">ordenador</NavDropdown.Item>
              <NavDropdown.Item href="/console">Consolas</NavDropdown.Item>
              <NavDropdown.Item href="/head">Cascos</NavDropdown.Item>
              <NavDropdown.Item href="/tv">Televisores</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/AboutMe">Sobre Mi</Nav.Link>
           
             </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
