import React from 'react';

const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <div>
        <img src={restaurant.displayImgURL} />
      </div>
      <div>
        {restaurant.name}
      </div>
      <div>
        {restaurant.reviews} {restaurant.reviewsNum}
      </div>
      <div>
        {restaurant.price} {restaurant.category[0]}
      </div>
    </div>
  )
};

export default Restaurant;