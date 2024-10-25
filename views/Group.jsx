import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Group() {
    return (
        <div>
            <Container>
                <div className="shadow-box p-4 mt-4 rounded-4 z-3 position-absolute me-5">
                    <h1 className="offer-heading arrive">STAY UP TO DATE ABOUT OUR LATEST OFFER</h1>
                    <Form>
                        <div className="position-relative mb-5 ms-5 ps-4">
                            <Form.Control
                                type="email"
                                placeholder="Email Address "
                                className="email-input text-center bg-light"  // Add padding-left to account for the icon
                            />
                            <Form.Control
                                type="email"
                                placeholder="subscribe the newsLetter "
                                className="subscribe text-center mt-4 bg-light"  // Add padding-left to account for the icon
                            />
                        </div>

                    </Form>
                </div>
            </Container>
        </div>
    );
}
