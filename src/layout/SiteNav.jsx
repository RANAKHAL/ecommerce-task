import React from 'react';
import { Navbar, Nav, Container, Form, InputGroup, NavDropdown, Button, Badge, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function SiteNav({ cart }) {
  const [showModal, setShowModal] = React.useState(false);

  const navigate = useNavigate();

  // Show or hide the modal
  const toggleModal = () => setShowModal(!showModal);

  // Dummy handler for cart icon click
  const handleGoToCart = () => {
    navigate('/Cart');
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className='arrive ms-3'>SHOP.CO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavDropdown title="Shop" id="navbarScrollingDropdown">
                {/* Mock Products Dropdown */}
                <NavDropdown.Item href="#product1">Product 1 - $100</NavDropdown.Item>
                <NavDropdown.Item href="#product2">Product 2 - $200</NavDropdown.Item>
                <NavDropdown.Item href="#product3">Product 3 - $300</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">On sale</Nav.Link>
              <Nav.Link href="#action2">New Arrivals</Nav.Link>
            </Nav>
            {/* <Form className="d-flex me-3">
              <InputGroup>
                <InputGroup.Text style={{ background: "#8F8F8F", border: "none", color: "#ffffff" }}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ background: "#8F8F8F", color: "#ffffff" }}
                  className="custom-placeholder"
                />
              </InputGroup>
        </Form>*/}
            <div className="d-flex align-items-center ms-2">
              <div className="position-relative" onClick={handleGoToCart} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                {cart.length > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    background: 'red',
                    borderRadius: '50%',
                    color: 'white',
                    padding: '5px 10px',
                    fontSize: '12px'
                  }}>
                    {cart.length}
                  </span>
                )}
              </div>
              <FontAwesomeIcon icon={faUserShield} size="2x" className="cart-icon ms-2" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Cart Modal */}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length > 0 ? (
            <ul className="list-unstyled">
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>Close</Button>
          <Button variant="primary">Checkout</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SiteNav;
