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

  button, select, input {
    &:focus {
      outline: none;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px 15px;

  @media (min-width: 768px) {
      width: 750px;
      padding: 30px 0;
  }

  @media (min-width: 992px) {
    width: 933px;
  }
`;