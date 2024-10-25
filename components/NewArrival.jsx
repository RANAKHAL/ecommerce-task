import { useState, useEffect } from "react";
import { getProducts } from "../src/api/getProducts";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
const NewArrival = ({ totalStars = 5, onRate = () => { } }) => {
    const [products, setProducts] = useState([]);


    const [rating, setRating] = useState(0);

    const handleMouseEnter = (index) => {
        setRating(index + 1);
    };

    const handleMouseLeave = () => {
        setRating(0);
    };

    const handleClick = (index) => {
        onRate(index + 1);
    };

    useEffect(() => {
        getProducts(setProducts);
    }, []);
    const renderStaticRating = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    onClick={() => handleStarClick()}

                    style={{ cursor: 'pointer', color: "F6E96B" }}

                />
            );
        }
        return stars;
    };

    return (
        <>
            <div className="text-center ">
                <Container>
                    <h1 className="arrive">New Arrivals</h1>

                    <Row>
                        {
                            products.filter((_, i) => i <= 3).map(product => (
                                <Col className="mt-5 pt-5 rounded-4" key={product.id} sm={12} lg={3}>
                                    <Card className="rounded-4" style={{ border: 'none' }}>
                                        <Card.Img
                                            className="p-3"
                                            src={product.image}
                                            style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                                        />
                                        <Card.Body>
                                            <Card.Title className="text-start ">
                                                <h4>T-shirt With Tape Details</h4>
                                            </Card.Title>
                                            <div className="text-start">
                                                {renderStaticRating(product.rating)}
                                                {/* <span className="ms-2">{product.rating.toFixed(1)}</span> */}
                                                <span className="ms-4 rate">4.5</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12} className="d-flex justify-content-center">
                            <Button className="views bg-white text-dark border-0 rounded-5 px-4 py-2">View All</Button>
                        </Col>
                    </Row>

                </Container>

            </div>


        </>
    );
}

export default NewArrival;
