import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import MenuItem from "./MenuItem"
// import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import {NavLink,NavItem,Nav} from 'reactstrap';


function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MenuIcon onClick={handleShow} />


      <Offcanvas show={show} onHide={handleClose} className="">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Form className="d-flex w-100">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 w-100 btn-outline-secondary outline-secondary"
                  aria-label="Search"
                />
            </Form>

            <Nav card pills vertical className="mt-2">
            <NavItem>
              <NavLink active href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="/">Public</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/questions">
                  <svg aria-hidden="true" class="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path></svg>
                  <span> Questions</span>
              </NavLink>
            </NavItem>
            <NavItem>
                      <NavItem><NavLink href="/tags"> Tags</NavLink></NavItem>
                      <NavItem><NavLink href="/users">Users</NavLink></NavItem>
                      <NavItem><NavLink href="/programs/universities">Universities</NavLink></NavItem>
            </NavItem>

            <NavItem className="d-flex justify-items-center align-items-center container">
            <span> Chat Groups</span>
              <NavLink href="/questions">
              <svg className="ms-auto" aria-hidden="true" class="svg-icon iconInfoSm" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z"></path></svg>
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink href="/questions"><svg aria-hidden="true" class="mt-auto fc-orange-400 svg-icon iconStarVerified" width="18" height="18" viewBox="0 0 18 18"><path d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"></path></svg>
              <span class="-link--channel-name">Explore Groups</span>
              </NavLink>
            </NavItem>
            
          </Nav>
{/* 
            <Nav>
            <ul className="">
              <li>
                <Nav.Link href="/">Home</Nav.Link>
              </li>
              <li>Public</li>              
                  <li>
                    <Nav.Link href="/questions">  
                        <svg aria-hidden="true" class="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path></svg>
                        <span>Questions</span>
                    </Nav.Link>
                  </li>
                  <ul>
                      <li><Nav.Link href="/tags">Tags</Nav.Link></li>
                      <li><Nav.Link href="/users">Users</Nav.Link></li>
                      <li><Nav.Link href="/programs/universities">Universities</Nav.Link></li>
                  </ul>

                  <li><span>Chat Groups</span>
                        <a href="" >
                          <svg aria-hidden="true" class="svg-icon iconInfoSm" width="14" height="14" viewBox="0 0 14 14"><path d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z"></path></svg>
                        </a>
                  </li>
                  <li class="ps-relative" aria-current="false">
                    <a href="#">
                      <svg aria-hidden="true" class="mt-auto fc-orange-400 svg-icon iconStarVerified" width="18" height="18" viewBox="0 0 18 18"><path d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"></path></svg>
                      <span class="-link--channel-name">Explore Groups</span>
                    </a>
                  </li>
            </ul>
            </Nav> */}






            {/* <Button variant="contained" className="w-100 mt-2" color="secondary">Sign Up</Button>
            <Button variant="contained" className="w-100 mt-2" color="secondary">Sign Up</Button>
            <Button variant="contained" className="w-100 mt-2" color="secondary">Sign Up</Button>
            <Button variant="contained" className="w-100 mt-2" color="secondary">Sign Up</Button>

          Some text about being a real good developers LMAO. */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default Menu;