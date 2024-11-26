import { Navbar, Container, Nav } from 'react-bootstrap'

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100  ">
      <Container>
        <Navbar.Brand href="#">Epi Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
