import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGoogle} from 'react-icons/bs'


function Footer() {
  return (
    <>

    <footer className='footer'>
    <div className="container">

        <div className="row">
            <div className="col-md-4 my-5 ii ">
                <h4 className='mx-5'> LOCATION</h4>
                <p className='mx-5'>2215 John Daniel<br/> DriveClark, MO 65243</p>
            </div>
            <div className="col-md-4 mt-5 ">
                

                  <i  className='icons mt-5  fs-4 p-3 mx-2'><BsFacebook  /></i>  
                  <i className='icons  fs-4 p-3 me-2'><BsTwitter  /></i>
                  <i className='icons fs-4 p-3 me-2'><BsLinkedin /></i>
                  <i className='icons fs-4  p-3 me-2'> <BsGoogle  /></i>

                
              
              


            </div>
            <div className="col-md-4 my-5 ">
                <h4 className='mx-5'>ABOUT FREELANCER</h4>
                <p className='mx-5'>Freelance is a free to use, MIT licensed <br/>Bootstrap  theme created by Start Bootstrap .</p>
            </div>
        </div>
    </div>
    <div className="i py-2">
      <p>Copyright © Your Website 2023</p>
    </div>
    </footer>
    </>
  )
}

export default Footer