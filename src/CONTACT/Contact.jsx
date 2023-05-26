import React from 'react'
import './cont.css'
function Contact() {
  return (
    <>
    <div className="cont my-5 " id='cont'>
    <div className="container ">

          <h1 className="text-center my-5">CONTACT ME</h1>
        
    <form className='form'>
      

      <input type="text" placeholder='Full Name'   className='d-flex py-3  ms-5'/>
      <input type="email"  placeholder='Yor Email' className='d-flex  py-3 ms-5'/>
      <input type="number" placeholder='Yor Number' className='d-flex py-3 ms-5' />
      <input type="message" placeholder='Message'  className='d-flex py-3 ms-5'/>

    </form>
      </div>
    </div>
    
    </>
  )
}

export default Contact