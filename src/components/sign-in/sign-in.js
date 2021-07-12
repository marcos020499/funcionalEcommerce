import React from "react";

import FormInput from "../form-input/form-input";
import { auth, signInWithGoogle } from "../../components/firebase/firebase";
import CustomButton from "../custom-button/Custom-button";
import { useState } from "react";
import { ContainerSignIn, GoogleButton } from "./style";
import { toast } from "react-toastify";
import { Link, Redirect, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function SingIn() {
  let history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth
        .signInWithEmailAndPassword(Email, Password)
        .then(
          () => setEmail(""),
          setPassword(""),
          history.push("/userAuth"),
          toast.success(`bienvenid@ ${Email}`)
        );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <ContainerSignIn>
      <Link to="/signinAdmin">
        <CustomButton>Are you admin?</CustomButton>
      </Link>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
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
        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
          <GoogleButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign in with Google{" "}
          </GoogleButton>
        </div>
      </form>
    </ContainerSignIn>
  );
}

export default SingIn;
