import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/Navs.css'
import logo from '../img/logo.png'



function Navs() {

    return(
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={logo} alt='foodera'  />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Explore Foods</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link" className='yy'>123 456 789</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navs;