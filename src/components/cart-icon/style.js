import styled from "styled-components";
import { Link } from "react-router-dom";
export const Icon = styled(Link)`
  text-align: center;
  text-decoration: none;
  right: 40vw;
  top: 32vw;
  @media screen and (max-width: 768px) {
    position: relative;
    right: -40vw;
    top: -30vw;
    padding: 3vw;
  }
`;
export const LinkCount = styled(Link)`
  text-align: center;
  font-size: 2vw;
  position: relative;
  top: -0.4vw;
  right: 3.8vw;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 4.7vw;
    top: 0.5vw;
    right: 3.5vw;
  }
`;
export const ShoppingIconCart = styled(Link)`
  text-align: center;
  width: 3.4vw;
  margin-top: 2.4vw;
  padding: 0 2.3vw 0 2.3vw;
  @media screen and (max-width: 768px) {
    width: 8vw;
    font-size: 3.2vw;
  }
`;
