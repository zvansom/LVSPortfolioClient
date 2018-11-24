import React from 'react';
import Slider from 'react-slick';

import img1 from '../static/images/carousel/1.jpg';
import img2 from '../static/images/carousel/2.jpg';
import img3 from '../static/images/carousel/3.jpg';
import img4 from '../static/images/carousel/4.jpg';
import img5 from '../static/images/carousel/5.jpg';
import img6 from '../static/images/carousel/6.jpg';
import img7 from '../static/images/carousel/7.jpg';
import img8 from '../static/images/carousel/8.jpg';
import img9 from '../static/images/carousel/9.jpg';

class Carousel extends React.Component {
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
      <>
        <Slider {...settings}>
          <div>
            <img src={img1} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae turpis massa sed elementum tempus egestas sed. Odio aenean sed adipiscing diam donec adipiscing tristique. Donec adipiscing tristique risus nec feugiat.</p>
          </div>
          <div>
            <img src={img2} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Duis at consectetur lorem donec massa. Consequat nisl vel pretium lectus quam id leo.</p>
          </div>
          <div>
            <img src={img3} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Risus ultricies tristique nulla aliquet enim.</p>
          </div>
          <div>
            <img src={img4} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Duis at consectetur lorem donec massa. Consequat nisl vel pretium lectus quam id leo.</p>
          </div>
          <div>
            <img src={img5} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Risus ultricies tristique nulla aliquet enim.</p>
          </div>
          <div>
            <img src={img6} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Duis at consectetur lorem donec massa. Consequat nisl vel pretium lectus quam id leo.</p>
          </div>
          <div>
            <img src={img7} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Risus ultricies tristique nulla aliquet enim.</p>
          </div>
          <div>
            <img src={img8} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Duis at consectetur lorem donec massa. Consequat nisl vel pretium lectus quam id leo.</p>
          </div>
          <div>
            <img src={img9} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Risus ultricies tristique nulla aliquet enim.</p>
          </div>
        </Slider>
      </>
    );
  }
}

export default Carousel;