import React from 'react';
import './BannerPage.css';

const BannerPage = () => {
    return (
        <div className='banner-img'>
            <div className='w-100 d-flex justify-content-center align-items-center h-100 text-white '>
                <div className='banner-info'>
                    <h1 style={{fontSize:'4rem', fontWeight:"bold", color:'lightBlue'}}>Immigration Process Starts Here</h1>
                    <p className=''>
                    Immigration consultants help people immigrate from one country to another for study, work, travel or business purpose. They provide legal services in the area of immigration law as permitted by legislation.
                    </p>
                    <button className='btn-lg btn-danger px-5'>Discover</button>
                </div>
            </div>
        </div>
    );
};

export default BannerPage;