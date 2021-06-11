import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "./shopping-bag.svg";
export const Icon = styled(Link)`
  text-align: center;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    position: relative;
    right: -40vw;
    top: -32vw;
  }
`;
export const LinkCount = styled(Link)`
  text-align: center;
  font-size: 2vw;
  position: relative;
  top: -.4vw;
  right: 3.8vw;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 3.7vw;
    top: -.7vw;
    right: 8vw;
  }
`;
export const ShoppingIconCart = styled(ShoppingIcon)`
  text-align: center;
  width: 3.4vw;
  margin-top: 2vw;
  @media screen and (max-width: 768px) {
    width: 8vw;
  }
`;
