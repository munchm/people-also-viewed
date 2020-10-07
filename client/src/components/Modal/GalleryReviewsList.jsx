import React from 'react';
import styled from 'styled-components';
import GalleryReview from './GalleryReview.jsx';

const FrameList = styled.div`
  display: block;
  height: 750px;
  position: absolute;
  width: 60% !important;
  right: 40px;
  top: 160px;
  /* @media screen and (min-width: 768px){
    top: 100px;
  } */
`;

const ReviewFrameList = styled.div`
  display: block;
  height: 70px;
  position: absolute;
  width: 50% !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
  float: left !important;
  position: absolute;
  left: 400px;
  top: 10px;
  width: 100% !important;
  float: left !important;
  margin-left: 3% !important;
`;

const CommentFrameList = styled.div`
  height: 650px;
  display: block;
  position: absolute;
  left: 400px;
  top: 200px;
  width: 56% !important;
  float: left !important;
  margin-left: 3% !important;
  overflow-y: scroll;
`;

// const NavBarList = styled.div`
//   position: relative;
//   cursor: text !important;
//   display: flex !important;
//   height: 40px;
//   width: 94.5%;
//   margin: 0px !important;
//   border: none !important;
//   color: rgb(34,34,34) !important;
//   background-color: rgb(247,247,247) !important;
//   align-items: center !important;
//   padding: 12px 12px 12px 16px !important;
//   border-radius: 100px !important;
//   box-shadow: rgb(176,176,176) 0px 0px 0px 1px inset !important;
//   box-sizing: border-box;
// `;

const RatingFormat = styled.div`
  font-size: 32px !important;
  line-height: 36px !important;
  color: rgb(34, 34, 34) !important;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 700;

`;

const NameFormat = styled.div`
  font-size: 40px !important;
  line-height: 36px !important;
  color: rgb(34, 34, 34) !important;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 700;
  margin-bottom: 15px;
  display: block;
`;

const StarFormat = styled.span`
  color: #f43939;
  border: #f43939;
`;

const WriteReview = styled.img`
  margin-top: 10px;
  height: 45px;
  border-radius: 4px;
  cursor: pointer;
`;

const Hover = styled.div`
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  };
`;

const Positioning = styled.div`
  top: 20px;
`;

const GalleryReviewsList = (props) => {
  const reviewsList = props.userReview.reviewModal.map((review, index) => {
    return (
      <GalleryReview review={review} key={index} />
    );
  });

  console.log(props.userReview);

  return (
    <FrameList>
      <Positioning>
        <ReviewFrameList>
          <RatingFormat>
            <NameFormat>
              {props.userReview.name}
            </NameFormat>
            <Hover>
              <StarFormat className="material-icons md-65">
                star
          </StarFormat>  {props.userReview.reviews} {`(${props.userReview.reviewsNum} reviews)`}
            </Hover>
          </RatingFormat>
          <WriteReview src='https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/popup/write-review.png' />
        </ReviewFrameList>
        <CommentFrameList>
          {/* <NavBarList /> */}
          {reviewsList}
        </CommentFrameList>
      </Positioning>
    </FrameList >
  );
};

export default GalleryReviewsList;