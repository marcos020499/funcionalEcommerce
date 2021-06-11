import styled from "styled-components";
import { Link } from "react-router-dom";
export const CartDropdowns = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;
export const CartItems = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const Linken = styled(Link)`
  font-size: 1vw;
`;
