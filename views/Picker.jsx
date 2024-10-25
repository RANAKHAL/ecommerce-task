import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container, Row, Col, Button, ListGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Range } from 'react-range';


export default function Picker() {
    const [show, setShow] = useState(false); // State for Offcanvas visibility
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle the color dropdown
    const [showSizes, setShowSizes] = useState(false); // State to toggle the sizes dropdown
    const [showDress, setShowDress] = useState(false); // State to toggle the dress styles section
    const [selectedColor, setSelectedColor] = useState(null); // State for selected color
    const [values, setValues] = useState([50, 200]); // State for range slider values
    const colors = ['#00712D', '#FF0000', '#FFF455', '#E85C0D', '#3AB0FF', '#FF4B91', '#8C3061', '#000', '#C4E4FF', '#D8D9CF']; // 10 Available colors
    const handleClose = () => setShow(false); // Close Offcanvas
    const toggleShow = () => setShow((s) => !s); // Toggle Offcanvas visibility
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Toggle color dropdown visibility
    const toggleSizes = () => setShowSizes(!showSizes); // Toggle size dropdown visibility
    const toggleDress = () => setShowDress(!showDress); // Toggle dress styles section visibility
    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    return (
        <div>
            <Container>
                <Row className='align-items-start'>
                    <Col md={3} className='mt-4'>
                        <div className='mt-4 '>
                            <Button variant="secondary" onClick={toggleShow} className="me-2 mb-3">
                                <img src="../src/assets/filters.png" alt="filter" />
                            </Button>
                            <h1>Casual</h1>
                            <Offcanvas show={show} onHide={handleClose} scroll backdrop>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title className='mt-4 line'>
                                        <h1>Filters</h1>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body style={{ maxHeight: '100vh', overflowY: 'auto' }}>
                                    <ListGroup>
                                        <ListGroup.Item className='border border-0 edit'>
                                            T-shirts
                                            <FontAwesomeIcon icon={faCaretRight} className='float-end' />
                                        </ListGroup.Item>
                                        <ListGroup.Item className='border border-0 edit'>
                                            Shorts
                                            <FontAwesomeIcon icon={faCaretRight} className='float-end' />
                                        </ListGroup.Item>
                                        <ListGroup.Item className='border border-0 edit'>
                                            Shirts
                                            <FontAwesomeIcon icon={faCaretRight} className='float-end' />
                                        </ListGroup.Item>
                                        <ListGroup.Item className='border border-0 edit'>
                                            Hoodie
                                            <FontAwesomeIcon icon={faCaretRight} className='float-end' />
                                        </ListGroup.Item>
                                        <ListGroup.Item className='border border-0 edit'>
                                            Jeans
                                            <FontAwesomeIcon icon={faCaretRight} className='float-end' />
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <hr />
                                    <Form.Label>
                                        <h1>Price</h1>
                                    </Form.Label>
                                    <Form.Group className="mt-4">
                                        <Range
                                            values={values}
                                            step={1}
                                            min={0}
                                            max={300}
                                            onChange={setValues}
                                            renderTrack={({ props, children }) => (
                                                <div
                                                    {...props}
                                                    style={{
                                                        ...props.style,
                                                        height: '6px',
                                                        width: '100%',
                                                        backgroundColor: '#ddd',
                                                    }}
                                                >
                                                    {children}
                                                </div>
                                            )}
                                            renderThumb={({ props }) => (
                                                <div
                                                    {...props}
                                                    style={{
                                                        ...props.style,
                                                        height: '24px',
                                                        width: '24px',
                                                        backgroundColor: '#000',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                />
                                            )}
                                        />
                                    </Form.Group>
                                    <hr />
                                    {/* Dropdown for color selection */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1>Colors</h1>
                                        <Button onClick={toggleDropdown} variant='light'>
                                            <FontAwesomeIcon icon={faCaretDown} className='float-end' />
                                        </Button>
                                    </div>
                                    {/* Dropdown content */}
                                    {dropdownOpen && (
                                        <div className="mt-2">
                                            <Row>
                                                {colors.slice(0, 5).map((color, index) => (
                                                    <Col key={index} xs={2} className="mb-2 text-center">
                                                        <Button
                                                            className={`color-button ${selectedColor === color ? 'active' : ''}`}
                                                            style={{ backgroundColor: color, borderRadius: '50%', width: '40px', height: '40px' }}
                                                            onClick={() => handleColorChange(color)}
                                                        >
                                                            {selectedColor === color && <div className="check-mark">✓</div>}
                                                        </Button>
                                                    </Col>
                                                ))}
                                            </Row>
                                            <Row>
                                                {colors.slice(5, 10).map((color, index) => (
                                                    <Col key={index} xs={2} className="mb-2 text-center">
                                                        <Button
                                                            className={`color-button ${selectedColor === color ? 'active' : ''}`}
                                                            style={{ backgroundColor: color, borderRadius: '50%', width: '40px', height: '40px' }}
                                                            onClick={() => handleColorChange(color)}
                                                        >
                                                            {selectedColor === color && <div className="check-mark">✓</div>}
                                                        </Button>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </div>
                                    )}
                                    <hr />

                                    {/* Dropdown for sizes */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1>Sizes</h1>
                                        <Button onClick={toggleSizes} variant='light'>
                                            <FontAwesomeIcon icon={faCaretDown} className='float-end' />
                                        </Button>
                                    </div>

                                    {/* Sizes content */}
                                    {showSizes && (
                                        <div className='edit'>
                                            <p>
                                                <Button className='rounded-4 size ms-2 meduim'>XX-Small</Button>
                                                <Button className='rounded-4 size meduim ms-2'>X-Small</Button>
                                            </p>
                                            <p>
                                                <Button className='rounded-4 size ms-2 meduim'>Small</Button>
                                                <Button className='rounded-4 size ms-2 x-large meduim'>Medium</Button>
                                            </p>
                                            <p>
                                                <Button className='rounded-4 size ms-2 meduim'>Large</Button>
                                                <Button className='rounded-4 size ms-2 x-large meduim'>X-Large</Button>
                                            </p>
                                            <p>
                                                <Button className='rounded-4 size ms-2 meduim'>XX-Large</Button>
                                                <Button className='rounded-4 size ms-2 x-large meduim'>3X-Large</Button>
                                            </p>
                                            <p>
                                                <Button className='rounded-4 size ms-2 meduim'>4X-Large</Button>
                                            </p>
                                            <hr />
                                        </div>
                                    )}

                                    {/* Dropdown for dress styles */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1>Dress Styles</h1>
                                        <Button onClick={toggleDress} variant='light'>
                                            <FontAwesomeIcon icon={faCaretDown} className='float-end' />
                                        </Button>
                                    </div>

                                    {/* Dress styles content */}
                                    {showDress && (
                                        <div>
                                            <ListGroup>
                                                <ListGroup.Item className='border border-0 edit'>
                                                    Casual
                                                    <FontAwesomeIcon icon={faCaretRight} className='float-end' />
                                                </ListGroup.Item>
                                                <ListGroup.Item className='border border-0 edit'>
                                                    Formual
                                                    <FontAwesomeIcon icon={faCaretRight} className='float-end' />
                                                </ListGroup.Item>
                                                <ListGroup.Item className='border border-0 edit'>
                                                    Party
                                                    <FontAwesomeIcon icon={faCaretRight} className='float-end' />
                                                </ListGroup.Item>
                                                <ListGroup.Item className='border border-0 edit'>
                                                    Gym
                                                    <FontAwesomeIcon icon={faCaretRight} className='float-end' />
                                                </ListGroup.Item>

                                            </ListGroup>
                                        </div>
                                    )}
                                    <Button className='rounded-5 apply border-0 app bg-black '> Apply Filter</Button>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
