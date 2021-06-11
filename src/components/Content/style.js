import styled from "styled-components";
import { Carousel } from "3d-react-carousal";
export const ContainerContent = styled.div`
  display: flex;
  margin: 0 5vw 0 5vw;
  @media screen and (max-width: 768px) {
    display: inline-block;
    margin: 1.5vw;
  }
`;
export const H3 = styled.h3`
  @media screen and (max-width: 768px) {
    font-size: 3.3vw;
  }
`;
export const Card = styled.div`
  display: inline-block;
  justify-content: center;
  border: 1px solid black;
  width: 29vw;
  padding: 1.7vw;
  margin: 0.3vw;
  background: linear-gradient(white, gray);
  transition: width 1s, height 1s, transform 1s;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    display: inline-block;
    width: 42vw;
    margin: 1vw;
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
