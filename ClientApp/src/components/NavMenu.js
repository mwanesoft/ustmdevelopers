
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Buttone from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import Menu from './Menu/Menu';
// import PersonIcon from '@mui/icons-material/Person';
import PersonIcon from '@mui/icons-material/Person';
// import Form from 'react-bootstrap/Form';
import { LoginMenu } from './api-authorization/LoginMenu';


function NavMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="fixed-top">
      <Container>
        <Menu/>

        <Navbar.Brand tag={Link} to="/"> <span className='fw-bolder  purple-600'>USTM </span> <span className="fw-bold  purple-200">Developers</span>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link tag={Link} to="/features">About</Nav.Link>
            <Nav.Link tag={Link} to="/products">Products</Nav.Link>
            <Nav.Link tag={Link} to="/universities">Universities</Nav.Link>
            <NavDropdown title="Forums" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/c">C Developers</NavDropdown.Item>
              <NavDropdown.Item href="/csharp">C# Developers</NavDropdown.Item>
              <NavDropdown.Item href="/cpp">C++ Developers</NavDropdown.Item>
              <NavDropdown.Item href="/java">Java Developers</NavDropdown.Item>
              <NavDropdown.Item href="/android">Android Developers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                General Chat
              </NavDropdown.Item>
            </NavDropdown>
        
          </Nav>

          <Nav>
            {false ? 
            <>
              <Nav.Link href="#deets">Ailton Bauque</Nav.Link>
              <PersonIcon/>
            </>  : 
            <div className="text-center">
              {/* mui buttons */}
              <Button >Login</Button>
              <Button variant="contained" color="secondary">Sign Up</Button>
               {/* <LoginMenu>
               </LoginMenu> */}
            </div>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;

















