import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 300px;
  background: ${({primary}) => (primary ? '#2A374A' : '#ffffff')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#ffffff' : '#2A374A')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  height: 120px;
  width: 120px;
  
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
  }

  &:hover {
    transition: all .2s ease-in-out;
    color: #2A374A;
    background: ${({primary}) => (primary ? '#ffffff' : '#2A374A')};
  }
`