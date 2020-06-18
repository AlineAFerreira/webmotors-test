import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% {opacity: 0.5;}
    100% {opacity: 1;}
`;

export const Item = styled.div`
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
  justify-self: center;
  background-color: #fff;
  color: #686976;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;

  & span {
    display: block;
    background: #ccc !important;
    border: none !important;
    -webkit-animation: ${pulse} 0.65s infinite alternate;
    animation: ${pulse} 0.65s infinite alternate;
  }
`;

export const Square = styled.span`
  height: 180px;
`;

export const Body = styled.div`
  padding: 8px;
`;

export const Rect1 = styled.span`
  width: 90%;
  height: 20px;
  margin-top: 10px;
`;

export const Rect2 = styled(Rect1)`
  width: 70%;
`;

export const Rect3 = styled(Rect1)`
  width: 40%;
`;

export const Rect4 = styled(Rect1)`
  width: 30%;
`;

export const Footer = styled.div`
  border-top: 1px solid #ecedf2;
  padding: 8px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


