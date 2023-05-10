import React from 'react'
import {Button, Container, Form, Nav, NavDropdown, Navbar} from "react-bootstrap";
import resim from "../img/logo 2.png";


const MyNavbar = () => {
    //! nevbar scrolling
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img src={resim}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">People</Nav.Link>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Full-stack</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Data-science
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Devops
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default MyNavbar