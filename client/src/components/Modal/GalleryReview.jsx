import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  margin-top: 16px !important;
  margin-bottom: 22px !important;
  width: 525.33px;
  height: 144px;
  /* z-index: 5; */
`;

const UserFrame = styled.div`
  width: 525.33px;
  height: 56px;
  margin-bottom: 16px !important;
  margin-right: 12px;
  display: flex;
`;

const BodyFrame = styled.div`
  width: 525.33px;
  color: rgb(34, 34, 34) !important;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  word-break: break-word !important;
  margin-left: 10px;
`;


const UserImage = styled.img`
  height: 56px;
  width: 56px;
  object-fit: cover;
  vertical-align: bottom;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  left: 5px;
  flex-direction: column;
`;

const UserName = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  left: 5px;
  top: 10px;
  font-size: 16px;
  font-weight: 600;
`;

const UserDate = styled.div`
  margin-top: 12px;
  margin-left: 10px;
  left: 10px;
  top: 10px;
  font-size: 14px;
  font-weight: 100;
  bottom: 10px;
`;

const Ratings = styled.div`
    width: 108px;
    height: 20px;
    background-position: 0 ${props => {
    if (props.reviews === 5) {
      return -500
    } else if (props.reviews === 4) {
      return -460
    } else if (props.reviews === 3) {
      return -420
    } else if (props.reviews === 4.5) {
      return -480
    } else if (props.reviews === 3.5) {
      return -440
    }
  }}px;
    background-image: url('https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png');
    background-size: 176px 680px;
    display: inline-block;
    vertical-align: middle;
`;

const GalleryReview = (props) => {

  return (
    <Frame>
      <UserFrame>
        <UserImage src={props.review.avatar} />
        <UserName>
          {props.review.name}
          <br />
          <Ratings reviews={props.review.individual_rating}></Ratings>
        </UserName>
        <UserDate>
          Dined on {props.review.date}
        </UserDate>
      </UserFrame>
      <BodyFrame>
        {props.review.comment}
      </BodyFrame>
    </Frame>
  );
};

export default GalleryReview;