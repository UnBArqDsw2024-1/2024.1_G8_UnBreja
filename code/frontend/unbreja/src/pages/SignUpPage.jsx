import React from "react";
import styled from "styled-components";
import google_icon from "../assets/google_icon.png";
import Elipse from "../components/Elipse";
import PageHeader from "../components/PageHeader";
import SignUpForm from "../components/SignUp/SignUpForm";

export default function SignUpPage() {
  return (
    <MainDiv>
      <Elipse top="-350px" />
      <PageHeader
        title="Cadastro"
        subtitle="Por favor, é necessário uma conta para utilizar o app"
      />
      <GoogleButton>
        <GoogleIcon src={google_icon} alt="Google Icon" />
        Sign up with Google
      </GoogleButton>
      <SignUpForm />
    </MainDiv>
  );
}

const MainDiv = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px;
  z-index: 1;
`;

const GoogleButton = styled.button`
  background-color: #ffffff;
  color: #757575;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoogleIcon = styled.img`
  margin-right: 10px;
  width: 15px;
  heigth: 15px;
`;
