import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import correct from '../src/assets/ture.png'; // Sample image for the subtitle icon

const OurHappy = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ratings, setRatings] = useState([0, 0, 0, 0]); // Initial ratings for each card
    const totalCards = 9;
    const cardWidth = 400;
    const transitionDuration = 500;

    const cardsData = [
        { title: 'Sarah M.', text: 'Great product!', id: 0 },
        { title: 'Alex K.', text: 'Amazing quality!', id: 1 },
        { title: 'James L.', text: 'Love the design!', id: 2 },
        { title: 'Nader', text: 'Excellent service!', id: 3 },
        { title: 'Rahf', text: 'Excellent service!', id: 5 },
        { title: 'Rana', text: 'Excellent service!', id: 6 },
        { title: 'Adam', text: 'Excellent service!', id: 7 },
        { title: 'Amina', text: 'Excellent service!', id: 8 },
    ];

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };

    const handleRating = (cardIndex, rating) => {
        setRatings(prevRatings => {
            const newRatings = [...prevRatings];
            newRatings[cardIndex] = rating;
            return newRatings;
        });
    };

    return (
        <div className="carouselParent">
            <div className="container">
                <div className="carousel-container">
                    <div className='d-flex'>
                        <h1 className=''>OUR HAPPY CUSTOMER</h1>
                        <div className='arrow'>
                            <button className="carousel-control prev" onClick={goToPrev}>
                                <img src="../src/assets/arrowL (2).png" alt="Previous" />
                            </button>
                            <button className="carousel-control next" onClick={goToNext}>
                                <img src="../src/assets/arrowR.png" alt="Next" />
                            </button>
                        </div>
                    </div>
                    <div className="carousel-wrapper">
                        <div
                            className="carousel"
                            style={{
                                transform: `translateX(-${currentIndex * cardWidth}px)`,
                                transition: `transform ${transitionDuration}ms ease-in-out`,
                                width: `${totalCards * cardWidth}px`,
                            }}
                        >
                            {cardsData.map((card, index) => (
                                <Card key={index} className="custom-card1" style={{ width: `${cardWidth}px`, opacity: index === 0 || index === totalCards - 1 ? '0.7' : '1' }}>
                                    <Card.Body>
                                        <Card.Title>
                                            <div className="card-title-container">
                                                <div className="stars">
                                                    {[...Array(5)].map((_, starIndex) => (
                                                        <FontAwesomeIcon
                                                            key={starIndex}
                                                            icon={faStar}
                                                            className={starIndex < ratings[index] ? "rated-star" : "unrated-star"}
                                                            onClick={() => handleRating(index, starIndex + 1)}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted nameTitle">
                                            {card.title}
                                            <img src={correct} alt="Icon" className="subtitle-icon" />
                                        </Card.Subtitle>
                                        <Card.Text>{card.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurHappy;
