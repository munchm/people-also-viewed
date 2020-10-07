import styled from 'styled-components';

export const MainStyled = styled.div`
width: 1150px;
min-height: 200px;
position: relative;
margin: 25px;
`;

export const LeftCarousel = styled.button`
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
  transition: opacity .25s linear;
  &:focus {
    outline: none
  };
  &:hover {
    fill: #f4f4f4;
  };
`;

export const LeftArrow = styled.i`
  color: darkgrey;
  position: absolute;
  top: 14%;
  left: 4.5px;
  &:focus {
    outline: none
  };
  &:hover {
    color: #213e3b;
  };
`;

export const RightCarousel = styled.button`
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
  transition: opacity .25s linear;
  &:focus {
    outline: none
  };
  &:hover {
    fill: #f4f4f4;
  };
`;

export const RightArrow = styled.i`
  color: darkgrey;
  position: absolute;
  top: 14%;
  right: 4.5px;
  &:focus {
    outline: none
  };
  &:hover {
    color: #213e3b;
  };
`;
