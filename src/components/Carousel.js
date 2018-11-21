import React from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';

import img1 from '../static/images/carousel/1.jpg';
import img2 from '../static/images/carousel/2.jpg';
import img3 from '../static/images/carousel/3.jpg';
import img4 from '../static/images/carousel/4.jpg';
import img5 from '../static/images/carousel/5.jpg';
import img6 from '../static/images/carousel/6.jpg';
import img7 from '../static/images/carousel/7.jpg';
import img8 from '../static/images/carousel/8.jpg';
import img9 from '../static/images/carousel/9.jpg';

const Slide = styled.div`
  p {
    background-repeat: no-repeat;
    background-size: cover;
    background: white;
  }
`;

class Carousel extends React.Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      autoplay: false,
      dots: true,
    };
    return (
      <>
        <Slider {...settings}>
          <Slide>
            <p style={{ backgroundImage: `url(${img1})` }}>
              words words words
            </p>
          </Slide>
          <Slide>
            <img src={img1} />
          </Slide>
          <Slide>
            <img src={img3} />
          </Slide>
          <Slide>
            <img src={img4} />
          </Slide>
          <Slide>
            <img src={img5} />
          </Slide>
          <Slide>
            <img src={img6} />
          </Slide>
          <Slide>
            <img src={img7} />
          </Slide>
          <Slide>
            <img src={img8} />
          </Slide>
          <Slide>
            <img src={img9} />
          </Slide>
        </Slider>
      </>
    );
  }
}

export default Carousel;