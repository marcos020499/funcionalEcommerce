import React from "react";

import FormInput from "../form-input/form-input";
import firebase from "../../components/firebase/firebase";
import CustomButton from "../custom-button/Custom-button";
import { useState } from "react";
import { ContainerSignIn } from "./style";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function SingIn() {
  let history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Token, setToken] = useState("");

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangeToken = (e) => {
    setToken(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await firebase.firestore().collection("usersAdmin").get();
      if (
        Email === "marcos@gmail.com" &&
        Password === "marcos" &&
        Token === "1234"
      ) {
        setEmail(""),
          setPassword(""),
          setToken(""),
          history.push("/userAuthAdmin"),
          toast.success(`bienvenid@ administrador ${Email}`);
      } else {
        toast.error("informacion incorrecta");
      }
    } catch {
      toast.error("informacion incorrecta");
    }
  };
  return (
    <ContainerSignIn>
      <span>Sign in with your admin email, password and token</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="Email"
          type="email"
          handleChange={handleOnChangeEmail}
          value={Email}
          label="email"
          required
        />

        <FormInput
          name="Password"
          type="password"
          value={Password}
          handleChange={handleOnChangePassword}
          label="password"
          required
        />
        <FormInput
          name="Token"
          type="password"
          value={Token}
          handleChange={handleOnChangeToken}
          label="token"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign In Admin</CustomButton>
        </div>
      </form>
    </ContainerSignIn>
  );
}

export default SingIn;
