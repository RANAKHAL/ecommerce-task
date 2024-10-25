import { useState, useEffect } from "react";
import { getProducts } from "../src/api/getProducts";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
const TopSelling = () => {
    const [products, setProducts] = useState([]);

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
            <hr />
            <div className="text-center ">
                <h1 className="arrive">Top Selling</h1>
                <Row className="mx-0">
                    {
                        products.filter((_, i
                        ) => i > 3 && i <= 7).map(product => (
                            <Col className="mt-5 pt-5 rounded-4" key={product.id} sm={12} lg={3}>
                                <Card className="rounded-4" style={{ border: 'none' }}>
                                    <Card.Img
                                        className="p-3"
                                        src={product.image}
                                        style={{ height: '500px', width: '100%', objectFit: 'cover' }}
                                    />
                                    <Card.Body>
                                        <Card.Title className="text-start ">
                                            <h4>Nickles rings accessories</h4>
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
                <Row className="mt-4 mx-0">
                    <Col className="d-flex justify-content-center">
                        <Button className="views  text-dark border-0 rounded-5">View All</Button>
                    </Col>
                </Row>
            </div>


        </>
    );
}

export default TopSelling;
