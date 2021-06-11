import React, { useState } from "react";
import CustomButton from "../custom-button/Custom-button";

import {
  auth,
  createUserProfileDocument,
} from "../../components/firebase/firebase";
import { ContainerSignUp } from "./style";
import FormInput from "../form-input/form-input";

function SingUp() {
  const [DisplayName, setDisplayName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPasswrod] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState([]);

  const handleOnChangeName = (e) => {
    setDisplayName(e.target.value);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPasswrod(e.target.value);
  };
  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onSubmit =
    ((event) => {
      event.preventDefault();
      const fetchData = async () => {
        if (Password !== ConfirmPassword) {
          alert("Passwords don't match");
          return;
        }
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            Email,
            Password
          );
          await createUserProfileDocument(user, { DisplayName }).then(
            () => setDisplayName(""),
            setEmail(""),
            setPasswrod(""),
            setConfirmPassword([])
          );
        } catch (err) {
          console.error(err);
        }
      };
    },
    []);
  return (
    <ContainerSignUp>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          type="text"
          label="displayName"
          value={DisplayName}
          name="title"
          onChange={handleOnChangeName}
          required
        />
        <FormInput
          type="text"
          label="email"
          value={Email}
          name="email"
          onChange={handleOnChangeEmail}
          required
        />
        <FormInput
          type="password"
          label="password"
          value={Password}
          name="password"
          onChange={handleOnChangePassword}
          required
        />
        <FormInput
          type="password"
          label="confirmPassword"
          value={ConfirmPassword}
          name="confirmPassword"
          onChange={handleOnChangeConfirmPassword}
          required
        />
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </ContainerSignUp>
  );
}

export default SingUp;
