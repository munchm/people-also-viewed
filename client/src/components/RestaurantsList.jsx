import React from 'react';
import Restaurant from './Restaurant.jsx'

const RestaurantsList = ({ restaurants }) => {
  console.log('restaurants from RestaurantsList.jsx : ', restaurants);
  const restaurantsComps = restaurants.map((restaurant) => {
    return (
      <Restaurant restaurant={restaurant} key={restaurant._id} />
    )
  });

  return (
    <div>
      {restaurantsComps}
    </div>
  )
};

export default RestaurantsList;