import React from "react";
import styled from "styled-components";
import google_icon from "../assets/google_icon.png"
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <MainDiv>
      <SignUpCard>
        <Title>Cadastro</Title>
        <Subtitle>
          Por favor, é necessária uma conta para utilizar o app
        </Subtitle>

        <GoogleButton>
          <GoogleIcon src={google_icon} alt="Google Icon" />
          Sign up with Google
        </GoogleButton>

        <Form>
          <InputGroup>
            <Label htmlFor="fullName">Nome e Sobrenome</Label>
            <Input
              type="text"
              id="fullName"
              placeholder="Ex: Arnaldo Batista"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Ex: reidelas69@gmail.com"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              placeholder="Mínimo oito caracteres"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="confirmPassword">Confirme sua senha</Label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Mínoimo oito caracteres"
            />
          </InputGroup>

          <CheckboxGroup>
            <Checkbox type="checkbox" id="terms" />
            <CheckboxLabel htmlFor="terms">
              Eu concordo com os{" "}
              <StyledLink href=" /terms">Termos de uso </StyledLink> e a{" "}
              <StyledLink href="/privacy">Política de Privacidade</StyledLink>
            </CheckboxLabel>
          </CheckboxGroup>

          <SignUpButton to="/perfil">Cadastar</SignUpButton>
        </Form>

        <LoginLink>
          Já possui uma conta?{" "}
          <StyledLink href="/login">Faça seu Login</StyledLink>
        </LoginLink>
      </SignUpCard>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  font-family: "Inter", sans-serif;
  width: 414px;
  height: 896px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const SignUpCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  color: #4a148c;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const GoogleButton = styled.button`
  background-color: #ffffff;
  color: #757575;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
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
