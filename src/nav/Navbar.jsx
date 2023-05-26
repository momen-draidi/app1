import React from 'react'
import { Link } from 'react-scroll'
import './nav.css'
function Navbar() {
  return (
   <div className=' fixed-top pb-5'>
  <nav className="navbar navbar-expand-lg "  id='nav' >
    <div className="container ">
      <Link className=" navbar-brand text-white fs-3"to="nav" spy={true} smooth={true} offset={-10000} duration={500} href="#">START BOOTSTRAP</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse mx-5 "  id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
          <li className="nav-item px-2 ">
            <Link className="nav-link text-white active" to="port" spy={true} smooth={true} offset={-60} duration={500} aria-current="page" href="#">PORTFOLIO</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link text-white active" to="about" spy={true} smooth={true} offset={-40} duration={500} aria-current="page" href="#">ABOUT</Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link text-white active" to="cont" spy={true} smooth={true} offset={-70} duration={500} aria-current="page" href="#">CONTACT</Link>
          </li>
         

         
        </ul>
       
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar