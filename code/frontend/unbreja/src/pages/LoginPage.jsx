import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hook/useAuth";
import api from "../apis/api";
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink
} from "../components/FormComponents";

export default function LoginPage() {
  const { auth, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeSenha(e) {
    setSenha(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const body = {
      email: email,
      senha: senha
    };
    try {
      const promise = await api.login(body);

      setIsLoading(false);

      login(promise.data);

      navigate("/combinacao");
    } catch (error) {
      setIsLoading(false);
      alert("Erro, tente novamente");
    }
  }

  useEffect(() => {
    if (auth?.token) {
      navigate("/combinacao");
    }
  }, [auth, navigate]);

  return (
    <MainDiv>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChangeEmail}
            value={email}
            disabled={isLoading}
            required
          />
          <Input
            type="password"
            placeholder="senha"
            name="password"
            onChange={handleChangeSenha}
            value={senha}
            disabled={isLoading}
            required
          />

          <Button type="submit" disabled={isLoading}>
            {"Entrar"}
          </Button>
        </Form>

        <StyledLink to="/cadastrar">Não tem uma conta? Cadastre-se!</StyledLink>
      </Container>
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
  height: 15px;
`;
