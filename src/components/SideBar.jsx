import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function SideBar() {
  return (
    <>
      <div>
        <Row className='container-fluid '>
          <Col md={12} style={{ background: '#f8f9fa ' }} >
            <div className='mt-3'>
              <ul style={{ listStyleType: 'none' }}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/user-dashboard'}><li><p className='list'><i class="fa-solid fa-bars"></i> Dashboard</p></li></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/addblog'}><li><p className='list'><i class="fa-solid fa-blog "></i> Start Blog</p></li></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/myprofile'}><li><p className='list'><i class="fa-solid fa-user"></i> My Profile</p></li></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={''}><li><p className='list'><i class="fa-solid fa-phone"></i> Contact</p></li></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={''}><li> <p className='list'><i class="fa-solid fa-users"></i> About Us</p></li></Link>
              </ul>
            </div>
            <div>
              <img className='mt-5' height={'200px'} width={'200px'} src="https://i.pinimg.com/originals/5f/08/50/5f08505655b858d52ea4ef07a6fa58d5.gif" alt="" />
            </div>
          </Col>


        </Row>
      </div>
    </>
  )
}

export default SideBar
