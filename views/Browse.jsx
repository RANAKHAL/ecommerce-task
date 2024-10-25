import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Browse() {
    return (
        <div className='mt-4 mb-4 rounded-4 browse'>
            <Container className='shadow pb-4 mb-5 bg-body-tertiary rounded'>
                {/* Stack the columns on mobile by making them full-width */}
                <Row className='formal mb-3'>
                    <Col xs={12} md={12} className='rounded-5 mb-3 '>
                        <img src="../src/assets/browse1.png" className="img-fluid rounded-5" alt="Browse 1" />

                        <img src="../src/assets/browse2.png" className='img-fluid rounded-5 w-50 ms-2' alt="Browse 2" />
                    </Col>
                </Row>
                <Row className=' mt-4'>
                    <Col xs={12} md={6} className='mb-3 mb-md-0'>
                        <img src="../src/assets/browse4.png" className='img-fluid rounded-5' alt="Browse 4" />
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="../src/assets/browse3.png" className="img-fluid rounded-5" alt="Browse 3" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
