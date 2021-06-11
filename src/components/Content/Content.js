import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/Custom-button";
import { addItem } from "../../redux/cart/cart.actions.js";
import { useEffect, useState } from "react";
import firebase from "../firebase/firebase";
import { ContainerContent, Card, Image, Carousels } from "./style";

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
          <h3 style={{ color: "blue" }}>{item.title}</h3>
          <h3>{item.price}</h3>
          <h3>{item.description}</h3>
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
          <h3>{item.quantity}</h3>
          <CustomButton onClick={() => addItem(item)} inverted>
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
