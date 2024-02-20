import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { homeBlogAPI } from '../services/allAPI';
import { BASE_URL } from '../services/baseurl';
import './Home.css'

function Home() {

    const [homeBlog, setHomeBlog] = useState([])

    const getHomeBlog = async () => {
        const result = await homeBlogAPI()
        console.log(result.data);
        setHomeBlog(result.data)
    }

    useEffect(() => {
        getHomeBlog()
    }, [])

    return (
        <>
            <div style={{ backgroundImage: "url(https://static.wixstatic.com/media/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg/v1/fill/w_1899,h_594,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg)", backgroundRepeat: 'no-repeat',backgroundSize:"cover" }}>
                <div style={{ height: '600px' }} className='d-flex justify-content-center align-items-center'>
                    <Container className='text-center'>
                        <h1 style={{ fontWeight: 'bold', fontSize: '4vw', color: 'white' }}>Publish your passions, your way </h1>
                        <h5 style={{ color: 'white' }}>More bloggers and independent creators choose WordPress than any other blogging tool. Tap into intuitive,
                            flexible tools that put writers, bloggers, and creators first.</h5>
                        <Link style={{ textDecoration: 'none' }} to={'/login'}>
                            <Button style={{ color: 'white' }} className='btn btn-primary rounded p-2'><b>Start Blogging</b></Button>
                        </Link>
                    </Container>
                </div>
            </div>


            <div className="container justify-content-center align-items-center mt-5" id="team-members">
                <p className='text-center'>“Blogging is to writing what extreme sports are to athletics: more free-form, more accident-prone, less formal,<br /> more alive. It is, in many ways, writing out loud.”</p>
                <div className="row  mt-5">
                    {homeBlog?.length > 0 ?
                        homeBlog.map((item) => (
                            <div className="col-md-4 mt-3">
                                <div className='team-member'>
                                    <img
                                        src={item ? `${BASE_URL}/uploads/${item.blogImage}` : null}
                                        alt="no image"
                                        style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                                    />
                                    <div className='member-details'>
                                        <Link to="/login" style={{ textDecoration: "none" }}>
                                            <h3 className='text-center border' style={{ padding: "10px", backgroundColor: "white", color: 'purple' }}>{item.title}</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                        : null
                    }
                </div>
            </div>



            <div className="row mt-5 bg-primary" style={{ height: '80px',width:'100%' }}>
                <div className="col-md-2 " >

                </div>
                <div className="col-md-2 d-flex ms-5 mt-4 " >
                    <i class="fa-brands fa-facebook-f text-white "></i>
                    <h6 className='text-white ms-1'>Facebook</h6>
                </div>
                <div className="col-md-2 d-flex mt-4" >
                    <i class="fa-brands fa-instagram text-white"></i>
                    <h6 className='text-white ms-1'>Instagram</h6>
                </div>
                <div className="col-md-2 d-flex mt-4" >
                    <i class="fa-brands fa-pinterest text-white"></i>
                    <h6 className='text-white ms-1'>Pinterest</h6>

                </div>
                <div className="col-md-2 d-flex mt-4" >
                    <i class="fa-brands fa-twitter text-white"></i>
                    <h6 className='text-white ms-1'>Twitter</h6>

                </div>
                <div className="col-md-2 " >

                </div>
            </div>

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-3">
                        <img width={'100%'} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Traveller%20Blog/01.jpg" alt="no image" />

                    </div>
                    <div className="col-md-3">
                        <img width={'100%'} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Traveller%20Blog/02.jpg" alt="no image" />
                    </div>
                    <div className="col-md-3">
                        <img width={'100%'} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Traveller%20Blog/05.jpg" alt="no image" />
                    </div>
                    <div className="col-md-3">
                        <img width={'100%'} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Traveller%20Blog/04.jpg" alt="no image" />
                    </div>
                </div>
            </div>






        </>
    )
}

export default Home
