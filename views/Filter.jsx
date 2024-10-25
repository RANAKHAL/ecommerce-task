import React, { useState } from 'react'; // Corrected useState import
import { Nav, Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Picker from "../views/Picker"
import Casual from "../views/Casual"
function Filter({ name, ...props }) {
    const [show, setShow] = useState(false); // Correctly using useState hook
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    return (
        <div>
            <Container>
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home" className='edit'>Home
                            <FontAwesomeIcon icon={faCaretRight} className='mx-2' />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className='edit'>Casual
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Picker />
                <Casual />
            </Container>
        </div>
    );
}

export default Filter;
