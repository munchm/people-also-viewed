import styled from 'styled-components';

export const Ratings = styled.div`
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
    overflow: hidden;
`;