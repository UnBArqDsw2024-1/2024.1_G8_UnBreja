import React, { useEffect, useNavigate, useState } from "react";
import styled from "styled-components";
import google_icon from "../assets/google_icon.png";
import Elipse from "../components/Elipse";
import PageHeader from "../components/PageHeader";
import LoginForm from "../components/Login/LoginForm";
import useAuth from "../hook/useAuth";
import api from "../apis/api.js";

export default function LoginPage() {
  const { auth, login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = JSON.stringify({
        email: username,
        senha: password
      });

      const promise = api.login({ data });
      promise.then((response) => {
        setIsLoading(false);

        console.log(response.data);
        login({ token: response.data.token });
        navigate("/combinacao");
      });
      promise.catch(() => {
        setIsLoading(false);

        alert("Erro, tente novamente");
      });

      // login({ token: response.data.token });

      navigate("/combinacao");
    } catch (error) {
      console.error(error);
      setError("Falha ao fazer login. Tente novamente.");
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
      <LoginForm />
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
