import React, { useState } from 'react';
import { Nav, Container, Row, Col, Card, InputGroup, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faTrash, faTag, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Group from './Group';
import End from './End';

export default function Cart({ product }) {
    const [cart, setCart] = useState([]);
    const [promoCode, setPromoCode] = useState('');

    // Define product list with unique counts for each item
    const [products, setProducts] = useState([
        { id: 1, name: 'Gradient Graphic T-shirt', size: 'Large', color: 'White', price: 145, count: 1, img: '../src/assets/C1.png' },
        { id: 2, name: 'Checkered T-shirt', size: 'Medium', color: 'Red', price: 180, count: 1, img: '../src/assets/C5.png' },
        { id: 3, name: 'Skinny Jeans', size: 'Large', color: 'Blue', price: 240, count: 1, img: '../src/assets/Cart2.png' }
    ]);

    const handleCounterChange = (id, action) => {
        setProducts(prevProducts => prevProducts.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    count: action === 'increment' ? product.count + 1 : Math.max(1, product.count - 1) // Prevent count from going below 1
                };
            }
            return product;
        }));
    };

    const handleApplyPromo = () => {
        alert(`Promo Code Applied: ${promoCode}`);
    };

    return (
        <div>
            <Container>
                <Nav activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home" className='edit'>Home
                            <FontAwesomeIcon icon={faCaretRight} className='mx-2' />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className='edit'>Cart</Nav.Link>
                    </Nav.Item>
                </Nav>
                <h1 className='arrive'>YOUR CART</h1>
                <Row>
                    <Col md={7}>
                        {products.map(product => (
                            <Card body key={product.id}>
                                <Row>
                                    <Col sm={3}>
                                        <img src={product.img} className='Gardiant' alt={product.name} />
                                    </Col>
                                    <Col>
                                        <span className='graph'>
                                            {product.name}
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                style={{ color: "#f80d0d" }}
                                                className='float-end'
                                            />
                                            <div className='counter float-end mt-4'>
                                                <Button className='counter-btn rounded-4 mt-4 bg-light border-0'>
                                                    <span onClick={() => handleCounterChange(product.id, 'decrement')}>-</span>
                                                    <span className='counter-display'>{product.count}</span>
                                                    <span onClick={() => handleCounterChange(product.id, 'increment')}>+</span>
                                                </Button>
                                            </div>
                                        </span>
                                        <ul className="list-unstyled">
                                            <li>Size: <span className='edit'>{product.size}</span></li>
                                            <li>Color: <span className='edit'>{product.color}</span></li>
                                        </ul>
                                        <div className='graph'><h2>${product.price}</h2></div>
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </Col>
                    <Col md={5}>
                        <Card body className='rounded-4'>
                            <h4>Order Summary</h4>
                            <ul className='list-unstyled'>
                                <li className='edit'>Subtotal
                                    <span className='float-end text-dark graph'>
                                        ${products.reduce((acc, product) => acc + (product.price * product.count), 0)}
                                    </span>
                                </li>
                                <li className='edit'>Discount (-20%)
                                    <span className='float-end text-danger graph'>-${(products.reduce((acc, product) => acc + (product.price * product.count), 0) * 0.20).toFixed(2)}</span>
                                </li>
                                <li className='edit'>Delivery fee
                                    <span className='float-end text-dark graph'>$15</span>
                                </li>
                                <hr />
                                <li className='edit'>Total
                                    <span className='float-end text-dark graph'>
                                        ${(products.reduce((acc, product) => acc + (product.price * product.count), 0) * 0.80 + 15).toFixed(2)}
                                    </span>
                                </li>
                            </ul>
                            <span className='d-flex'>
                                <InputGroup className="mt-3 w-75 ">
                                    <Button variant="light" onClick={handleApplyPromo} >
                                        <FontAwesomeIcon icon={faTag} style={{ color: "#c4c4c4", }} />
                                    </Button>
                                    <FormControl
                                        placeholder="Add promo code"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                        className='bg-light border-0  '
                                    />
                                </InputGroup>
                                <Button className='bg-dark ms-2 mt-2  rounded-5 border-0 w-25'>Apply </Button>
                            </span>
                            <hr />
                            <Button className='bg-dark text-center apply  w-75 rounded-5 border-0 '>Go to CheckOut <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f7f7f7", }} /> </Button>
                        </Card>
                    </Col>
                </Row>
                <Group />
            </Container>
            <End />
        </div >
    );
}
