import React, { useEffect, useState } from "react";
import styled from "styled-components";
import google_icon from "../assets/google_icon.png";
import Elipse from "../components/Elipse";
import PageHeader from "../components/PageHeader";
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
  Select
} from "../components/FormComponents";
import api from "../apis/api";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function SignUpPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    nomeCompleto: "",
    descricao: "",
    senha: "",
    dtNascimento: "",
    universidade: {
      sigla: "",
      campus: ""
    },
    interesses: []
  });

  const [universidades, setUniversidades] = useState([]);
  const [interesses, setInteresses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const universidadesResponse = await api.getUniversidades();
        const interessesResponse = await api.getInteresses();
        setUniversidades(universidadesResponse.data);
        setInteresses(interessesResponse.data);
      } catch (error) {
        alert("Erro ao carregar dados. Tente novamente.");
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUniversidadeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      universidade: {
        ...prevData.universidade,
        [name]: value
      }
    }));
  };

  const handleInteressesChange = (e) => {
    const { options } = e.target;
    const selectedInteresses = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        selectedInteresses.push(options[i].value);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      interesses: selectedInteresses
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.register({ ...formData });
      setIsLoading(false);

      navigate("/combinacao");
    } catch (error) {
      setIsLoading(false);
      alert("Erro, tente novamente");
    }
  };

  return (
    <MainDiv>
      <Elipse top="-350px" />
      <PageHeader
        title="Cadastro"
        subtitle="Por favor, é necessário uma conta para utilizar o app"
      />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            disabled={isLoading}
            required
          />
          <Input
            type="text"
            placeholder="Nome Completo"
            name="nomeCompleto"
            onChange={handleChange}
            value={formData.nomeCompleto}
            disabled={isLoading}
            required
          />
          <Input
            type="text"
            placeholder="Descrição"
            name="descricao"
            onChange={handleChange}
            value={formData.descricao}
            disabled={isLoading}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            name="senha"
            onChange={handleChange}
            value={formData.senha}
            disabled={isLoading}
            required
          />
          <Input
            type="date"
            placeholder="Data de Nascimento"
            name="dtNascimento"
            onChange={handleChange}
            value={formData.dtNascimento}
            disabled={isLoading}
            required
          />
          <Select
            name="sigla"
            onChange={handleUniversidadeChange}
            value={formData.universidade.sigla}
            disabled={isLoading}
            required
          >
            <option value="">Selecione a Universidade</option>
            {universidades.map((uni) => (
              <option key={uni.sigla} value={uni.sigla}>
                {uni.sigla}
              </option>
            ))}
          </Select>
          <Input
            type="text"
            placeholder="Campus"
            name="campus"
            onChange={handleUniversidadeChange}
            value={formData.universidade.campus}
            disabled={isLoading}
            required
          />
          <Select
            name="interesses"
            placeholder="Interesses"
            multiple
            onChange={handleInteressesChange}
            value={formData.interesses}
            disabled={isLoading}
            // required
          >
            {interesses.map((interesse) => (
              <option key={interesse.nome} value={interesse.nome}>
                {interesse.nome}
              </option>
            ))}
          </Select>
          <Button type="submit" disabled={isLoading}>
            Cadastre-se
          </Button>
        </Form>

        <StyledLink to="/login">Já tem uma conta? Faça login!</StyledLink>
      </FormContainer>
      <GoogleButton>
        <GoogleIcon src={google_icon} alt="Google Icon" />
        Cadastre-se com Google
      </GoogleButton>
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
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
