import React from 'react'
import './hedaer.css'
import {AiFillStar} from 'react-icons/ai'

function Header() {
  return (
    <>
    <header>
        <div className="header">

        <img src="avataaars.svg" className='w-25 ' alt="img" />
        <h2 className='my-4 fs-1'>START BOOTSTRAP</h2>
        <div className="star">

        < AiFillStar className='text-white fs-1 '/>
        </div>
        <p className='my-2 fs-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </header >
    
    </>
  )
}

export default Header