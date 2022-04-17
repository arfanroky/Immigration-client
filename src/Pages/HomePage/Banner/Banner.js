
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner-1.jpg';
import banner2 from '../../../images/banner-2.jpg';
import banner3 from '../../../images/banner-3.jpg';
import './Banner.css';


const Banner = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
      <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-box opacity-50" style={{height:'648px'}}
          src="https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/home-1/1920x1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='info' style={{color:'black'}}>
          <h3>TreatMent</h3>
          <p>Complete Medical Solutions in One Place</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 img-box"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption className='info'>
          <h3>Best Quality</h3>
          <p>MEDICAL TREATMENT FOR YOUR AND YOUR FAMILY</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  img-box"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption className='info' >
          <h3>Discover</h3>
          <p>
          WE WILL HELP YOU TOBECOME HEALTHY
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </>
    );
};

export default Banner;