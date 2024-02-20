import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { loginAPI, registerAPI } from '../services/allAPI';
import Swal from 'sweetalert2';
import { isAuthTokenContext } from '../contexts/ContextShare';

function Auth({ register }) {
    const {isAuthToken, setIsAuthToken} = useContext(isAuthTokenContext)

    //create a state for holding the value of user registration details
    const [userData, setUserData] = useState({
        username:"",
        email:"",
        password:""
    })
    const navigate = useNavigate()
    console.log(userData);

    const registerform = register ? true : false

    const handleRegister=async(e)=>{
        e.preventDefault()
        const {username, email, password} = userData
        if(!username || !email || !password){
            // alert('please fill the form completely')
            Swal.fire({
                icon:"info",
                title:"Please fill the form completely!"
            });

        }
        else{
            const result = await registerAPI(userData)
            console.log(result.data);
            
            if(result.status===200){
                // alert(`${result.data.username} is successfully registered`)
                Swal.fire({
                    title: "Successfully Registerd",
                    text: "",
                    icon: "success"
                  });
                setUserData({
                    username:"",
                    email:"",
                    password:""
                })
                //navigate to login page
                navigate('/login')
            }
            else{
                
                Swal.fire({
                    title: result.response.data,
                    text: "",
                    icon: "error"
                  });
            }
        }
    }
    //function to login
    const handleLogin = async (e) => {
        e.preventDefault()
    
        const { email, password } = userData
    
        if (!email || !password) {
            Swal.fire({
                icon:"info",
                title:"Please fill the form completely!"
            });        }
        else {
            
        const result = await loginAPI(userData)
        console.log(result);
    
         if(result.status===200){
            Swal.fire({
                //alert
                title: "Login Successfull",
                text: "",
                icon: "success"
              });
              setIsAuthToken(true)
              //store
              sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
              sessionStorage.setItem("token",result.data.token)

              //state empty
              setUserData({
                email:"",
                password:""
            })
            if (result.data.existingUser.email = "admin@gmail.com" && result.data.existingUser.password === 'admin123'){
                navigate('/admin-dashboard')
            }
            else{
                navigate('/user-dashboard')

            }

         }
         else{
            Swal.fire({
                title: result.response.data,
                text: "",
                icon: "error"
              });
            //navigate
            
         }
        }
    }



    return (
        <>
            <div style={{ width: '100%' }} className='d-flex justify-content-center align-items-center'>
                <div className='w-50 container mt-5'>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}><i class="fa-solid fa-arrow-left me-3"></i>Back to Home</Link>
                    <div className='card  p-3' style={{ borderRadius: '10px', boxShadow: '0px 0px 20px 0px #888888', backgroundColor: '#ffffff' }}>
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className='d-flex align-items-center flex-column'>
                                    <h1 className='fw-bolder text-dark mt-5' style={{fontSize:"250%"}}> <i className="fa-solid fa-blog text-primary fa-2x"></i> BLOGGER</h1>
                                    <h5 className='fw-bolder text-center mt-4 pb-3 text-black'>
                                        {
                                            registerform ?

                                                'Sign up to your Account' : 'Sign In to your Account'
                                        }
                                    </h5>
                                    <Form className='text-light w-75  mt-2'>
                                        {
                                            registerform &&

                                            <Form.Group className="mb-3 border border-black" controlId="formBasicEmail">
                                                <Form.Control type="text" placeholder="Username" value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} />
                                            </Form.Group>
                                        }
                                        <Form.Group className="mb-3 border border-black" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter your Email Id" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3 border border-black" controlId="formBasicEmail">
                                            <Form.Control type="password" placeholder="Enter your password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
                                        </Form.Group>
                                        {registerform ?
                                            <div className='text-center'>
                                                <button onClick={handleRegister} className=' w-50 btn btn-primary rounded-pill mt-3'>Register</button>
                                                <p className='text-black mt-2'>Already have account? Click here to <Link to={'/login'} style={{ color: 'blue' }}> Login</Link></p>
                                            </div> :
                                            <div className='text-center'>
                                                <button onClick={handleLogin} className='w-50 btn btn-primary rounded-pill mt-3'>Login</button>
                                                <p className='text-black mt-2'>New User? Click here to <Link to={'/register'} style={{ color: 'blue' }} > Register</Link></p>
                                            </div>}
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Auth


