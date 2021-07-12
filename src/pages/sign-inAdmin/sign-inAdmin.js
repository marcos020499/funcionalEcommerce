import React from "react";
import styled from "styled-components";
import SignInAdmin from "../../components/sign-inAdmin/sign-in";

const SignInAndSignUp = () => (
  <ContainerSignPage>
    <SignInAdmin />
  </ContainerSignPage>
);

export default SignInAndSignUp;
const ContainerSignPage = styled.div`
  display: flex;
  margin: 0 15vw 0 15vw;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;
