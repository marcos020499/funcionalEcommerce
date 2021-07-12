import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import {
  H2,
  ContainerSuscribe,
  ButtonSuscribe,
  Image,
  Linken,
  Linken1,
  ButtonDiv,
  ImageContainer,
} from "./style";

const UseItems = (props) => {
  const { initialMinute = 0, initialSeconds = 2, initialHours = 4 } = props;
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (hours === 0 && minutes === 0) {
          clearInterval(myInterval);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <ContainerSuscribe>
      <div>
        <Linken1 to="/contact">
          {hours === 0 && minutes === 0 && seconds === 0 ? null : (
            <H2>
              Will Start Soon {hours}:{minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </H2>
          )}
        </Linken1>
        <ImageContainer>
          <Linken href="https://www.youtube.com" target="_blank">
            <Image className="fa fa-youtube"></Image>
          </Linken>
          <Linken href="https://www.google.com" target="_blank">
            <Image className="fa fa-google"></Image>
          </Linken>
          <Linken href="https://www.twitter.com" target="_blank">
            <Image className="fa fa-twitter"></Image>
          </Linken>
          <Linken href="https://www.facebook.com" target="_blank">
            <Image className="fa fa-facebook"></Image>
          </Linken>
          <Linken
            href="https://api.whatsapp.com/send?phone=+523326704013&text=Me%20gustaría%20saber%20el%20precio%20del%20sitio%20web"
            target="_blank"
          >
            <Image className="fa fa-whatsapp"></Image>
          </Linken>
        </ImageContainer>
      </div>
    </ContainerSuscribe>
  );
};
export default UseItems;
