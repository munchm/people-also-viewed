import React from 'react';
import styled from 'styled-components';
import GallerySlides from './GallerySlides.jsx';
import GalleryReviewsList from './GalleryReviewsList.jsx';
import icons from '../../icons/icons.js';
import {
  GalleryModal,
  CloseIcon,
  Next,
  Prev,
  PagerIndex,
  FavoriteIcon,
  ShareIcon
} from '../../styled/Modal/Gallery.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      length: 3,
    };
    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.resetImg = this.resetImg.bind(this);
  };

  prevImg() {
    let index = this.state.activeIndex;
    let length = this.state.length;

    index < 1 ? index = 0 : index--;
    this.setState({
      activeIndex: index
    });
  };

  nextImg() {
    let index = this.state.activeIndex;
    let length = this.state.length;

    index === length - 1 ? index = length - 1 : index++;
    this.setState({
      activeIndex: index
    });
  };

  resetImg() {
    this.setState({
      activeIndex: 0
    });
  };

  render() {
    if (!this.props.show) {
      return null;
    };
    return (
      <div>
        <GalleryModal>
          <ShareIcon className="material-icons">
            share
          </ShareIcon>
          <FavoriteIcon className="material-icons">
            favorite_border
            </FavoriteIcon>
          <PagerIndex>
            {this.state.activeIndex + 1} / {this.state.length}
          </PagerIndex>
          <GallerySlides innerImg={this.props.restaurant.inner_img[this.state.activeIndex]} />
          <CloseIcon onClick={() => { this.props.handleClose(false); this.resetImg() }}>
            <svg viewBox="0 0 24 24"><g><path d={icons.closeIcon}></path></g></svg>
          </CloseIcon>
          <Next onClick={() => { this.nextImg() }}>
            <svg viewBox="0 0 24 24"><g><path d={icons.next}></path></g></svg>
          </Next>
          <Prev onClick={() => { this.prevImg() }}>
            <svg viewBox="0 0 24 24"><g><path d={icons.prev}></path></g></svg>
          </Prev>
          <GalleryReviewsList userReview={this.props.restaurant} />
        </GalleryModal>
      </div>
    );
  };
};

export default Gallery;