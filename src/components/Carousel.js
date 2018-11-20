import React from 'react';

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

const CarouselContainer = styled.div`
  text-align: center;
  .lower {
    display: flex;
    justify-content: space-around;
    position: relative;
    img {
      transform: scale(0.5);
      
    }
  }
  .top {
    z-index: 2;
    position: absolute;
    top: 0;
    img {
      transform: scale(1);
    }
  }
`;

class Carousel extends React.Component {
  state = {
    index: 0,
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9]
  }

  handleLeft = () => {
    const index = this.state.index - 1;
    this.setState({
      index,
    });
  }

  handleRight = () => {
    const index = this.state.index + 1;
    this.setState({
      index,
    });
  }

  render() {
    const prev = this.state.index === 0 ? 8 : this.state.index - 1;
    const next = this.state.index === 8 ? 0 : this.state.index + 1;
    return (
      <CarouselContainer>
        <div className="lower">
          <img src={this.state.images[prev]} />
          <div className="top">
            <img src={this.state.images[this.state.index]} alt="image" />
          </div>
          <img src={this.state.images[next]} />
        </div>
        <button disabled={this.state.index <= 0} onClick={this.handleLeft}>⬅️</button>
        <button disabled={this.state.index >= 8} onClick={this.handleRight}>➡️</button>
      </CarouselContainer>
    );
  }
}

export default Carousel;