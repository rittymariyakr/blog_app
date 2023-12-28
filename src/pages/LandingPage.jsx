import React from 'react'
import View from '../components/View'
import Category from '../components/Category'
import Add from '../components/Add'

function LandingPage() {
  return (
    <>
    <div className=' container mt-5 text-center'>
        <div className="row ">
            <div className="col-md-1"></div>
            <div className="col-md-10 d-flex">
            <input className='form-control w-25 align-items-center fs-5' type="text" placeholder='search here' />
            <button className='btn btn-success fs-5'>search</button>
            <div className='ms-5'>
            <Add/>

            </div>
            </div>
            <div className="col-md-1"></div>
        </div>
        
    </div>
    
    <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between">
        <div className="all-videos col-lg-9">
          <h4 className='mb-5'>All Blogs</h4>
          <View/>
        </div>
        <div className="category col-lg-3">
            <Category/>
        </div>

      </div>
    </>
  )
}

export default LandingPage
