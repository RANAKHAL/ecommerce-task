import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the specific icon from FontAwesome
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Tshirt from './Tshirt';
import AllReview from './AllReview';
import Like from './Like';
import Filter from './Filter';
import Picker from './Picker';
import Cart from './Cart'

export default function About() {
    return (
        <div>
            <Container>
                <Nav className="me-auto">
                    <NavLink className="nav-link text-secondary " to="/">
                        Home
                        <span>
                            {/* Use the imported icon object */}
                            <FontAwesomeIcon icon={faCaretRight} className='mx-2' />
                        </span>
                    </NavLink>
                    <NavLink className="nav-link text-secondary " to="/shop">Shop
                        <span>
                            {/* Use the imported icon object */}
                            <FontAwesomeIcon icon={faCaretRight} className='mx-2' />
                        </span></NavLink>
                    <NavLink className="nav-link text-secondary " to="/new-arrivals">Men
                        <span>
                            {/* Use the imported icon object */}
                            <FontAwesomeIcon icon={faCaretRight} className='mx-2' />
                        </span></NavLink>
                    <NavLink className="nav-link text-secondary " to="/brands">
                        T-shirt
                        <span>
                            {/* Use the imported icon object */}
                            <FontAwesomeIcon icon={faCaretRight} className='mx-2' />
                        </span></NavLink>
                </Nav>
                <Tshirt />
            </Container>
            <AllReview />
            <Like />




        </div>
    );
}
