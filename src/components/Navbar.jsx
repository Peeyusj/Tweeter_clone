import React from 'react'
import '../styles/navbar.css'



export default function Navbar() {
  return (
    <div className="navbar">
<div className='navbar1'>
      <div className="logo"> <img style={{width:"25px"}} src="./images/leftarrow.png" alt="" /></div>
      <div className="searchbar">< input type="text" placeholder='Search'/></div>
    <div><img style={{width:"35px"}} src="./images/more1.png" alt="" /></div>
    </div>
    <div className="navlinks">
        <ul>
            <li><a href="">Top</a> </li>
            <li><a href="">Latest</a> </li>
            <li> <a href="http://localhost:3000/" id="people">People</a> </li>
            <li><a href="">Photos</a> </li>
            <li><a href="">Videos</a> </li>
        </ul>
    </div>
    </div>
    
  )
}

