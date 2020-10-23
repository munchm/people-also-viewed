import React from 'react';
import styled from 'styled-components';
import Review from '../Review/Review.jsx';
import GallerySlides from '../Modal/GallerySlides.jsx';
import icons from '../../icons/icons.js';
import {
  Container,
  Image,
  Name,
  Height,
  ReviewDiv,
  Nums,
  Price,
  Period,
  Category,
  AddHeight,
  Heart,
  NoHeart
} from '../../styled/SimilarPlace.js'

class SimilarPlace extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heart: false,
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange() {
    this.setState({
      heart: !this.state.heart
    });
  };

  render() {
    return (
      <Container>
        <div onClick={() => { this.handleChange() }}>
          {this.state.heart ? <NoHeart><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31"><path d={icons.heartIcon} /></svg></NoHeart> : <Heart><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31"><path d={icons.heartIcon} /></svg></Heart>}
        </div>
        <div onClick={() => { this.props.handleShow(this.props.index) }} >
          <Image src={this.props.restaurant.display_img_url} />
        </div>
        <Height />
        <Name>
          {this.props.restaurant.name}
        </Name>
        <ReviewDiv>
          <Review restaurant={this.props.restaurant} />
          <Nums>
            {this.props.restaurant.reviews_num}
          </Nums>
        </ReviewDiv>
        <AddHeight />
        <Price>
          {this.props.restaurant.price === 1 ? "$ " : this.props.restaurant.price === 2 ? "$$ " : "$$$ "}
        </Price>
        <Period>
          {"  •  "}
        </Period>
        <Category>
          {this.props.restaurant.category}
        </Category>
      </Container >
    );
  };
};

export default SimilarPlace;
