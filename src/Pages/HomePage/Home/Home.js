import React from 'react';
import Couching from '../../Couching/Couching';
import Services from '../../Services/Services';
import BannerPage from '../BannerPage/BannerPage';

const Home = () => {
    return (
        <>
            <BannerPage/>
            <Services></Services>
            <Couching></Couching>
        </>
    );
};

export default Home;