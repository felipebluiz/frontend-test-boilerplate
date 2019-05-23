import styled from 'styled-components';
import colors from '../../assets/colors';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;

  li {
    font-size: 14px;

    span {
      font-weight: 700;
      color: ${colors.regular};
      padding-right: 5px;
    }
  }
`;