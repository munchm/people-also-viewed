import React from 'react';
import styled from 'styled-components';
import SimilarPlace from './SimilarPlace.jsx';
import {
  OuterContainer,
  InnerContainer
} from '../../styled/SimilarPlacesList.js';

const SimilarPlacesList = (props) => {

  const restaurantsList = props.restaurants.map((restaurant, index) => {
    return (
      <SimilarPlace restaurant={restaurant} index={index} key={index} handleShow={props.handleShow} />
    );
  });

  return (
    <div>
      <OuterContainer>
        <InnerContainer id='slider'>
          {restaurantsList}
        </InnerContainer>
      </OuterContainer>
    </div>
  );
};

export default SimilarPlacesList;