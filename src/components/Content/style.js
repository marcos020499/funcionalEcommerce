import styled from "styled-components";
import { Carousel } from "3d-react-carousal";
import { Link } from "react-router-dom";
export const ContainerContent = styled.div`
  margin: 0 2vw 0 2vw;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;
export const H3 = styled.h3`
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 3.3vw;
    text-decoration: none;
  }
`;
export const Linkk = styled(Link)`
  text-decoration: none;
  @media screen and (max-width: 768px) {
  }
`;
export const TitleItem = styled.h3`
  color: blue;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 3.3vw;
  }
`;
export const Card = styled.div`
  display: inline-block;
  justify-content: center;
  border: 1px solid black;
  width: 26%;
  padding: 1.4vw;
  margin: 1.8vw;
  text-decoration: none;
  background: linear-gradient(white, gray);
  transition: width 1s, height 1s, transform 1s;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    margin: 1.8vw;
    width: 42%;
  }
`;
export const Image = styled.img`
  max-width: 200px;
  min-width: 200px;
  max-height: 200px;
  min-height: 200px;
  @media screen and (max-width: 768px) {
    max-width: 120px;
    min-width: 120px;
    max-height: 120px;
    min-height: 120px;
  }
`;
export const Carousels = styled(Carousel)`
  padding: 3vw;
`;
