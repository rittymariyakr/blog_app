import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import { Col, Row } from 'react-bootstrap'
import SideBar from './SideBar'
import { editProfileAPI } from '../services/allAPI'
import { BASE_URL } from '../services/baseurl'
import { editProfileResponseContext } from '../contexts/ContextShare'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'


function MyProfile() {
  // const [userDetails, setUserDetails] = useState({})
  //using contextapi
  const { editProfileResponse, setEditProfileResponse } = useContext(editProfileResponseContext)

  const [profileDetails, setProfileDetails] = useState({
    // id: userDetails._id,
    username: "",
    email: "",
    profile: ""

  })
  const [preview, setPreview] = useState("")
  const [userImage, setUserImage] = useState("")
  const [isUpdate, setIsUpdate] = useState(false)


  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"))
    console.log(user);
    setProfileDetails({ ...profileDetails, username: user.username, email: user.email })
    setUserImage(user.profile)
  }, [isUpdate])

  useEffect(() => {
    if (profileDetails.profile) {
      setPreview(URL.createObjectURL(profileDetails.profile))
    }
    else {
      setPreview("")
    }
  }, [profileDetails.profile])

  console.log("profileDetails:", profileDetails);
  console.log("preview:", preview);



  const handleUpload = async () => {
    const { id, username, email, profile } = profileDetails
    if (!username || !email) {
      alert('Please Fill the Form Completely!')
    }
    else {
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      preview ? reqBody.append("profile", profile) : reqBody.append("profile", userImage)
    

      const token = sessionStorage.getItem("token")
      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await editProfileAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success('profile updated successfully')

          setIsUpdate(true)
          sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          setEditProfileResponse(result.data)
        }
        else {
          console.log(result.response.data)
        }
      }
      else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await editProfileAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success('profile updated successfully')
          setIsUpdate(true)
          sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          setEditProfileResponse(result.data)
        }
        else {
          console.log(result.response.data)
        }
      }

    }

  }


  return (
    <>
      <Header />
      <div>
        <Row classNamue='container-fluid  ' style={{ height: '100vh' }}>
          <Col md={2} style={{ background: '#f8f9fa ' }} >
            <SideBar />
          </Col>

          <Col md={7} className='blog-card' style={{ overflowY: 'auto', maxHeight: '775px' }} >
            <div className='card shadow p-5 mt-5' >
              <div className='d-flex justify-content-between'>
                <h4 className='text-primary'>My Profile</h4>
                {/* <button  className='btn btn-outline-info  ms-5 rounded p-1'><i class="fa-solid fa-angle-down"></i></button> */}
              </div>
              <div className='row justify-content-center mt-4'>
                <label htmlFor="profile" className='text-center'>
                  <input
                    type="file"
                    id='profile'
                    style={{ display: 'none' }}
                    onChange={(e) => setProfileDetails({ ...profileDetails, profile: e.target.files[0] })}
                  />

                  {userImage == "" ?
                    <img width={'250px'} height={'250px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU" alt="no image" className='rounded-circle' /> :
                    <img width={'250px'} height={'250px'} src={preview ? preview : `${BASE_URL}/uploads/${userImage}`} alt="no image" />}
               
               

                </label>
                <div>
                  <input className='form-control mt-4 w-100' type="text" placeholder='Name' value={profileDetails.username} onChange={(e) => setProfileDetails({ ...profileDetails, username: e.target.value })} />

                </div>
                <div>
                  <input className='form-control mt-4 w-100' type="text" placeholder='Email ID' value={profileDetails.email} onChange={(e) => setProfileDetails({ ...profileDetails, email: e.target.value })} />

                </div>
                <div>
                  <button onClick={handleUpload} className='btn btn-primary mt-4 textt-center w-50' style={{ marginLeft: "150px" }}>Update</button>
                </div>
              </div>
            </div>
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

export default MyProfile
