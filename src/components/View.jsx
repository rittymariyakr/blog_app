import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewCard from './ViewCard';

function View() {
    return (
        <>
            <Row>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <ViewCard/>
                </Col>




            </Row>
        </>
    )
}

export default View
