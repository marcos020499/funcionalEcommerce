import styled from "styled-components";
import { Link } from "react-router-dom";
export const Content = styled.div`
  display: flex;
  padding-bottom: 2vw;
  @media screen and (max-width: 768px) {
    display: inline-block;
    width: 100%;
  }
`;
export const ContainerImages = styled.div`
  display: inline-flexbox;
  width: 65%;
  height: 90%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 20%;
    display: inline-flexbox;
    justify-content: center;
    text-align: center;
  }
`;
export const Image = styled.img`
  max-width: 240px;
  max-height: 260px;
  min-width: 240px;
  min-height: 260px;
  padding: 1%;
  transition: width 1s, height 1s, transform 1s;
  &:hover {
    transform: scale(1.25);
  }
  @media screen and (max-width: 768px) {
    max-width: 48%;
    max-height: 40%;
    min-width: 48%;
    min-height: 40%;
    justify-content: end;
  }
`;
export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  height: 10%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  font-size: 1.5vw;
  margin: 4% 2% 3% 1%;
  width: 10vw;
  height: 4vw;
  border-radius: 3px;
  background-color: white;
  border: 1px solid black;
  transition: width 1s, height 1s, transform 1s;
  &:hover {
    transform: scale(1.2);
    background: gray;
  }
  @media screen and (max-width: 768px) {
    margin: 1%;
    font-size: 4vw;
    text-align: center;
    width: 20vw;
    height: 10vw;
  }
`;
export const ButtonBuy = styled.button`
  font-size: 1.8vw;
  margin: 1%;
  width: 38vw;
  height: 6vw;
  border-radius: 5px;
  background-color: black;
  border: 1px solid black;
  color: white;
  &:hover {
    background: gray;
  }
  @media screen and (max-width: 768px) {
    font-size: 5vw;
    width: 70vw;
    margin: 5vw 0 0 15vw;
    height: 10vw;
  }
`;
export const Small = styled.small`
  font-size: 0.8vw;
  @media screen and (max-width: 768px) {
    font-size: 2vw;
  }
`;
export const ButtonsDiv = styled.div`
  display: inline-block;
  margin-left: 30px;
`;
export const H2 = styled.h2`
  font-size: 2.6vw;
  padding: 0 0 0 2%;
  font-weight: bolder;
  @media screen and (max-width: 768px) {
    font-size: 5vw;
    text-align: center;
  }
`;
export const H3 = styled.h3`
  display: flex;
  font-size: 1.8vw;
  @media screen and (max-width: 768px) {
    font-size: 4vw;
    text-align: center;
  }
`;
export const H4 = styled.h4`
  display: flex;
  padding: 0 0 0 2%;
  font-size: 1.6vw;
  @media screen and (max-width: 768px) {
    padding: 0%;
    font-size: 4vw;
    justify-content: center;
    text-align: center;
  }
`;
export const P = styled.p`
  color: rgb(126, 46, 255);
  font-size: 1.7vw;
  justify-content: justify;
  @media screen and (max-width: 768px) {
    font-size: 4vw;
    padding: 4vw;
    text-align: justify;
  }
`;
export const Ptitle = styled(P)`
  color: gray;
  padding: 0 0 0 2%;
  font-size: 1.9vw;
  justify-content: justify;
  @media screen and (max-width: 768px) {
    font-size: 4.5vw;
    text-align: center;
  }
`;
export const Ratings = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 4.5vw;
  }
`;
export const ContainerVideo = styled.div`
  display: flex;
  margin: 4vw 0 0 0;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90%;
  }
`;
