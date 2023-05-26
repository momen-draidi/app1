import React from 'react'
import './por.css'
import {AiFillStar} from 'react-icons/ai'
function Portfolio() {
  return (
    <>
    <div className="container " id='port'>

    <section className='mt-5 '>
    <h1 className='text-center'>PORTFOLIO</h1>
    <div className="stars">
< AiFillStar className='text-dark ic fs-1  '/>
</div>
    <div className="row ">
            
          <div className="col-md-4 r ">
            <img src="cabin.png"  className='w-100 py-3' alt="img" />
          </div>
          <div className="col-md-4 r ">
            <img src="cake.png" className='w-100 py-3' alt="img" />
          </div>
          <div className="col-md-4  r">
            <img src="circus.png" className='w-100 py-3' alt="img" />
          </div>
          <div className="col-md-4  r">
            <img src="game.png" className='w-100 py-3' alt="img" />
          </div>
          <div className="col-md-4  r">
            <img src="submarine.png" className='w-100 py-3' alt="img" />
          </div>
          <div className="col-md-4 r">
            <img src="safe.png" className='w-100 py-3' alt="img" />
          </div>
    </div>
    </section>
    </div>
    
    </>
  )
}

export default Portfolio