import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import vector1 from "../src/assets/vector1.png";
import head from "../src/assets/head.png";
import vector2 from "../src/assets/vector2.png";

export default function Header() {
    return (
        <div className='header'>
            <div className="container">
                <Row className="align-items-center">
                    <Col md={6} sm={12} className="main">
                        <div className='title'>FIND CLOTHES THAT MATCHES YOUR STYLE</div>
                        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <Button variant="dark" className="shop">Shop Now</Button>

                        <Row className="mt-4 people text-center">
                            <Col xs={6} md={4}>
                                <div className="column-content plus">200+</div>
                                <div className="column-content interBrands">International Brands</div>
                            </Col>
                            <Col xs={6} md={4} className="">
                                <div className="column-content plus">2,000+</div>
                                <div className="column-content quality">High-Quality Products</div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="column-content plus">30,000+</div>
                                <div className="column-content customers">Happy Customers</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} sm={12} className="images">
                        <div className="image-wrapper">
                            <img src={vector1} className='vector1' alt="Vector 1" />
                            <img src={head} className="head" alt="Head" />
                            <img src={vector2} className='vector2' alt="Vector 2" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
