import React from "react";
import Contact from "../../components/Contact/Contact";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custom-button/Custom-button";
import Content from "../../components/UserAuth/UserAuth";
const userAuth = () => {
  return (
    <>
      <h1>welcome admin</h1>
      <Link to="addProduct">
        <CustomButton>Add product</CustomButton>
      </Link>
      <Content />
    </>
  );
};
export default userAuth;
