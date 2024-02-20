import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import SideBar from './SideBar'
import { useParams } from 'react-router-dom'
import { allBlogAPI } from '../services/allAPI'
import { BASE_URL } from '../services/baseurl'


function ViewBlog() {
  const [blog,setblog] = useState([])

  const params = useParams()
  console.log(params.id);

  const blogger = blog.find(item=>item._id == params.id)
  console.log(blogger);

  const getBlog = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await allBlogAPI(reqHeader)
      console.log(result.data);
      setblog(result.data)
      

    }
  }
  useEffect(()=>{
    getBlog()
  },[])

  return (
    <>


      <Header />

      <Row className='container-fluid '>
        <Col md={2} style={{ background: '#f8f9fa ' }} >
          <SideBar />
        </Col>
        <Col md={10}>
          {blogger &&
          <div className=" card col-12 mt-3">
            <h3 className='mt-3 ms-3 text-info'>{blogger.title}</h3>
            <div className="d-flex mt-3">
              <i class="fa-solid fa-calendar-days fs-5 me-2 ms-3"></i>  {blogger.createdAt}

              <i class="fa-regular fa-folder ms-3 fs-5 me-2"></i>  {blogger.category}
            </div>
            <p className='mt-3 ms-3'>{blogger.content}</p>
            <img className='mt-2' height={'450px'} src={blogger?`${BASE_URL}/uploads/${blogger.blogImage}`:null} alt="no image" />
          </div>
}
        </Col>
      </Row>


    </>
  )
}

export default ViewBlog
