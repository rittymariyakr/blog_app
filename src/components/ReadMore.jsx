import React from 'react'
import { Link } from 'react-router-dom'
import ViewBlog from './ViewBlog'

function ReadMore() {
  return (
    <div>
      <Link to={'/viewblog'} style={{textDecoration:'none'}} ><a href="" style={{ textDecoration: 'none' }}><p className='text-primary'>Read More <i class="fa-solid fa-greater-than"></i></p></a></Link>
     <a href=""><ViewBlog/> </a> 
    </div>
  )
}

export default ReadMore
