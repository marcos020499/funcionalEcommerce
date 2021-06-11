import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerSuscribe = styled.div`
  font-size: 2vw;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 60vw;
  height: 18vw;
  margin: 4vw 20vw 0 20vw;
  border: 7px solid #572364;
  background: linear-gradient(purple, #3e5f8a);
  opacity: 85%;
  @media screen and (max-width: 768px) {
    width: 80vw;
    margin: 0 8vw 0 8vw;
    height: 22vw;
  }
`;
export const H2 = styled.h2`
  font-size: 2.2vw;
  text-align: center;
  margin: 2vw 10vw 2vw 10vw;
  padding: 2vw;
  color: #ccff00;
  background: linear-gradient(gray, gray) @media screen and (max-width: 768px) {
    font-size: 5vw;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10vw 2 vw 0;
`;
export const Image = styled.li`
  color: #ccff00;
  &:hover {
    color: rgb(45, 2, 113);
  }
`;
export const Linken = styled(Link)`
  font-size: 2vw;
  padding: 0 2vw 2vw 2vw;
  @media screen and (max-width: 768px) {
    font-size: 6vw;
    justify-content: space-between;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
