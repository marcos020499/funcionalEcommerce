import React from "react";
import Contact from "../../components/Contact/Contact";
import { Link } from "react-router-dom";
import Content from "../../components/Content/Content";
import CustomButton from "../../components/custom-button/Custom-button";

const userAuth = () => (
  (
    <Link to="userAuthAdmin">
      <CustomButton>Are you admin?</CustomButton>
    </Link>
  ),
  (<Content />)
);
export default userAuth;
