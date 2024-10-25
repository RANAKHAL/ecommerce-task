import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import End from './End';
import Group from './Group';

export default function Like() {
    const [ratings, setRatings] = useState([4, 4, 4, 4]); // assuming 4 cards

    const handleRating = (cardIndex, rating) => {
        const newRatings = [...ratings];
        newRatings[cardIndex] = rating;
        setRatings(newRatings);
    };

    return (
        <div>
            <Container>
                <h1 className="arrive text-center">YOU MIGHT ALSO LIKE</h1>
                <Row>
                    {[...Array(4)].map((_, cardIndex) => (
                        <Col key={cardIndex} md={3}>
                            <Card className='rounded-3'>
                                <Card.Img src={`../src/assets/Like${cardIndex + 1}.png`} />
                            </Card>
                            <h4>Polo Wit Contrast Trims</h4>
                            <div className="stars">
                                {[...Array(5)].map((_, starIndex) => (
                                    <FontAwesomeIcon
                                        key={starIndex}
                                        icon={faStar}
                                        className={starIndex < ratings[cardIndex] ? "rated-star" : "unrated-star"}
                                        onClick={() => handleRating(cardIndex, starIndex + 1)}
                                    />
                                ))}

                                <div className='mx-auto edit' >4.0/5
                                </div>
                            </div>
                            <span className='d-flex'>
                                <h1>$212</h1>
                                <Button className='sale rounded-4 ms-3'>-20%</Button>
                                <span className='dolars mb-5 '><h1>$242</h1></span>
                            </span>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Group />
            <End />
        </div >
    );
}
