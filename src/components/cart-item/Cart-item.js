import React from "react";

import { CartContainer, Details, Span } from "./style";
const CartItem = ({ item: { images, price, name, quantity } }) => (
  <CartContainer>
    <img src={images[1]} alt="cart item" />
    <Details>
      <Span>{name}</Span>
      <Span>
        {quantity} x ${price * quantity}
      </Span>
    </Details>
  </CartContainer>
);

export default CartItem;
