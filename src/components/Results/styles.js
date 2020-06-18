import styled from 'styled-components';

export const Container = styled.div`
  font-size: 22px;
  color: #2e2e37;
`;

export const TitleSearch = styled.h1`
  font-size: 22px;
  color: #2e2e37;
  padding: 15px 10px;

  &.loading {
    height: 30px;
    background: #ccc;
    text-indent: -99999px;
    margin-top: 15px;
    padding: 0;
    border-radius: 4px;
  }
`;

export const BoxResults = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
    margin: 10px 0; 
`;

export const Item = styled.div`
  max-width: 250px;
  margin-bottom: 15px;
  cursor: pointer;
  justify-self: center;
  background-color: #fff;
  color: #686976;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;

  &:hover div img {
      transform: scale(1.1);
  }

`;

export const BoxImg = styled.div`
  width: 100%;
  height: 180px;
  background-color: #fafafa;
  margin: 0 auto 15px;
  overflow: hidden;

  img {
      width: 100%;
      height: 100%;
      transition: .4s all;
      object-fit: cover;
  }
`;

export const ItemBody = styled.div`
  text-transform: uppercase;
  padding: 8px;
`;

export const Title = styled.h2`
  font-size: 14px;
  color: #2e2e37;
`;

export const Version = styled.h3`
  font-size: 14px;
  font-weight: normal;
`;

export const BoxPrice = styled.div`
  font-size: 22px;
  margin: 10px 0;
`;

export const BoxYear = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  align-items: center;
`;

export const ItemFooter = styled.div`
  border-top: 1px solid #ecedf2;
  padding: 8px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Location = styled.span`
  flex: 1;
  margin: 0 8px;
`;








