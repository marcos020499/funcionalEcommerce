import React, { useEffect } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase";
import Home from "./pages/Homepage/Home";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/checkout/checkout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/index";
import AddProduct from "./components/AddProduct";
import Signin from "./pages/sign-in-sign-up/sign-in-sign-up";
import SigninAdmin from "./pages/sign-inAdmin/sign-inAdmin";
import userAuth from "./pages/UserAuth/UserAuth";
import About from "./pages/About/About";
import userAuthAdmin from "./pages/UserAuthAdmin/UserAuth";
import EditProduct from "./pages/EditProduct/EditProduct";
import Details from "./components/Details/index";

import { createGlobalStyle } from "styled-components";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

toast.configure();
const App = ({ currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Signin />)}
          />
          <Route
            path="/signinAdmin"
            render={() => (currentUser ? <Redirect to="/" /> : <SigninAdmin />)}
          />
          <Route
            path="/checkout"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                ((<Checkout />),
                toast.error("login to enter to shopping cart"),
                (<Redirect to="/" />))
              )
            }
          />
          <Route path="/addProduct" component={AddProduct} />
          <Route path="/about" component={About} />
          <Route path="/editProduct/:id" component={EditProduct} />
          <Route path="/userAuth" component={userAuth} />
          <Route path="/userAuthAdmin" component={userAuthAdmin} />
          <Route path="/details/:id" component={Details} />
        </Switch>
        <Footer />
      </HashRouter>
      <GlobalStyle />
    </>
  );
};
const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
    margin: 0;
    padding: 0;
    background: linear-gradient(white, gray);
    font-family: 'Inconsolata', monospace;
  }
`;
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
