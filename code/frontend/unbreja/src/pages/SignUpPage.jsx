import React from "react";
import styled from "styled-components";
import google_icon from "../assets/google_icon.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Elipse from "../components/Elipse";
import PageHeader from "../components/PageHeader";
import SignUpForm from "../components/SignUp/SignUpForm";

export default function SignUpPage() {
  return (
    <MainDiv>
      <Elipse top="-350px" />
      <PageHeader title="Cadastro" subtitle="Por favor, é necessário uma conta para utilizar o app" />
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

const SignUpCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  z-index: 1;
`;

const Title = styled.h1`
  color: #4a148c;
  margin-bottom: 10px;
  z-index: 1;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 20px;
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

const Form = styled.form`
  width: 100%;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  color: #757575;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  display: block;
  align-items: center;
`;

const StyledLink = styled.a`
  color: #4a148c;
  text-decoration: none;
`;

const SignUpButton = styled(Link)`
  background-color: #4a148c;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #6a1b9a;
  }
`;

const LoginLink = styled.p`
  padding: 20px;
  color: #666;
`;
