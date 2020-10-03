import React from 'react';
import axios from 'axios';
import RestaurantsList from './RestaurantsList.jsx';
import styled from 'styled-components';

const PeopleAlsoViewed = styled.h4`
  font-weight: 700;
  text-align: left;
  display: inline;
  line-height: 35px;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  color: #2b273c;
  position: relative;
  font-size: 20px;
`;

// const AddHeight = styled.div`
//   height: 18px;
// `;

const Carousel = styled.div`
  width: 1144px;
  min-height: 200px;
  position: relative;
  margin: 25px;
`;

const LeftCarousel = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #e6e6e6;
  position: absolute;
  top: 50%;
  box-shadow: 0 2px 6px rgba(0,0,0,.15);
  text-align: center;
  cursor: pointer;
  left: -16px;
  &:hover {
    background-color: #f4f4f4;
  };
`;

const LeftArrow = styled.i`
  color: darkgrey;
  position: absolute;
  top: 14%;
  left: 4.5px;
  &:hover {
    color: #213e3b;
  };
`;

const RightCarousel = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #e6e6e6;
  position: absolute;
  top: 50%;
  box-shadow: 0 2px 6px rgba(0,0,0,.15);
  text-align: center;
  cursor: pointer;
  right: -10px;
  &:hover {
    background-color: #f4f4f4;
  };
`;

const RightArrow = styled.i`
  color: darkgrey;
  position: absolute;
  top: 14%;
  right: 4.5px;
  &:hover {
    color: #213e3b;
  };
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsArr: [],
    };
    this.getRestaurants = this.getRestaurants.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  getRestaurants() {
    axios.get('/getRestaurants')
      .then((response) => {
        this.setState({
          restaurantsArr: response.data
        });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.getRestaurants();
  }

  handleNext() {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${1144}px)`
  }

  handlePrev() {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${0}px)`
  }

  render() {

    return (
      <div>
        <Carousel>
          <PeopleAlsoViewed>
            People Also Viewed
        </PeopleAlsoViewed>
          {/* <AddHeight>
        </AddHeight> */}
          <RestaurantsList restaurants={this.state.restaurantsArr} />
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
        </Carousel>
      </div>
    );
  };
}

export default App;
