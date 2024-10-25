import React, { useState } from 'react';
import { Container, Row, Col, Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import filterIcon from '../src/assets/filters.png';

export default function AllReview() {
    const [activeTab, setActiveTab] = useState('Rating&Review');
    const navigate = useNavigate();

    const tabs = [
        { id: 'Products Details', label: 'Products Details' },
        { id: 'Rating&Review', label: 'Rating&Reviews' },
        { id: 'FAQs', label: 'FAQs' }
    ];

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const handleFilterClick = () => {
        navigate('/filter');
    };

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div className="tabs-header d-flex">
                        {tabs.map(tab => (
                            <div
                                key={tab.id}
                                className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => handleTabChange(tab.id)}
                            >
                                {tab.label}
                                {activeTab === tab.id && <div className="focus-line"></div>}
                            </div>
                        ))}
                    </div>

                    <Row className="mt-4 all d-flex flex-column flex-md-row">
                        <Col xs={12} md={6} className="text-center text-md-start">
                            <h1>All Reviews <span className='rev'>(451)</span></h1>
                        </Col>
                        <Col xs={12} md={6} className="d-flex flex-column flex-md-row justify-content-md-end align-items-center">
                            <Button className="bg-secondary border-0 me-md-2 mb-2 mb-md-0" onClick={handleFilterClick}>
                                <img src={filterIcon} alt="Filter Icon" />
                            </Button>
                            <Dropdown as={ButtonGroup} className="mb-2 mb-md-0">
                                <Button variant="secondary">Latest</Button>
                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button className='write bg-dark border-0 rounded-5 w-50 ms-2 w-md-auto'>
                                Write a Review
                            </Button>
                        </Col>
                    </Row>

                    <div className="tabs-content mt-4">
                        {activeTab === 'Rating&Review' && (
                            <div className='tab-panel'>
                                {/* Review content here */}
                            </div>
                        )}
                        {activeTab === 'Products Details' && (
                            <div className='tab-panel'>
                                <p>This is the product details section.</p>
                            </div>
                        )}
                        {activeTab === 'FAQs' && (
                            <div className='tab-panel'>
                                <p>This is the FAQs section.</p>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                    <Button className="views load w-25 align-middle rounded-5">
                        Load More Review
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
