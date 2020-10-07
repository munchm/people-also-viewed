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
        <DisplayImage src={`https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${this.props.innerImg}`} />
      </div >
    );
  }
};

export default GallerySlides;