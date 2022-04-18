import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../images/about.png';

const About = () => {
    return (
        <div className='container py-5'>

            <div className="row row-cols-1 row-cols-md-2 
            g-4
            w-100
            h-100
            justify-content-center align-items-center ">
                <div className="col">
                <img className='img-fluid' src={about} alt="" />
                </div>

                <div className="col">
                <p className='p-0 m-0 fs-5 fw-bold'>About </p>
                <h2 className='text-danger'>Experienced Lawyers Provide</h2>
                <h1>Immigration Services.</h1>
                <p className=''>
                Once you have decided that you are comfortable with this assessment, i will provide you with a complete breakdown of all service fees from beginning to end with no hidden fees! I also offer flexible payment plans and you don't pay anything more.
                </p>
                 <ul>
                     <li>Talk to me if needed</li>
                     <li>Find more information our website</li>
                 </ul>
               <Link to='/'>
               <button className='btn btn-lg btn-danger px-5 '>More Detail</button>
               </Link>
                </div>
            </div>
            
        </div>
    );
};

export default About;