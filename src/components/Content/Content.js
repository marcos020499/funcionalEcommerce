import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/Custom-button";
import { addItem } from "../../redux/cart/cart.actions.js";
import { useEffect, useState } from "react";
import firebase from "../firebase/firebase";
import {
  ContainerContent,
  Card,
  Image,
  Carousels,
  H3,
  TitleItem,
  Linkk,
} from "./style";

const useItems = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("product")
      .onSnapshot((snapshot) => {
        const listItem = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItem(listItem);
      });
  }, []);
  return item;
};

const ItemList = ({ item, addItem }) => {
  const listItem = useItems();
  return (
    <ContainerContent>
      {listItem.map((item) => (
        <Card key={item.id}>
          <Linkk to={`/details/${item.id}`}>
            <TitleItem>{item.title}</TitleItem>
            <H3>{item.price}</H3>
            <H3>{item.description}</H3>
            <Carousels
              slides={[
                <Image src={item.images[0]} alt="shoes" />,
                <Image src={item.images[1]} alt="shoes" />,
                <Image src={item.images[2]} alt="shoes" />,
                <Image src={item.images[3]} alt="shoes" />,
              ]}
              autoplay={true}
              interval={2300}
            />
            <H3>{item.quantity}</H3>
          </Linkk>
          <CustomButton
            onClick={() => {
              addItem(item);
              item.quantity--;
            }}
            inverted
          >
            Add to cart
          </CustomButton>
        </Card>
      ))}
    </ContainerContent>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemList);
