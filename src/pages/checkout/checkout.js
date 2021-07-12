import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { Link } from "react-router-dom";

import { ContainerCheck, Header, Block, Total } from "./style";
const CheckoutPage = ({ cartItems, total }) => (
  <ContainerCheck>
    <Header>
      <Block>
        <Link>Product</Link>
      </Block>

      <Block></Block>

      <Block>
        <Link>Quantity</Link>
      </Block>

      <Block>
        <Link>Price</Link>
      </Block>

      <Block>
        <Link>Remove</Link>
      </Block>
    </Header>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total>
      <span>TOTAL: ${total}</span>
    </Total>
  </ContainerCheck>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
