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

const CarouselStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 80% 1fr;
`;

class Carousel extends React.Component {
  next = () => { this.slider.slickNext(); }

  previous = () => { this.slider.slickPrev(); }
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      speed: 500,
      autoplay: false,
      focusOnSelect: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ],
    };
    return (
      <CarouselStyle>
        <button className="button carousel-button" onClick={this.previous}><span role="img" aria-label="previous">⬅️</span></button>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <img src={img1} alt="Writing example" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae turpis massa sed elementum tempus egestas sed. Odio aenean sed adipiscing diam donec adipiscing tristique. Donec adipiscing tristique risus nec feugiat.</p>
          </div>
          <div key={2}>
            <img src={img2} alt="Writing example" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Duis at consectetur lorem donec massa. Consequat nisl vel pretium lectus quam id leo.</p>
          </div>
          <div key={3}>
            <img src={img3} alt="Writing example" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Risus ultricies tristique nulla aliquet enim.</p>
          </div>
          <div key={4}>
            <img src={img4} alt="Writing example" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Duis at consectetur lorem donec massa. Consequat nisl vel pretium lectus quam id leo.</p>
          </div>
          <div key={5}>
            <img src={img5} alt="Writing example" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Risus ultricies tristique nulla aliquet enim.</p>
          </div>
          <div key={6}>
            <img src={img6} alt="Writing example" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Duis at consectetur lorem donec massa. Consequat nisl vel pretium lectus quam id leo.</p>
          </div>
          <div key={7}>
            <img src={img7} alt="Writing example" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Risus ultricies tristique nulla aliquet enim.</p>
          </div>
          <div key={8}>
            <img src={img8} alt="Writing example" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Duis at consectetur lorem donec massa. Consequat nisl vel pretium lectus quam id leo.</p>
          </div>
          <div key={9}>
            <img src={img9} alt="Writing example" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Risus ultricies tristique nulla aliquet enim.</p>
          </div>
        </Slider>
        <button className="button carousel-button" onClick={this.next}><span role="img" aria-label="next">➡️</span></button>        
      </CarouselStyle>
    );
  }
}

export default Carousel;