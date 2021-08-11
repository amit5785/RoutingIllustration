import React from 'react'
import {Link} from 'react-router-dom'


const Navbar=() =>{
  return( 
    <>
    <a href='/' >Home</a>
    <a href='/aboutus'>AboutUs</a>
    <br></br>
    <br />
      <Link to='/'>Home</Link>
      <Link to='/aboutus'>AboutUs</Link>
    </>
  );
}

export default Navbar