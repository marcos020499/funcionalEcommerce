import React, { useEffect, useState } from "react";

import "font-awesome/css/font-awesome.min.css";
import Rating from "react-rating";
import { Link, withRouter, useParams } from "react-router-dom";
import firebase from "../firebase/firebase";
import YoutubeEmbed from "../About/index";
import {
  Content,
  ContainerImages,
  Image,
  Ptitle,
  Ratings,
  H2,
  H4,
  H3,
  Button,
  ButtonBuy,
  ButtonsDiv,
  Small,
  P,
  ContainerDetails,
  ContainerVideo,
} from "./style";

const useItems = ({ embedId }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});
  const [images, setImages] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await firebase
          .firestore()
          .collection("product")
          .doc(id)
          .get();

        console.log("response", response);

        let data = { title: "not found" };

        if (response.exists) {
          data = response.data();
        }

        setItems(data);
        setImages(data.images);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Content>
        <ContainerImages>
          {images.map((image, index) => (
            <Image src={image} alt="productImage" />
          ))}
        </ContainerImages>
        <ContainerDetails>
          <Ptitle>{items.description}</Ptitle>
          <Ratings>
            <Rating
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              fractions={2}
              initialRating={3}
              placeholderRating={2}
            />
          </Ratings>
          <H2>{items.title}</H2>
          <H4>{items.price}</H4>
          <ButtonBuy>Buy</ButtonBuy>
          <P>
            Get after those long runs with the Nike ZoomX Invincible Run
            Flyknit. A lightweight and responsive foam delivers a super-soft
            feel and helps deliver energy with every step. Breathable and
            secure, it's one of our most tested shoes. Lace up and feel the
            potential when your foot hits the pavement.
          </P>
          <Ratings>
            <H3>REVIEWS</H3>
            <Rating
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              fractions={2}
              initialRating={3}
              placeholderRating={2}
            />
          </Ratings>
        </ContainerDetails>
      </Content>
      <ContainerVideo>
        <iframe
          width="400"
          height="280"
          src={`https://www.youtube.com/embed/QH7hWpnBPxA`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        &nbsp; &nbsp;
        <iframe
          width="400"
          height="280"
          src={`https://www.youtube.com/embed/hHqW0gtiMy4`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </ContainerVideo>
    </>
  );
};
export default useItems;
