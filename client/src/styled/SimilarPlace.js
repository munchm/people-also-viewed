import styled from 'styled-components';

export const Container = styled.div`
  width: 230px;
  height: 283px;
  flex-shrink: 0;
  padding-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: 1px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 218px;
  height: 180px;
  border-radius: 4px;
  pointer-events: none;
  overflow: hidden;
  vertical-align: middle;
  user-select: none;
`;

export const Name = styled.div`
  width: 100%;
  height: 22px;
  text-align: left;
  color: #2b273c;
  font-size: 14px;
  line-height: 22px;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 700;
  display: flex;
`;

export const Height = styled.div`
  height: 7px;
`;

export const ReviewDiv = styled.div`
  width: 194px;
  height: 16px;
  display: flex;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  color: #757280;
`;

export const Nums = styled.div`
  width: 108px;
  height: 20px;
  display: flex;
  font-size: 14px;
  vertical-align: baseline;
  text-align: left;
  color:  #757280;
  white-space: nowrap;
  padding-left: 7px;
  padding-top: 3.3px;
`;

export const Price = styled.span`
  width: 26.48px;
  height: 17px;
  color: #757280;
  font-weight: 400;
  text-align: left;
  color: #757280;
  font-size: 12px;
  line-height: 32px;
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

export const Period = styled.span`
  width: 26.48px;
  height: 17px;
  color: #757280;
  font-weight: 400;
  text-align: left;
  color: #757280;
  font-size: 10px;
  line-height: 18px;
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

export const Category = styled.span`
  width: 26.48px;
  height: 17px;
  color: #757280;
  font-weight: 400;
  text-align: left;
  color: #757280;
  font-size: 12px;
  line-height: 18px;
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

export const AddHeight = styled.div`
  height: 2.5px;
`;

export const Heart = styled.div`
  fill: rgba(0, 0, 0.2, 0.5);
  height: 20px;
  width: 20px;
  stroke: rgb(225, 225, 225);
  stroke-width: 2;
  overflow: visible;
  transform: translate(187px, 22px) scale(.7,.7);
`;

export const NoHeart = styled.div`
  fill: #e7305b;
  height: 20px;
  width: 20px;
  stroke: rgb(225, 225, 225);
  stroke-width: 2;
  overflow: visible;
  transform: translate(187px, 22px) scale(.7,.7);
`;