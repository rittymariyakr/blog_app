import React, { useContext, useEffect, useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseurl';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { allCategoryAPI, userEditBlogAPI } from '../services/allAPI';
import { editBlogResponseContext } from '../contexts/ContextShare';



function EditBlog({ blog }) {

    const [allCategory, setAllCategory] = useState([])

    //accessing contextapi for edit blog
    const { editBlogResponse, setEditBlogResponse } = useContext(editBlogResponseContext)

    const [show, setShow] = useState(false);

    const [blogDetails, setBlogDetails] = useState({
        id: blog._id,
        title: blog.title,
        category: blog.category,
        content: blog.content,
        blogImage: ""
    })
    const [preview, setPreview] = useState("")
    const handleClose = () => {
        setShow(false);
        resetForm()
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (blogDetails.blogImage) {
            setPreview(URL.createObjectURL(blogDetails.blogImage))
        }
        else {
            setPreview("")
        }

    }, [blogDetails.blogImage])

    const resetForm = () => {
        setBlogDetails({
            id: blog._id,
            title: blog.title,
            category: blog.category,
            content: blog.content,
            blogImage: ""
        })
        setPreview("")
    }
    //edit blog
    const handleUpload = async () => {
        const { id, title, category, content, blogImage } = blogDetails
        if (!title || !category || !content) {
            toast.info('Please Fill the Form Completely!')
        }
        else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("category", category)
            reqBody.append("content", content)
            preview ? reqBody.append("blogImage", blogImage) : reqBody.append("blogImage", blog.blogImage)


            const token = sessionStorage.getItem("token")
            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await userEditBlogAPI(id, reqBody, reqHeader)
                console.log(result);
                if (result.status === 200) {
                    toast.success('Updated Successfully')
                    handleClose()
                    setEditBlogResponse(result.data)
                }
                else {
                    console.log(result.response.data);
                }
            }
            else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await userEditBlogAPI(id, reqBody, reqHeader)
                console.log(result);
                if (result.status === 200) {
                    toast.success('Updated Successfully')
                    handleClose()
                    setEditBlogResponse(result.data)
                }
                else {
                    console.log(result.response.data);
                }
            }
        }
    }

    //get category
    const getAllCategory = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }

        const result = await allCategoryAPI(reqHeader)
        console.log(result.data);
        setAllCategory(result.data)

    }

    useEffect(() => {
        getAllCategory()
    }, [])

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
                    <Modal.Title >Blog Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={5}>
                            <label htmlFor="image" className='text-center'>
                                {/* if inputut type is file then take value from e.target.files[0] */}
                                <input id='image' type="file" style={{ display: 'none' }} onChange={e => setBlogDetails({ ...blogDetails, blogImage: e.target.files[0] })} />
                                {/* <img width={'100%'} height={'100%'} src={preview?preview:`${BASE_URL}/uploads/${blog.blogImage}`} alt="no image" /> */}
                                <img width={'100%'} height={'100%'} src={preview ? preview : `${BASE_URL}/uploads/${blog.blogImage}`} alt="no image" />
                            </label>
                        </Col>

                        <Col md={7} className='d-flex justify-content-center align-items-center flex-column'>
                            <Form className='w-100'>
                                <Form.Group controlId="Title">
                                    <Form.Label>Blog Title</Form.Label>
                                    <Form.Control value={blogDetails.title} onChange={e => setBlogDetails({ ...blogDetails, title: e.target.value })}
                                        type="text"
                                        placeh-older="Enter a catchy title"
                                        className="mb-2"
                                    />
                                </Form.Group>
                                <Form.Group controlId="Title">
                                    <Form.Label>Category</Form.Label>
                                    <select value={blogDetails.category} onChange={e => setBlogDetails({ ...blogDetails, category: e.target.value })} className="form-select mb-2" aria-label="Default select example">

                                        {allCategory?.length > 0 ?
                                            allCategory.map((item) => (<option value={item.categoryName}>{item.categoryName}</option>))
                                            : null}

                                    </select>
                                    <Form.Text muted>
                                        Selected Category: {blogDetails.category}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="Message">
                                    <Form.Label>Blog Content</Form.Label>
                                    <Form.Control value={blogDetails.content} onChange={e => setBlogDetails({ ...blogDetails, content: e.target.value })}
                                        as="textarea"
                                        rows={5}
                                        placeholder="Write your content here..."
                                        className="mb-2"
                                    />
                                </Form.Group>




                            </Form>

                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={resetForm}>
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

export default EditBlog
