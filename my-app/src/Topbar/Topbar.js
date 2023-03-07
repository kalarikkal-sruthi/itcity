import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Topbar.css'


function Topbar() {
  return (
    <>
    <div className='top'>
      <Navbar expand="lg" style={{Padding:'0px'}}>
        <Container fluid>
          <Navbar.Toggle className='border-0' aria-controls="navbarScroll"  />
          <Navbar.Brand  className='brand-logo' chref="#">
            <img src="/itcitylogo-white.png" alt=""></img>
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-white"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className='text-white'>Profile</Nav.Link>
              <Nav.Link href="#action2" className='text-white'>About Us</Nav.Link>
              <Nav.Link href="#action1" className='text-white'>Privacy Policy</Nav.Link>
              <Nav.Link href="#action2" className='text-white'>Terms & Conditions</Nav.Link>
              <Nav.Link href="#action1" className='text-white'>Return Policy</Nav.Link>
              <Nav.Link href="#action2" className='text-white'>Delivery Information</Nav.Link>
              <Nav.Link href="#action2" className='text-white'>Sign Out</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
      
      <div className='search'>
        
      {/* <Form className="searchBar">
        <Form.Control
          type="search"
          placeholder="Search Products,Brands and More"
          className="rounded-0 border-0"
          aria-label="Search"
        />
        <Button className="searchicon rounded-0 border-0" >
<SearchOutlinedIcon variant="outlined" sx={{color:"black"}}/>

        </Button>
      </Form>   */}
      <div className="searchBar">
    <input id="searchQueryInput" type="text"  placeholder="Search Products,Brands and More" />
    <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
    <SearchOutlinedIcon variant="outlined" sx={{color:"black"}}/>
    </button>
  </div>


      </div>
      </Container>
    
      <div className='country-code'>
      <div className='coutry'>
        <p>Country:Kuwait</p>
      </div>
      <div className='coutry'>
        <p>CHANGE</p>
      </div>


      </div>
     
      
    </div>
    </>
  )
}

export default Topbar