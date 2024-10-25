import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Tshirt() {
  // Initialize state for ratings, selected color, and counter
  const [ratings, setRatings] = useState([0, 0, 0]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [counter, setCounter] = useState(0);

  // Handle rating change
  const handleRating = (cardIndex, rating) => {
    setRatings(prevRatings => {
      const newRatings = [...prevRatings];
      newRatings[cardIndex] = rating;
      return newRatings;
    });
  };

  // Handle color change
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Handle counter change
  const handleCounterChange = (action) => {
    if (action === 'increment') {
      setCounter(prevCounter => prevCounter + 1);
    } else if (action === 'decrement') {
      setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : 0));
    }
  };

  // Sample colors for demonstration
  const colors = ['#798A65', '#B5C99A', '#522258'];

  return (
    <div>
      <Container>
        <Row>
          <Col md={2}>
            <Figure className='d-flex'>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="../src/assets/t-shirt1.png"
                className='mt-2'
              />
            </Figure>
            <Figure className='d-flex'>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="../src/assets/t-shirt2 (2).png"
                className='mt-1'
              />
            </Figure>
            <Figure className='d-flex'>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="../src/assets/t-shirt3.png"
                className='mt-1'
              />
            </Figure>
          </Col>
          <Col md={4} className='mt-5'>
            <Figure.Image
              width={500}
              height={500}
              alt="171x180"
              src="../src/assets/t-shirt2 (2).png"
            />
          </Col>
          <Col md={6}>
            <div className='life mt-5 pt-3 ms-4'>
              <h1 className='arrive '>ONE LIFE GRAPHIC T-SHIRT</h1>
              <div className="stars">
                {[...Array(5)].map((_, starIndex) => (
                  <FontAwesomeIcon
                    key={starIndex}
                    icon={faStar}
                    className={starIndex < ratings[0] ? "rated-star" : "unrated-star"}
                    onClick={() => handleRating(0, starIndex + 1)}
                  />
                ))}
              </div>
              <span>
                <h1 className='mt-3 '>$260
                  <span className='dolars ms-2'>$300</span>
                  <Button className='sale rounded-4 ms-3'>-40%</Button>
                </h1>
              </span>
              <p className='edit'>  c Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto deleniti ad sint magnam, id sed voluptates eius obcaecati libero.</p>
            </div>
            <hr />

            <div className='alwan edit'>
              <p>Select Colors</p>
              <div className='color-buttons '>
                {colors.map(color => (
                  <Button
                    key={color}
                    className={`color-button ${selectedColor === color ? 'active' : ''}`}
                    style={{ backgroundColor: color, borderRadius: '50%', width: '40px', height: '40px', marginLeft: "10px" }}
                    onClick={() => handleColorChange(color)}
                  >
                    {selectedColor === color && <div className='active-sign'>✓</div>}
                  </Button>
                ))}
              </div>
            </div>
            <hr />

            <div>
              <p className='edit'>Choose Size</p>
              <Button className='rounded-4 size'>Small</Button>
              <Button className='rounded-4 size ms-2 meduim'>Meduim</Button>
              <Button className='rounded-4 size ms-2 large'>Large</Button>
              <Button className='rounded-4 size ms-2 x-large meduim'>X-Large</Button>
            </div>
            <hr />

            {/* Combined Counter Button */}
            <div className='counter me-4 '>
              <Button className='counter-btn rounded-4' onClick={() => handleCounterChange('decrement')}>
                <span>-</span>
                <span className='counter-display'>{counter}</span>
                <span onClick={(e) => { e.stopPropagation(); handleCounterChange('increment'); }}>+</span>
              </Button>
              <Button className='bg-dark ms-5 text-center rounded-5 border-0 w-50'>Add To Cart </Button>
            </div>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
