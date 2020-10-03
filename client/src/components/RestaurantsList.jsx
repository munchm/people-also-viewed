import React from 'react';
import Restaurant from './Restaurant.jsx';
import styled from 'styled-components';

const InnerCarousel = styled.div`
  overflow: hidden;
`;

const InnerContainer = styled.div`
  display: flex;
  transition: 0.8s;
`;

const RestaurantsList = ({ restaurants }) => {

  const restaurantsComps = restaurants.map((restaurant) => {
    return (
      <Restaurant restaurant={restaurant} key={restaurant._id} />
    )
  });

  return (
    <div>
      <InnerCarousel>
        <InnerContainer id='slider'>
          {restaurantsComps}
        </InnerContainer>
      </InnerCarousel>
    </div>
  )
};

export default RestaurantsList;