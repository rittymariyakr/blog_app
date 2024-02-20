import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div style={{ width: '100%', color: 'black', boxShadow: 'initial' }} className='d-flex mt-5 align-items-center flex-column bg-primary'>
                <div className="footer w-100">
                    <div className="row mt-5 ms-5 me-2">
                        <div className="col-md-3 col-lg-3mb-4">
                            <h5 className="mt-2 fs-4 text-white" style={{fontWeight:'bolder'}}><i class="fa-solid fa-blog text-light "></i> BLOGGER</h5>
                            <div className="mt-4 text-light justify-content">
                                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab nobis iure debitis. Non, iusto facilis, fugiat quos incidunt et quisquam dignissimos illum id dicta fuga labore cumque doloremque earum.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 mb-4">
                            <h5 className="text-light mt-2 fs-4 ">LINKS</h5>
                            <div className="mt-4">
                                <p className='footer-link '><Link to={'/'} style={{ textDecoration: "none", color: 'white' }}><i class="fa-solid fa-house"></i> Home</Link></p>
                                <p className='footer-link '><Link to={'./register'} style={{ textDecoration: "none", color: 'white' }}><i class="fa-solid fa-registered"></i> Register</Link></p>
                                <p className='footer-link '><Link to={'./login'} style={{ textDecoration: "none", color: 'white' }}><i class="fa-solid fa-right-to-bracket"></i> Login</Link></p>
                                <p className='footer-link '><Link to={'./dashboard'} style={{ textDecoration: "none", color: 'white' }}><i class="fa-solid fa-gauge"></i> Dashboard</Link></p>
                                <p className='footer-link '><Link to={'./project'} style={{ textDecoration: "none", color: 'white' }}><i class="fa-solid fa-book"></i> Blogs</Link></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 mb-4">
                            <h5 className="text-light mt-2 fs-4 ">GUIDES</h5>
                            <div className="mt-4">
                                <p className='footer-link '><Link style={{ textDecoration: "none", color: 'white' }}><i class="fa-brands fa-react"></i> React</Link></p>
                                <p className='footer-link '><Link style={{ textDecoration: "none", color: 'white' }}><i class="fa-solid fa-book"></i> Bootswatch</Link></p>
                                <p className='footer-link '><Link style={{ textDecoration: "none", color: 'white' }}><i class="fa-brands fa-bootstrap"></i> Bootstrap</Link></p>
                                <p className='footer-link '><Link style={{ textDecoration: "none", color: 'white' }}><i class="fa-solid fa-wand-sparkles"></i> Material UI</Link></p>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 mb-4">
                            <h5 className="text-light mt-2 fs-4 ">Follow us</h5>
                            <div className="mt-4">
                                <p className='footer-link '><Link style={{ textDecoration: "none", color: 'white' }}><i class="fa-brands fa-facebook"></i>  Facebook</Link></p>
                                <p className='footer-link '><Link style={{ textDecoration: "none", color: 'white' }}><i class="fa-brands fa-instagram"></i>  Instagram</Link></p>
                                <p className='footer-link '><Link style={{ textDecoration: "none", color: 'white' }}><i class="fa-brands fa-square-twitter"></i>  Twitter</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Footer

