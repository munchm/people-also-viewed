import React from 'react';
import styled from 'styled-components';
import { DisplayImage } from '../../styled/Modal/GalleryMain.js';

class GallerySlides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  };

  render() {
    return (
      <div>
        <DisplayImage src={`https://hrsf130-restaurants.s3-us-west-1.amazonaws.com/${Math.floor(Math.random()*1405)}.jpg`} />
      </div >
    );
  }
};

export default GallerySlides;