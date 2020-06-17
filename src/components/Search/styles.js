import styled from 'styled-components';

export const Container = styled.div`

`;

export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  .box-vehicleTypes {
    flex:1;
  }

  button {
    color: #eaaa5c;
    border: 1px solid #eaaa5c;
    background-color: none;
    padding: 8px 30px;
    border-radius: 4px;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    .box-vehicleTypes {
      order: 2;
    }
  }
`;
 
export const TypeOption = styled.div`
  display: inline-flex;
  align-items: flex-end;
  color: #ccc;
  font-size: 10px;
  text-transform: uppercase;
  padding: 12px;
  cursor: pointer;

    &.active {
      border-bottom: 2px solid #ca242e;
      span {
        color: #ca242e;
      }
    }
`;

export const Textbutton = styled.div`
  margin-left: 15px;

  span {
    display: block;
    font-size: 16px;
    line-height: 15px;      
  }
`;

export const SearchBox = styled.div`
  background-color: #fff;
  padding: 25px 40px;

  @media (max-width: 767px) {
    padding: 25px;
  }
`;

export const CheckboxContainer = styled.div`
  margin-bottom: 15px;

  /* input[type=checkbox] {
    display: none;

    &:checked + label {
      &:before {
        content: 'X'
      }
    }
  } */

  label {
    position: relative;
    padding-left: 25px;
    margin-right: 30px;

    &::before {
      content: '';
      color: #ca242e;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
      height: 15px;
      border: 1px solid #e9e9e9; 
      border-radius: 4px;
    }
  }
`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`

`;

export const StyledCheckbox = styled.label`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'salmon' : 'papayawhip'};
  border-radius: 3px;
  transition: all 150ms;
`
 

export const BoxField = styled.div`
    width: 23%;
    display: inline-flex;
    align-items: center;
    position: relative;
    border: 1px solid #e9e9e9; 
    border-radius: 4px;
    height: 30px;
    padding: 0 15px 0 10px;
    margin: 5px 1%;
    font-size: 12px;
    white-space: nowrap;

    &.col-1 {
      width: 12%;
    }

    &.col-3 {
      width: 23%;
    }

    &.col-4 {
      width: 31%;
    }

    &.col-5 {
      width: 34%;
    }

    &.col-6 {
      width: 48%;
    }

    &.multiple {
      padding-right: 0px;
    }

    &.box-location {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
      margin-right: 0;

      span {
        width: initial;
      }

      input {
        width: 100%;
        border: none;
        position: absolute;
        left: 0;
        background-color: transparent;
        padding-left: 70px;
      }
    }

    &.box-radius {
      width: 14%;
      margin-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    span {
      width: 100%;
      overflow: hidden;
    }

    select {
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      text-indent: -9999px;
      background-color: transparent;
      border: none;
    }

    @media (max-width: 767px) {
      width: 100% !important;
      margin: 5px 0;
      border-radius: 5px !important;
      border: 1px solid #e9e9e9 !important;
    }
`;

export const SearchAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 25px;
`;

export const BtnFields = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const AdvancedSearch = styled(BtnFields)`
  color: #ca242e;
  flex: 1;
  text-align: left;
`;

export const CleanFields = styled(BtnFields)`
  color: #969292; 
`;

export const ButtonSubmit = styled(BtnFields)`
  width: 40%;
  color: #fff;
  background-color: #ca242e;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 20px;
  margin-left: 20px;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 25px auto;
  }
`;

