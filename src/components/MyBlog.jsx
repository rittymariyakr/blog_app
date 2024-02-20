import React, { useContext, useEffect, useState } from 'react'
import EditBlog from './EditBlog'
import { deleteBlogAPI, userBlogAPI } from '../services/allAPI'
import { addBlogResponseContext, editBlogResponseContext } from '../contexts/ContextShare'
import { toast } from 'react-toastify'


function MyBlog() {

    //accessing contextapi for edit blog
    const {editBlogResponse, setEditBlogResponse} = useContext(editBlogResponseContext)


    const [userBlog, setUserBlog] = useState([])
    //using contextapi
    const {addBlogResponse, setAddBlogResponse} = useContext(addBlogResponseContext)
    const getUserBlog = async()=>{

        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }

        const result = await userBlogAPI(reqHeader)
        console.log(result.data);
        setUserBlog(result.data)
    }

    useEffect(()=>{
        getUserBlog()
    },[addBlogResponse,editBlogResponse])

//delete blog
    const handleDelete = async(id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const result = await deleteBlogAPI(id, reqHeader)
        console.log(result);
        if(result.status===200){
            getUserBlog()
        }
        else{
            console.log(result.response.data);
        }

    }
    
    return (
        <>
            <div className=' card rounded shadow  p-4 '>
                <div className='d-flex justify-content-between'>
                    <h4 className='text-success'>My Blogs</h4>

                </div>
                <div className='mt-4'>
                    { userBlog?.length>0?
                    userBlog?.map((item)=>(<div className='border shadow mt-3' style={{background: "linear-gradient(90deg,rgba(148,187,233,1)  0%, rgba(238,174,202,1) 100%)"}}>
                    <div className=' d-flex align-items-center ms-2 '>
                        <h5 style={{fontWeight:"bold"}}>{item.title}</h5>
                        <div className='ms-auto d-flex'>
                            <EditBlog blog={item} />
                            {/* <a href="" target='_blank' className='btn'><i class="fa-brands fa-github text-success"></i></a> */}
                            <button onClick={()=>handleDelete(item._id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
                        </div>
                    </div>
                    <div className='d-flex ms-2'>
                        <p> {item.createdAt}</p>
                    </div>
                </div>))
                         : 
                <p className='text-danger fw-bolder fs-5 mt-4'>No Uploads yet !!</p>
                }
                </div>
            </div>
        </>
    )
}

export default MyBlog
