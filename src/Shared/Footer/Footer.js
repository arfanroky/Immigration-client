import React from 'react';
import './Footer.css';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className='container-fluid bg-dark text-light pt-4 pb-2'>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col">
                    <h2>Migrate</h2>
                    <p>Migrate provides the simplest solution for processing your all types of visa. Say good bye to end less hassles and confusions. There anyone who loves or pursues not some great to have pleasure.</p>
                </div>
                <div className="col">
                    <h2>Countries</h2>
                    <ul className='list-items'>
                        <li>Canada</li>
                        <li>United States</li>
                        <li>United Kingdom</li>
                        <li>Australia</li>
                        <li>Singapore</li>
                        <li>New Zealand</li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Visas Types</h2>
                    <ul className='list-items'>
                        <li>Students Visa</li>
                        <li>Business Visa</li>
                        <li>Family Visa</li>
                        <li>Travel Visa</li>
                        <li>Work Visa</li>
                    </ul>
                </div>
            </div>

            <p className='text-center fw-medium text-danger'>Migrate © {year} All Right Reserved</p>
            
            
        </footer>
    );
};

export default Footer;