import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions.js";

import {
  CheckoutContainer,
  ImageContainer,
  Span,
  Arrow,
  Value,
  Remove,
  SpanQuantity,
} from "./style";
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, images, price, quantity } = cartItem;
  return (
    <CheckoutContainer>
      <ImageContainer>
        <img src={images[1]} alt="item" />
      </ImageContainer>
      <Span>{name}</Span>
      <SpanQuantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </SpanQuantity>
      <Span>{price}</Span>
      <Remove onClick={() => clearItem(cartItem)}>&#10005;</Remove>
    </CheckoutContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
