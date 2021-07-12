import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/Cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import "font-awesome/css/font-awesome.min.css";
import UseItems from "../Suscribe/index";
import {
  Header,
  ContainerNavbar,
  ImageHeader,
  ContainerCounter,
  Linken,
  Linke,
  Logo,
} from "./style";
const index = ({ hidden }) => (
  <Header>
    <Linke>
      <Logo
        src={
          "https://firebasestorage.googleapis.com/v0/b/boards-585b9.appspot.com/o/images%2Ffd9a158c8c8e460b63c7e0eb26159a2f.png?alt=media&token=57c0926b-1167-449b-9fb3-06e8c94a981c"
        }
      />
    </Linke>
    <ContainerNavbar>
      <Linken to="/">SHOP</Linken>
      <Linken to="/about">ABOUT</Linken>
      <Linken to="/contact">CONTACT</Linken>
      <Linken to="/signin" className="fa fa-user"></Linken>
      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </ContainerNavbar>
    <ImageHeader
      src={
        "https://firebasestorage.googleapis.com/v0/b/boards-585b9.appspot.com/o/images%2F28-288489_fondos-de-pantalla-4k.jpg?alt=media&token=bbbd7752-9c12-4d9e-b07c-ffb2f62cea72"
      }
    />
    <ContainerCounter>
      <UseItems />
    </ContainerCounter>
  </Header>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, null)(index);
