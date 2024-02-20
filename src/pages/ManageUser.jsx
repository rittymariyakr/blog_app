import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import AdminSidebar from '../components/AdminSidebar'
import Users from '../components/Users'

function ManageUser() {
  return (
    <>
    <Header/>
    <div>
        <Row className='container-fluid  ' style={{height:'100vh'}}>
          <Col md={2} style={{ background: '#f8f9fa ' }} >
          <AdminSidebar/>
          </Col>

          <Col md={10} className='blog-card' style={{ overflowY: 'auto', maxHeight: '775px' }} > 
         <Users/>
          </Col>
    </Row>
    </div>
    </>
  )
}

export default ManageUser
