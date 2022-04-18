import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Couching.css';
import { AcademicCapIcon, AnnotationIcon, BeakerIcon, BookOpenIcon, DeviceTabletIcon, LibraryIcon } from '@heroicons/react/solid'

const Couching = () => {
    return (
        <div className='container py-3'>
            <h1 className='text-center my-5'>Couching</h1>
            <div className='row row-cols-md-2 row-cols-1 row-cols-lg-3 g-4'>
                <div className="col">
                    <p className='fs-3 text-danger'>Coaching</p>
                    <h1>Migrate Is Your Trusted <br /> Instructing Center</h1>
                    <p>We give master group to make extraordinary incentive for migration. Our confirmed and solid Immigration Consultant experts can assist you with getting a positive choice on your case. We give migration benefits in every single diverse region of nations.</p>
                </div>
                <div className="col">

                    <div className="text-center shadow rounded couching-card">
                        <p className="w-50 mx-auto">
                            <AcademicCapIcon></AcademicCapIcon>
                        </p>
                        <h3 className='pb-3'>Graduate Re-Exam</h3>
                    </div>
                </div>

                <div className="col-1 ">

                    <div className="text-center shadow rounded couching-card">
                        <p className="w-50 mx-auto">
                            <AnnotationIcon></AnnotationIcon>
                        </p>
                        <h3 className='pb-3'>PTE Coaching</h3>
                    </div>
                </div>
                <div className="col">
                    <div className="text-center shadow rounded couching-card">
                        <p className="w-50 mx-auto">
                            <LibraryIcon></LibraryIcon>
                        </p>
                        <h3 className='pb-3'>IELTS Coaching</h3>
                    </div>
                </div>
                <div className="col">
                    <div className="text-center shadow rounded couching-card">

                        <p className='w-50 mx-auto'>
                            <DeviceTabletIcon></DeviceTabletIcon>
                        </p>
                        <h3 className='pb-3'>Management Test</h3>
                    </div>
                </div>
                <div className="col">
                    <div className='text-center shadow rounded couching-card'>
                        <p className='w-50 mx-auto'><BookOpenIcon></BookOpenIcon></p>
                        <h3 className='pb-3'>Scholastic Apti</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Couching;