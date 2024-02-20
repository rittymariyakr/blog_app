import React from 'react'
import AddCategory from '../components/AddCategory'
import ViewCategory from '../components/ViewCategory'
import Header from '../components/Header'
import AdminSidebar from '../components/AdminSidebar'
import { Col, Row } from 'react-bootstrap'

function AdminCategory() {
  return (
    <>
    <Header/>

    <div>
        <Row className='container-fluid  ' style={{height:'100vh'}}>
          <Col md={2} style={{ background: '#f8f9fa ' }} >
          <AdminSidebar/>
          </Col>

          <Col md={7} className='blog-card' style={{ overflowY: 'auto', maxHeight: '775px' }} > 
          <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <AddCategory/>
                </div>
                
                
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ViewCategory/>
                </div>
            </div>

        </div>
          </Col>
    </Row>
    </div>


        
    </>
  )
}

export default AdminCategory
