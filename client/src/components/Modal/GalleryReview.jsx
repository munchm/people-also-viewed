import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  margin-top: 16px !important;
  margin-bottom: 22px !important;
  width: 525.33px;
  height: 144px;
  z-index: 5;
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
  margin-top: 10px;
  margin-left: 10px;
  left: 10px;
  top: 10px;
  font-size: 14px;
  font-weight: 100;
  bottom: 10px;
`;

const GalleryReview = (props) => {

  return (
    <Frame>
      <UserFrame>
        <UserImage src={props.review.avatar} />
        <UserName>
          {props.review.name}
        </UserName>
        <br />
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