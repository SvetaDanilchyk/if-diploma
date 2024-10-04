import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../../constans/paths';


const fontSize = '12px';

export const HeaderNavLink = styled(NavLink)`
  font-size: ${fontSize};
  color: ${(props) => props.to === PATH.index ? '#b09fff' : 'inherit'};
  text-decoration: none;

  &.active {
    color: #fe2c55;
  }

  &:hover {
    text-decoration: underline;
  }
`;
