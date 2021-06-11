import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { Icon, LinkCount, ShoppingIconCart } from "./style";
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <Icon onClick={toggleCartHidden}>
    <ShoppingIconCart />
    <LinkCount> {itemCount} </LinkCount>
  </Icon>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
