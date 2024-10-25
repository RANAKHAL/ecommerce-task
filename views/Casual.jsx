import React, { useState } from 'react';
import { Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Group from './Group'
import End from './End'
export default function Casual() {
    // Initialize ratings with float values
    const [ratings, setRatings] = useState([4.5, 4, 3.5, 4]);

    // Function to handle rating changes
    const handleRating = (rating, cardIndex) => {
        const newRatings = [...ratings];
        newRatings[cardIndex] = rating; // Update rating for the correct card
        setRatings(newRatings); // Set new ratings state
    };

    // Function to render stars with half-star support
    const renderStars = (rating, cardIndex) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            // Full star if the rating is greater than or equal to the current index
            if (i <= rating) {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="rated-star"
                        onClick={() => handleRating(i, cardIndex)}
                    />
                );
            }
            // Half star if rating is greater than (i-0.5) but less than i
            else if (i - 0.5 === rating) {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStarHalfAlt}
                        className="rated-star"
                        onClick={() => handleRating(i - 0.5, cardIndex)}
                    />
                );
            }
            // Unrated star if no condition matches
            else {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="unrated-star"
                        onClick={() => handleRating(i, cardIndex)}
                    />
                );
            }
        }
        return stars;
    };

    return (
        <div>
            <Col md={12} className="m-4">
                <Row>
                    {[0, 1, 2].map((cardIndex) => (
                        <Col key={cardIndex} md={4}>
                            <Card className='border-0'>
                                <Card.Img variant="top" src={`../src/assets/C${cardIndex + 1}.png`} />
                            </Card>
                            <h2>Gradient Graphic T-shirt</h2>
                            <div className="stars">
                                {/* Render stars for each card */}
                                {renderStars(ratings[cardIndex], cardIndex)}
                            </div>
                            <span className='d-flex'>
                                <h1>$212</h1>
                                <Button className='sale rounded-4 ms-3'>-20%</Button>
                                <span className='dolars mb-5 '><h1>$242</h1></span>
                            </span>
                        </Col>
                    ))}
                </Row>
                <Row className='mt-4'>
                    {[3, 4, 5].map((cardIndex) => (
                        <Col key={cardIndex} md={4}>
                            <Card className='border-0'>
                                <Card.Img variant="top" src={`../src/assets/C${cardIndex - 2}.png`} />
                            </Card>
                            <h2>Gradient Graphic T-shirt</h2>
                            <div className="stars">
                                {/* Render stars for each card */}
                                {renderStars(ratings[cardIndex - 3], cardIndex - 3)}
                            </div>
                            <span className='d-flex'>
                                <h1>$200</h1>
                                <Button className='sale rounded-4 ms-3'>-20%</Button>
                                <span className='dolars mb-5 '><h1>$222</h1></span>
                            </span>
                        </Col>
                    ))}
                </Row>
                <Row className='mt-4'>
                    {[3, 4, 5].map((cardIndex) => (
                        <Col key={cardIndex} md={4}>
                            <Card className='border-0'>
                                <Card.Img variant="top" src={`../src/assets/C${cardIndex - 2}.png`} />
                            </Card>
                            <h2>Gradient Graphic T-shirt</h2>
                            <div className="stars">
                                {/* Render stars for each card */}
                                {renderStars(ratings[cardIndex - 3], cardIndex - 3)}
                            </div>
                            <span className='d-flex'>
                                <h1>$302</h1>
                                <Button className='sale rounded-4 ms-3'>-20%</Button>
                                <span className='dolars mb-5 '><h1>$322</h1></span>
                            </span>
                        </Col>
                    ))}
                </Row>
            </Col>
            <Pagination className='justify-content-center  '>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            <Group />

        </div>

    );
}
