// import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { LoginMenu } from './api-authorization/LoginMenu';
// import './NavMenu.css';

// export class NavMenu extends Component {
//   static displayName = NavMenu.name;

//   constructor (props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar () {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }

//   render() {
//     return (
//       <header>
//         <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
//           <NavbarBrand tag={Link} to="/">ustmdevelopers</NavbarBrand>
//           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//           <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
//             <ul className="navbar-nav flex-grow">
//               <NavItem>
//                 <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
//               </NavItem>
//               <LoginMenu>
//               </LoginMenu>
//             </ul>
//           </Collapse>
//         </Navbar>
//       </header>
//     );
//   }
// }







import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Buttone from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import Menu from './Menu';
// import PersonIcon from '@mui/icons-material/Person';
import PersonIcon from '@mui/icons-material/Person';
// import Form from 'react-bootstrap/Form';


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
              <NavDropdown.Item href="#action/3.2">C Developers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">C# Developers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">C++ Developers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Java Developers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Android Developers</NavDropdown.Item>
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
              {/* Direct bootstrap buttons */}
              {/* <Buttone variant="primary">Sign Up</Buttone>{' '}
              <Buttone variant="secondary">Login</Buttone>{' '} */}
            </div>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;



















