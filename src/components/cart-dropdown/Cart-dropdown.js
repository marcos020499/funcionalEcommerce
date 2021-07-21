import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/Cart-item";
import CustomButton from "../custom-button/Custom-button";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CartDropdowns, CartItems, Linken } from "./style";
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdowns>
    <CartItems>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <Linken>Your cart is empty</Linken>
      )}
    </CartItems>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </CustomButton>
  </CartDropdowns>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps, null)(CartDropdown));
