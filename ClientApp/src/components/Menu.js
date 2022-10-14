import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
// import MenuItem from "./MenuItem"


function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}
      <MenuIcon onClick={handleShow} />
      {/* <svg onClick={handleShow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg> */}




      <Offcanvas show={show} onHide={handleClose}>
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
                {/* <Button variant="outline-success">Search</Button> */}
            </Form>

            <ol>
              <li>Home</li>
              <li>Public</li>
              <ol>
                <li>Questions</li>
                <ol>Tags</ol>
                <ol>Users</ol>
                <ol>Companies</ol>
              </ol>
            </ol>
            <Button variant="contained" className="w-100 mt-2" color="secondary">Sign Up</Button>
            <Button variant="contained" className="w-100 mt-2" color="secondary">Sign Up</Button>
            <Button variant="contained" className="w-100 mt-2" color="secondary">Sign Up</Button>
            <Button variant="contained" className="w-100 mt-2" color="secondary">Sign Up</Button>

          Some text about being a real good developers LMAO.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default Menu;