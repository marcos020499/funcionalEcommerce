import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Homepage/Home";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/checkout/checkout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/index";
import AddProduct from "./components/AddProduct";
import { connect } from "react-redux";
import Singin from "./pages/sign-in-sign-up/sign-in-sign-up";
import { setCurrentUser } from "./redux/user/user.actions";
import { createGlobalStyle } from "styled-components";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/singin" component={Singin} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/addProduct" component={AddProduct} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}
const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
    margin: 0;
    padding: 0;
    background: linear-gradient(white, gray);
    font-family: 'Inconsolata', monospace;
  }
`;
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
