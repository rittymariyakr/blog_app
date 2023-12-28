import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';


function Add() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-flex align-items-center'>
        <h5 className='fs-3' style={{ fontFamily: 'Lorem' }}><i class="fa-brands fa-blogger  text-primary fa-2x me-3"></i>Upload new Blog</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-beat text-warning fa-cloud-arrow-up  fa-2x"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/*2. getting values from input box */}
              <Form.Control  type="text" placeholder="Enter Title " autoComplete='off' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control  type="text" placeholder="Enter Description" autoComplete='off'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control  type="text" placeholder="Enter Image url" autoComplete='off'/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Select Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Food</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Tech</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sports</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
            </Form.Group>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
