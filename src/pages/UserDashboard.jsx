import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Dashboard from './Dashboard'
import SideBar from '../components/SideBar'

function UserDashboard() {
  return (
    <>
    <Header />
      <div>
        <Row className='container-fluid  ' style={{height:'100vh'}}>
          <Col md={2} style={{ background: '#f8f9fa ' }} >
          <SideBar/>
          </Col>

          <Col md={10} className='blog-card' style={{ overflowY: 'auto', maxHeight: '775px' }} >
            <Dashboard/>
          </Col>
          </Row>
          </div>
          
    </>
  )
}

export default UserDashboard
