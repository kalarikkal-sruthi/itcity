import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import './Topbar.css'
import { fontSize } from '@mui/system';


function Topbar() {
  return (
    <>
    <div className='top'>
      <Navbar expand="lg" style={{Padding:'0px'}}>
        <Container fluid>
        {/* <MenuOutlinedIcon  sx={{color:'#fff',margin:'2px'}} variant="outlined" /> */}
          <Navbar.Toggle className='border-0' aria-controls="navbarScroll"  />
          <Navbar.Brand  className='brand-logo' chref="#" >
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
          <Person2OutlinedIcon sx={{color:'#fff',margin:'2px' }} variant="outlined" />
          <ShoppingCartOutlinedIcon sx={{color:'#fff',margin:'2px'}} variant="outlined" />
        </Container>
      </Navbar>
      <Container>
      
      <div className='search'>
        

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
        <p>LANGUAGE</p>
      </div>


      </div>
     
      
    </div>
    </>
  )
}

export default Topbar