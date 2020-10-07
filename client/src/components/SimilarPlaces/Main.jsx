import React from 'react';
import axios from 'axios';
import SimilarPlacesList from './SimilarPlacesList.jsx';
import Header from './Header.jsx';
import styled from 'styled-components';
import Gallery from '../Modal/Gallery.jsx';
import SignUp from '../Modal/SignUp.jsx';
import {
  MainStyled,
  LeftCarousel,
  LeftArrow,
  RightCarousel,
  RightArrow
} from '../../styled/Main.js';

// === CORE COMPONENT === //

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsArr: [],
      isShowed: false,
      isSignedUp: false,
      currentIndex: 0,
    };
    this.getRestaurants = this.getRestaurants.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  getRestaurants() {
    axios.get('/getRestaurants')
      .then((response) => {
        this.setState({
          restaurantsArr: response.data
        });
      })
      .catch(console.log);
  };

  componentDidMount() {
    this.getRestaurants();
  };

  handleNext() {
    event.preventDefault();
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${1151}px)`
  };

  handlePrev() {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${0}px)`
  };

  handleShow(position) {
    this.setState({
      isShowed: !this.state.isShowed,
      currentIndex: position
    });
  };

  handleSignUp() {
    this.setState({
      signUp: !this.state.signUp
    });
  };

  handleClose(boolean) {
    this.setState({
      isShowed: boolean
    });
  };

  render() {
    return (
      <MainStyled>
        <SignUp signUp={this.state.signUp} />
        <Gallery show={this.state.isShowed} restaurant={this.state.restaurantsArr[this.state.currentIndex]} handleClose={this.handleClose} />
        <Header />
        <SimilarPlacesList restaurants={this.state.restaurantsArr} handleShow={this.handleShow} />
        <div>
          <LeftCarousel onClick={this.handlePrev}>
            <LeftArrow className="material-icons" >
              navigate_before
            </LeftArrow>
          </LeftCarousel>
          <RightCarousel onClick={this.handleNext}>
            <RightArrow className="material-icons" >
              navigate_next
            </RightArrow>
          </RightCarousel>
        </div>
      </MainStyled>
    );
  };
};

export default Main;
