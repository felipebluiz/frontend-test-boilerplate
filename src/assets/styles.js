import styled from 'styled-components';
import colors from './colors';

export const Container = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin-bottom: 20px;
  background-color: ${colors.white};
  border-radius: 8px;
  -webkit-box-shadow: 3px 3px 0px -1px rgba(0,0,0,0.04);
  -moz-box-shadow: 3px 3px 0px -1px rgba(0,0,0,0.04);
  box-shadow: 3px 3px 0px -1px rgba(0,0,0,0.04);
`;

export const Content = styled.div`
  padding: 25px;
  
  p { margin-bottom: 25px; }
`;

export const Logo = styled.img`
  height: 30px;
  padding: 30px;
`;

export const Label = styled.label`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  .field-name {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.regular};
    padding-bottom: 8px;
  }
`;

export const SelectLabel = styled.div`
  .input__control {
    height: 40px;
    margin-bottom: 15px;
    background-color: ${colors.white};
    border: 1px solid ${colors.light};
    border-radius: 8px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    -webkit-box-shadow: 3px 3px 0px -1px rgba(0,0,0,0.04);
    -moz-box-shadow: 3px 3px 0px -1px rgba(0,0,0,0.04);
    box-shadow: 3px 3px 0px -1px rgba(0,0,0,0.04);
  }

  .input__control:hover { border-color: ${colors.light} }
  .input__control--is-focused { border-color: ${colors.primary} !important }
  .input__placeholder { color: ${colors.light} }
  .input__dropdown-indicator { color: ${colors.light} !important }
  .input__menu { border-radius: 8px }
  .input__menu-list { padding-top: 7px; padding-bottom: 7px }
  .input__option { font-family: 'Open Sans', sans-serif; font-size: 14px }
  .input__option--is-focused { background-color: ${colors.lighter} }
  .input__option:active { background-color: ${colors.lighter} }
  .input__option--is-selected { background-color: ${colors.primary} !important }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: ${colors.primary};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;

  span {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: ${colors.white};
    letter-spacing: -0.2px;
  }

  :hover { opacity: .9 }
`;
