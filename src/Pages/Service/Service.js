import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { img, name, price, desc } = service;
    const descSlice = desc.slice(0, 200)

    return (

        <Col>
            <Card style={{ height: '550px', position: 'relative' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {descSlice}
                    </Card.Text>
                    <Card.Text>
                        <span>Price:</span> {price}
                    </Card.Text>

                    <Link to='/checkout'>
                        <button className='btn-lg btn-outline-danger w-100 checkout-btn'>
                            Checkout
                        </button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
