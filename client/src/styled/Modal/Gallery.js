import styled from 'styled-components';

export const GalleryModal = styled.div`
  z-index: 1;
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: block;
  user-select: none;
  background-color: #fff;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
`;

export const CloseIcon = styled.div`
  top: 27px;
  position: absolute;
  right: 36px;
  z-index: 3;
  height: 30px;
  width: 30px;
  fill: black;
  cursor: pointer;
  user-select: none;
  &:hover {
    fill: #92174D;
  };
`;

export const Next = styled.div`
  top: calc(43.5% - 18px);
  position: absolute;
  left: 1005px;
  z-index: 3;
  height: 60px;
  width: 60px;
  fill: black;
  cursor: pointer;
  border-radius: 50%;
  opacity: .6;
  transition: opacity .25s linear;
  user-select: none;
  &:hover {
    fill: #92174D;
  };
`;

export const Prev = styled.div`
 top: calc(40% - 18px);
  position: absolute;
  left: 36px;
  z-index: 3;
  height: 60px;
  width: 60px;
  fill: black;
  cursor: pointer;
  border-radius: 50%;
  opacity: .6;
  transition: opacity .25s linear;
  transform: rotateZ(-180deg);
  user-select: none;
  &:hover {
    /* fill: #e7759a; */
    fill: #92174D;
  };
`;

export const PagerIndex = styled.div`
  top: 180px;
  position: absolute;
  height: 40px;
  width: 200px;
  left: 430px;
  color: black;
  user-select: none;
  cursor: default;
  font-weight: 500;
  font-size: .90rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;
