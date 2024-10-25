import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faGithub, faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function End() {
    return (
        <div className='end w-100 z-n1 position-relative'>
            <Container>
                <Row className='mt-5 pt-5'>
                    {/* First Column with SHOP.CO */}
                    <Col md={4} className='d-flex flex-column align-items-start mt-5'>
                        <div className='summary'>
                            <h1 className='arrive mt-5 '>SHOP.CO</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nobis Lorem ipsum, dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTwitter} className='twitter me-2' />
                            <FontAwesomeIcon icon={faFacebookF} className='face me-2' />
                            <FontAwesomeIcon icon={faInstagram} className='instagram me-2' />
                            <FontAwesomeIcon icon={faGithub} className='github' />
                        </div>
                    </Col>

                    {/* Other Columns */}
                    <Col md={2}>
                        <h3 className="company">COMPANY</h3>
                        <ul className="list-unstyled work">
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Careers</li>
                        </ul>
                    </Col>

                    <Col md={2}>
                        <h3 className="company">HELP</h3>
                        <ul className="list-unstyled work">
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>

                    <Col md={2}>
                        <h3 className="company">FAQ</h3>
                        <ul className="list-unstyled work">
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </Col>

                    <Col md={2}>
                        <h3 className="company">RESOURCES</h3>
                        <ul className="list-unstyled work">
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How-to Blog</li>
                            <li>YouTube Playlist</li>
                        </ul>
                    </Col>
                </Row>

                <hr />

                <Row>
                    {/* Footer with Payment Buttons */}
                    <Col md={6}>
                        <footer className="text-start">
                            <h1>Shop.Co <FontAwesomeIcon icon={faCopyright} className='copy' /> 2000-2023, All Rights Reserved</h1>
                        </footer>
                    </Col>
                    <Col md={6}>
                        <div className="text-end">
                            <Button className="me-2 visa "><FontAwesomeIcon icon={faCcVisa} /></Button>
                            <Button className="me-2 visa "><FontAwesomeIcon icon={faCcMastercard} /></Button>
                            <Button className="me-2 visa"><FontAwesomeIcon icon={faCcPaypal} /></Button>
                            <Button className="me-2 pay"><h4>GPay</h4></Button> {/* Example additional payment method */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
