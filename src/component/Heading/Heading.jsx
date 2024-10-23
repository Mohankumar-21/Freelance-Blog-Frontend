import React, { useContext, useState } from 'react';
import { BlogContext } from '../../context/Context';
import { Navbar, Nav, Container, Button, Collapse } from 'react-bootstrap';
import './Heading.css'

const Heading = () => {
  const { changeCategory } = useContext(BlogContext);
  const [open, setOpen] = useState(false);

  return (
    <Navbar expand="lg" bg="light" variant="light" className='m-2'>
      <Container className='' >
        <Navbar.Brand href="#" className='menu-align d-lg-none'>MENU</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setOpen(!open)}
        />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto Button-align">
            <Nav.Link as="button" className='btn-align'  onClick={() => changeCategory('Trending')}>Trending</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('All')}>All</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('Kollywood')}>Kollywood</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('Bollywood')}>Bollywood</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('Tollywood')}>Tollywood</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('Hollywood')}>Hollywood</Nav.Link>
            <Nav.Link as="button" className='btn-align' onClick={() => changeCategory('tamilDub')}>Tamil dubbed</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heading;
