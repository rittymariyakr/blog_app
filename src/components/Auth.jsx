import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import { Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import Login from '../assets/Login.png';
import 'react-toastify/dist/ReactToastify.css';


function Auth() {

    return (
        <>
            < Container className="mt-5" >
                <div className="card shadow">
                    <Row>

                        <Col style={{ backgroundColor: 'black' }} className="col-md-5 d-flex justify-content-center align-items-center text-white">

                            <div className="w-100 d-flex justify-content-center align-items-center flex-column">
                                <h1 className="text-center text-white fw-bolder mb-3">LOGIN</h1>
                                <Form className="text-light w-75">
                                    <Form.Group className="mb-3" controlId="formBasicUsername">
                                        <Form.Control type="text" placeholder="Username" className="rounded-pill" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter your Email Id" className="rounded-pill" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Enter your password" className="rounded-pill" />
                                    </Form.Group>
                                    <div className='mt-4 text-center'>
                                        <button className='btn btn-primary rounded-pill'>Register</button>
                                        <p className='text-white mt-3'>Already a User? Click here to <Link to={'/login'} style={{ color: 'blue', textDecoration: 'none' }}>Login</Link></p>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col style={{ backgroundColor: 'rgb(207, 159, 255)' }} className="col-md-7 text-black">
                            <img className='' width={'100%'} src={Login} alt="" style={{ marginTop: '-7%' }} />
                            <p className='text-white fs-4' style={{ marginTop: '-12%' }}>The digital canvas of thoughts, the platform that gives voice to ideas, and the bridge connecting creators with their audience. It’s a dynamic medium that allows us to share insights,
                                ignite discussions, and influence the world from our corner of the Internet.</p>
                        </Col>
                    </Row>
                </div>
            </Container>

        </>
    )
}

export default Auth


