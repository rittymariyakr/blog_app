import React, { useContext, useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { editCategoryAPI } from '../services/allAPI';
import { editCategoryResponseContext } from '../contexts/ContextShare';

function EditCategory({category}) {
    const [show, setShow] = useState(false);
     //accessing contextapi for edit category
    const {editCategoryResponse, setEditCategoryResponse} = useContext(editCategoryResponseContext)

    
    const [categoryDetails, setCategoryDetails] = useState({
        id:category._id,
        categoryName: category.categoryName
    })

    const handleClose = () => setShow(false);
        
    const handleShow = () => setShow(true);

//reset form
const resetForm = ()=>{
    setCategoryDetails({
        id:category._id,
        categoryName:category.categoryName
    })
}

//edit category
    const handleUpload = async ()=>{
        const {id, categoryName} = categoryDetails
        if(!categoryName){
            toast.info('Please Enter Category Name')
        }
        else{
            const reqBody = new FormData()
            reqBody.append("categoryName",categoryName)

            const token = sessionStorage.getItem("token")

            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            const result = await editCategoryAPI(id, reqBody, reqHeader)
            console.log(result);
            if(result.status===200){
                toast.success('Updated Successfully')
                handleClose()
                setEditCategoryResponse(result.data)
            }
            else{
                console.log(result.response.data);
            }

        }
    }

  return (
    <>
    <button onClick={handleShow} className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title >Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
               

                <Col md={12} className='d-flex justify-content-center align-items-center flex-column'>
                    <Form className='w-100'>
                        <Form.Group controlId="Title">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control value={categoryDetails.categoryName} onChange={e => setCategoryDetails({ ...categoryDetails, categoryName: e.target.value })}
                                type="text"
                                placeholder="Enter Category Name"
                                className="mb-2"
                            />
                        </Form.Group>
                        




                    </Form>

                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger"  onClick={resetForm}>
                Clear
            </Button>
            <Button variant="success" onClick={handleUpload} >Update</Button>

        </Modal.Footer>
        <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </Modal>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="light"

    />
</>
  )
}

export default EditCategory
