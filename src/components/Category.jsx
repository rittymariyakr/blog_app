import React from 'react'

function Category() {
  return (
    <>
    <div className='d-grid ms-3'>
       <h2>Cateogories</h2>
       {/* <button className='btn btn-warning'>Add New Category</button> */}
    </div>
    <div className='justify-content-between align-items-center'  >
        <button className='btn btn-light'><h5>Food</h5></button>
        <button className='btn btn-light'><h5>Tech</h5></button>
        <button className='btn btn-light'><h5>Sports</h5></button>
        <button className='btn btn-light'><h5>Fashion</h5></button>

      

    </div>
    </>
  )
}

export default Category
