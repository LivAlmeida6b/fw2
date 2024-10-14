import {Container, Nav, Navbar} from 'react-bootstrap';
import style from "@/styles/Navbar.module.css";
function Menu() {
  return (
    <Container>
    <Navbar expand="lg" className={`${style.grad} my-1 px-3 border border-secondary-subtle border-2 rounded rounded-2`} data-bs-theme="dark">
      
        <Navbar.Brand href="#home">Livia Almeida 6B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </Container>
  );
}

export default Menu;