import React from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';

const CarouselStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 80% 1fr;
  @media (max-width: 800px) {
    display: block;
  }
`;

class Carousel extends React.Component {
  state = {
    isDesktop: false,
  };

  componentDidMount() {
    this.checkWidth();
    window.addEventListener("resize", this.checkWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkWidth);
  }

  checkWidth = () => {
    console.log('width changing');
    console.log(this);
    this.setState({ isDesktop: window.innerWidth > 800 });
  }

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
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ],
    };
    const { articles } = this.props;
    const { isDesktop } = this.state;
    return (
      <CarouselStyle>
        { isDesktop && (
        <button className="button carousel-button" onClick={this.previous}><span role="img" aria-label="previous">⬅️</span></button>
        )}
        <Slider ref={c => (this.slider = c)} {...settings}>
          {articles && (
            articles.map((article, idx) => {
              const { img, title, url, quote } = article;
              const summary = quote.split(' ').splice(0, 20).join(' ');
              return (
                <div className="card" key={idx}>
                  <img src={img} alt={title} />
                  <h3><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h3>
                  <p>{summary}...</p>
                </div>
              ); 
            })
          )}
        </Slider>
        { isDesktop && (
          <button className="button carousel-button" onClick={this.next}><span role="img" aria-label="next">➡️</span></button>        
        )}
      </CarouselStyle>
    );
  }
}

export default Carousel;