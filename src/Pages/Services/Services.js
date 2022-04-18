import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='container py-5'>
            <div className='my-5 text-center'>
                <h5>CHOOSE YOUR CATOGARY VISA</h5>
                <h1 className='fs-1 fw-bold'>With Migrate Immigration <br />
                Visa
                    Service Provide.
                </h1>
            </div>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </Row>

        </div>
    );
};

export default Services;