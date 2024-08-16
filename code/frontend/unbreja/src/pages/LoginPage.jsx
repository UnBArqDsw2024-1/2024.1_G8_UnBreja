import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import google_icon from "../assets/google_icon.png";
import Elipse from "../components/Elipse";
import PageHeader from "../components/PageHeader";
import LoginForm from "../components/Login/LoginForm";
import useAuth from "../hook/useAuth";
import api from "../apis/api";

export default function LoginPage() {
  const { auth, login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const data = {
        email: username,
        senha: password
      };

      const response = await api.login({ data });
      login({ token: response.data.token });
      navigate("/combinacao");
    } catch (error) {
      setError("Falha ao fazer login. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (auth && auth.token) {
      navigate("/combinacao");
    }
  }, [auth, navigate]);

  return (
    <MainDiv>
      <Elipse top="-350px" />
      <PageHeader
        title="Login"
        subtitle="Faça o login e venha fazer novas amizades"
      />
      <GoogleButton>
        <GoogleIcon src={google_icon} alt="Google Icon" />
        Login with Google
      </GoogleButton>
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
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
