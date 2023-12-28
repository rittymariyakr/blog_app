import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpg';

function Home() {
    return (
        <>
            <div style={{ backgroundImage: { banner }, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '680px' }}>
                <div style={{ height: '600px' }} className='d-flex justify-content-center align-items-center '>
                    <Container className='text-center' >
                        <h1 style={{ fontWeight: 'bold', fontSize: '70px', color: 'black' }}>Publish your passions, your way </h1>
                        <h4>More bloggers and independent creators choose WordPress than any other blogging tool. Tap into intuitive,
                            flexible tools that put writers, bloggers, and creators first.</h4>
                        <Link style={{ textDecoration: 'none' }} to={'/cars'}><button style={{ color: 'white' }} className='btn btn-primary rounded-pill fs-4'><b>Start Bloging</b></button></Link>
                    </Container>

                </div>
            </div>

            <div className='container'>
                <div className="row">
                <h1 className='text '>Choose the perfect design</h1>
                    <div className="col-md-6">
                    <img width={'100%'} src="https://blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiKQBhcVtj--7thQ1JzOgtxMAjmy2cg09uEwEj62zYpgTwvLBCJSAvhmxuvL1DZrtOQ9409UIX0dyxPEY3ofOYElLwjGkEiLoVJk7tZfb-in_OymeFMdLREF0TETdMIKQBd6_9DuUGUnP-Nn28MNUwum8PJ_AdDwJy7Ook/w1200" alt="" />

                    </div>
                    <div className="col-md-6">
                        <img width={'100%'} src="https://blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjx779LcNXLMs6EgJdNpXYj5ocZc8vwDXHxdTVdlD48ClrgYXizupcdXgNMZpYUk7tgptCX20JBvJCcqaMfVF1FHpO2-I4LwRiU7OkMVThYTi5HDOwPt_2lcPmOxZWwfOANOTDJnR62CvGYtnhW_UAExYixMVgLjL8htGM/w1024" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
