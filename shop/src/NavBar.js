import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">멋사Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/albums">Albums</Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;