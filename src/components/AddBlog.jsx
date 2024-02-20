import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { Form, Col, Row, Button, Card } from 'react-bootstrap'
import MyBlog from './MyBlog'
import SideBar from './SideBar'
import { toast, ToastContainer } from 'react-toastify'
import { addBlogAPI, userCategoryAPI } from '../services/allAPI'
import 'react-toastify/dist/ReactToastify.css'
import { addBlogResponseContext } from '../contexts/ContextShare'

function AddBlog() {
    //to hold the value of the image url
    const [preview, setPreview] = useState("")
    //using contextapi
    const {addBlogResponse, setAddBlogResponse} = useContext(addBlogResponseContext)
    const [allCategory, setAllCategory] = useState([])

    const [blogDetails, setBlogDetails] = useState({
        title:"",
        category:"",
        content:"",
        blogImage:""
    })

    //state to hold the token
    const [token, setToken] = useState("")
    console.log(blogDetails);
    
const clearForm =()=>{
    setBlogDetails({
        title:"",
        category:"",
        content:"",
        blogImage:""
    })
    setPreview("")
}

useEffect(()=>{
    if(blogDetails.blogImage){
        (setPreview(URL.createObjectURL(blogDetails.blogImage)))
    }
    else{
        setPreview("")
    }
},[blogDetails.blogImage])
console.log(preview);

useEffect(()=>{
    if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
    }
    else{
        setToken("")
    }
},[])


//add blog
const handleAdd =async(e)=>{
    e.preventDefault()

    const {title,category,content,blogImage} = blogDetails
    if(!title || !category || !content || !blogImage){
        toast.info('Please fill the form Completly')
    }
    else{
        //reqBody
        //body is passed as formdata because here we have header (uploaded content)
        //1) create object for FormData - since we have uloaded content
        const reqBody = new FormData()
        //2) add data to FormData - append() method is used for add data to FormData
        reqBody.append("title",title)
        reqBody.append("category",category)
        reqBody.append("content",content)
        reqBody.append("blogImage",blogImage)

        //reqHeader 
        if(token){
            const reqHeader = {
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
        }

        const result = await addBlogAPI(reqBody, reqHeader)
        console.log(result);

        if(result.status===200){
            console.log(result.data);
            toast.success('Blog Added Successfully')
             clearForm()
             //context
             setAddBlogResponse(result.data)
        }
        else{
            console.log(result.response.data);
        }
    }
    }

}

//get category
const getAllCategory = async()=>{
  
   

    const result = await userCategoryAPI()
    console.log(result.data);
    setAllCategory(result.data)

    }

    useEffect(()=>{
        getAllCategory()
    },[])

    return (
        <>
            <Header />
            <div>
                <Row className='container-fluid' style={{ height: '100vh' }}>
                    <Col md={2} style={{ background: '#f8f9fa ' }} >
                        <SideBar />
                    </Col>

                    <Col md={5} >
                        
                        <Card className='rounded' style={{ width: '450px', margin: 'auto', marginTop: '40px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
                            <Card.Body>
                                <Card.Title className="text-center fs-2 fw-bolder text-primary mb-3">Start Your Blog</Card.Title>


                                <Form>
                                    <Form.Group controlId="Title">
                                        <Form.Label>Blog Title</Form.Label>
                                        <Form.Control value={blogDetails.title} onChange={(e)=>setBlogDetails({...blogDetails,title:e.target.value})}
                                            type="text"
                                            placeholder="Enter a Title"
                                            className="mb-2"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="Title">
                                        <Form.Label>Category</Form.Label>
                                        <select value={blogDetails.category} onChange={(e)=>setBlogDetails({...blogDetails,category:e.target.value})} className="form-select mb-2" aria-label="Default select example">
                                            <option selected>-- select --</option>
                                           { allCategory?.length>0?
                                           allCategory.map((item)=>(<option value={item.categoryName}>{item.categoryName}</option>))
                                           :null}
                                            

                                        </select>
                                        
                                    </Form.Group>

                                    <Form.Group controlId="Message">
                                        <Form.Label>Blog Content</Form.Label>
                                        <Form.Control value={blogDetails.content} onChange={(e)=>setBlogDetails({...blogDetails,content:e.target.value})}
                                            as="textarea"
                                            rows={5}
                                            placeholder="Write your content here..."
                                            className="mb-2"
                                        />
                                    </Form.Group>

                                   
                                    <label htmlFor="image1" className='text-center d-flex '>Upload Image
                                    
                                        <input value={blogDetails.image} onChange={(e)=>setBlogDetails({...blogDetails,blogImage:e.target.files[0]})} id='image1' type="file" style={{display:'none'}} />
                                        <img className='ms-5' width={'60%'} height={'40%'} src={preview?preview:"https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047545.jpg"} alt="no image" />
                                       
                                    </label>

                                    <div className="d-flex justify-content-center mb-2 mt-3">
                                        <Button onClick={handleAdd} className='rounded' variant="primary" type="submit">
                                            Add
                                        </Button>
                                        <Button onClick={clearForm} variant="secondary" type="reset" className='ms-2 rounded'>
                                            Clear
                                        </Button>
                                    </div>
                                </Form>

                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={5} className='blog-card mt-5' style={{ overflowY: 'auto', maxHeight: '600px' }} >
                        <MyBlog />

                    </Col>

                </Row>
            </div>
            <ToastContainer
position="top-center"
autoClose={2000}
theme="light"

/>
        </>
    )
}

export default AddBlog
