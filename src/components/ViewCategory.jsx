import React, { useContext, useEffect, useState } from 'react'
import { allCategoryAPI, deleteCategoryAPI } from '../services/allAPI'
import { addCategoryResponseContext, editCategoryResponseContext } from '../contexts/ContextShare'
import EditCategory from './EditCategory'

function ViewCategory() {

    const [allCategory, setAllCategory] = useState([])
//using contextapi
const {addCategoryResponse, setAddCategoryResponse} = useContext(addCategoryResponseContext)
//accessing contextapi for edit category
const {editCategoryResponse, setEditCategoryResponse} = useContext(editCategoryResponseContext)

//get category
    const getAllCategory = async()=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }

        const result = await allCategoryAPI(reqHeader)
        console.log(result.data);
        setAllCategory(result.data)

        }

        useEffect(()=>{
            getAllCategory()
        },[addCategoryResponse,editCategoryResponse])

//delete category
const handleDelete = async(id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
    const result = await deleteCategoryAPI(id, reqHeader)
    console.log(result.data);
    if(result.status===200){
        getAllCategory()
    }
    else{
        console.log(result.response.data);
    }

}



  return (
    <>
    <div className='mt-5 card rounded shadow p-5'>
    <div className='d-flex justify-content-between align-items-center'>
        <h4 className='text-primary'>BLOG CATEGORY</h4>
    </div>
    <div className='mt-4'>
        { allCategory?.length>0?
        allCategory?.map((item)=>(<div className='border mb-2'>
        <div className='d-flex align-items-center justify-content-between'>
            <div>
                <h5 className='ms-3'>{item.categoryName}</h5>
            </div>
            <div className='d-flex'>
                <EditCategory category={item}/>
            <button onClick={()=>handleDelete(item._id)} className='btn rounded'><i class="fa-solid fa-trash text-danger"></i></button>

            </div>
        </div>
    </div>))
             :     <p className='text-danger fw-bolder fs-5 mt-4'>No Uploads yet !!</p>
 }
    </div>
</div>

    </>
  )
}

export default ViewCategory
