import React from 'react'
import './about.css'
import {HiDownload} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
function About() {
  return (
   <>
   <section className='about mt-5 ' id='about'>
    <div className="container text-white">
        <h1 className='text-center pt-5'>ABOUT</h1>
        < AiFillStar className='text-white fs-1 icon'/>
        <div className="d-flex p">

        <p className='  px-5 mt-5 fs-5'>Freelancer is a free bootstrap theme created by Start Bootstrap. <br/>The download includes the complete source files including HTML, CSS,<br/> and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p  className='  mt-5 fs-5'>You can create your own custom avatar for the masthead, <br/>change the icon in the dividers, and add your email address to the <br/>contact form to make it fully functional!</p>
        </div>
             <button className='btn  p-3 px-3 py-2'> <HiDownload className='fs-2'/>  Free Download </button>
         
    </div>
   </section>
   </>
  )
}

export default About