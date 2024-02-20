import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addCategoryAPI } from '../services/allAPI'
import { addCategoryResponseContext } from '../contexts/ContextShare'


function AddCategory() {

    const [addCategory, setAddCategory] = useState({
        categoryName: ""
    })
    //using contextapi
    const {addCategoryResponse, setAddCategoryResponse} = useContext(addCategoryResponseContext)

    //state to hold the token
    const [token, setToken] = useState("")

    console.log(addCategory);

    //clear form
    const clearForm = () => {
        setAddCategory({
            categoryName: ""
        })
    }
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
        else {
            setToken("")
        }
    }, [])

    //add category
    const handleAdd = async (e) => {
        e.preventDefault()

        const { categoryName } = addCategory
        if (!categoryName) {
            toast.info('Please Enter Category Name')
        }
        else {
            const reqBody = new FormData()
         
            reqBody.append("categoryName", categoryName)

            //reqHeader
            //reqHeader 
        if(token){
            const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
            }
            const result = await addCategoryAPI(reqBody, reqHeader)
            console.log(result);
    
            if(result.status===200){
                console.log(result.data);
                toast.success('Added Successfully')
                 clearForm()
                 //contextapi
                 setAddCategoryResponse(result.data)
                 
                 
            }
            else{
                toast.warning(result.response.data);
                clearForm()
            }
        }
        }
    }

    return (
        <>
            <div className="container">
                <div className="row card shadow p-5 mt-3 ">
                    <div className="col-md-12">
                        <h3 className='text-primary'>ADD CATEGORY</h3>
                        <form action="" className='mt-4'>
                            <div>
                                <input value={addCategory.categoryName} onChange={(e) => setAddCategory({ ...addCategory, categoryName: e.target.value })} className='form-control rounded' type="text" placeholder='Enter Category Name' />
                            </div>
                            <div className='mt-4 d-flex'>
                                <button onClick={clearForm} className='btn btn-secondary rounded'>Clear</button>

                                <button onClick={handleAdd} className='btn btn-primary rounded ms-3'>Add</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                theme="light"

            />
        </>
    )
}

export default AddCategory
