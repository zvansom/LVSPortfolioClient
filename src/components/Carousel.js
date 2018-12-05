import React from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';

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
    const { articles } = this.props;
    return (
      <CarouselStyle>
        <button className="button carousel-button" onClick={this.previous}><span role="img" aria-label="previous">⬅️</span></button>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {articles && (
            articles.map((article, idx) => {
              const { img, title, url, quote } = article;
              return (
                <div className="card" key={idx}>
                  <img src={img} alt={title} />
                  <h3><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h3>
                  <p>{quote}</p>
                </div>
              ); 
            })
          )}
        </Slider>
        <button className="button carousel-button" onClick={this.next}><span role="img" aria-label="next">➡️</span></button>        
      </CarouselStyle>
    );
  }
}

export default Carousel;