import styled from "styled-components";
import { Link } from "react-router-dom";
export const ContainerNavbar = styled.div`
  display: flex;
  background: linear-gradient(white, #c3c3c3);
  justify-content: flex-end;
  margin: 0.5vw;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 50vw;
  }
`;
export const Linken = styled(Link)`
  padding: 2.5vw;
  font-weight: bold;
  font-size: 1.8vw;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 4.5vw;
  }
`;
export const Header = styled.div`
  margin: 0;
  padding: 0;
`;
export const Logo = styled.img`
  position: absolute;
  width: 6vw;
  margin: 0.5vw 0 0 2vw;
  @media screen and (max-width: 768px) {
    width: 15vw;
  }
`;
export const Linke = styled(Link)``;
export const ImageHeader = styled.img`
  max-width: 100%;
  @media screen and (max-width: 768px) {
    height: 40vw;
    margin-top: -12vw;
  }
`;
export const H2 = styled.h2`
  color: blue;
  font-size: 5vw;
`;
export const ContainerCounter = styled.div`
  position: absolute;
  top: 5vw;
  @media screen and (max-width: 768px) {
    top: 40vw;
  }
`;
