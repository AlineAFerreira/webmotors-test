import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {    
    font-family: 'Poppins', sans-serif;
    background-color: #f2f2f2;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px 15px;
  background: #FFF;

  @media (min-width: 768px) {
      width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 933px;
  }
`;