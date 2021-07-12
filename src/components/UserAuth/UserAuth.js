import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/Custom-button";
import { addItem } from "../../redux/cart/cart.actions.js";
import { useEffect, useState } from "react";
import firebase from "../firebase/firebase";
import { ContainerContent, Card, Image, Carousels, Linken } from "./style";
import "font-awesome/css/font-awesome.min.css";
import { toast } from "react-toastify";
toast.configure();
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
const DeleteProduct = (id) => {
  firebase
    .firestore()
    .collection("product")
    .doc(id)
    .delete()
    .then(() => {
      toast.succes("Document successfully deleted!");
      this.props.history.push("/");
    })
    .catch((error) => {
      toast.error("Error removing document: ", error);
    });
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
          <Linken
            to={`/editProduct/${item.id}`}
            className="fa fa-edit"
          ></Linken>
          <Linken
            onClick={() => {
              if (window.confirm("delete de item")) {
                DeleteProduct(item.id);
              }
            }}
            className="fa fa-times-circle"
          ></Linken>
        </Card>
      ))}
    </ContainerContent>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemList);
