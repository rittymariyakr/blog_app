import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { editProfileResponseContext, isAuthTokenContext } from '../contexts/ContextShare';
import { BASE_URL } from '../services/baseurl';

function Header() {

  //using contextapi
  const { editProfileResponse, setEditProfileResponse } = useContext(editProfileResponseContext)

  const [profile, setProfile] = useState("")
  const [preview, setPreview] = useState("")
  const [profileDetails, setProfileDetails] = useState({
    username: "",
    profile: ""
  })

  const navigate = useNavigate()
  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)

  //logout
  const handleLogout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    setIsAuthToken(false)
    navigate('/')
  }

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const existingUser = JSON.parse(sessionStorage.getItem("existingUser"))
      setProfileDetails({ ...profileDetails, username: existingUser.username, })
      setProfile(existingUser.profile)
    }
  }, [editProfileResponse])


  useEffect(() => {
    if (profileDetails.profile) {
      setPreview(URL.createObjectURL(profileDetails.profile))
    }
    else {
      setPreview("")
    }
  }, [profileDetails.profile])

  return (
    <div>
      <Navbar expand="lg" className="bg-primary" style={{ height: '80px' }}>
        <Container fluid>
          <Navbar.Brand>

            <div className='d-flex'>
              <i class="fa-solid fa-blog text-light fa-2x"></i>
              <Link ><h1 className='text-light fw-1 ms-3'>BLOGGER</h1></Link>
            </div>

          </Navbar.Brand>
          <div className='d-flex '>
            {profile == "" ?
              <img style={{ borderRadius: "50px" }} width={'50px'} height={'50px'} src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="" /> :
              <img style={{ borderRadius: "50px" }} width={'50px'} height={'50px'} src={preview ? preview : `${BASE_URL}/uploads/${profile}`} alt="" />
            }
            <h5 className='mt-3 mr-3 ms-2'> <span className='text-light'> {profileDetails.username}</span></h5>
            <button onClick={handleLogout} className='btn btn-primary'> <h5><i class="fa-solid fa-power-off text-warning mt-3 ms-1"></i></h5></button>

          </div>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header
