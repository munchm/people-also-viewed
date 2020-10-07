import React from 'react';
import styled from 'styled-components';
import { Ratings } from '../../styled/Review.js';

const Rating = (props) => {

  return (
    <div>
      {props.restaurant ? <Ratings reviews={props.restaurant.reviews}></Ratings> : null}
    </div>
  )
};

export default Rating;