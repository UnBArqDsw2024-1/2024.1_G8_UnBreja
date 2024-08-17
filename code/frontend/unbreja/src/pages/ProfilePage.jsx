import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createButton } from "../components/Button";
import Elipse from "../components/Elipse";
import PageHeader from "../components/PageHeader";
import api from "../apis/api";

export default function ProfilePage() {
  const campuses = [
    "FGA - Faculdade UnB Gama",
    "FCE - Faculdade UnB Ceilândia",
    "FUP - Faculdade UnB Planaltina", 
    "Darcy Ribeiro"
  ];

  const regions = [
    "Ceilândia",
    "Asa Norte",
    "Asa Sul",
    "Taguatinga",
    "Gama",
    "Samambaia",
    "Planaltina",
    "Brasília",
    "Guará",
    "Sobradinho",
    "Paranoá",
    "Recanto das Emas",
    "Riacho Fundo",
    "Sudoeste",
    "Águas Claras",
    "Santa Maria",
    "Brazlândia",
    "Cruzeiro",
    "Varjão",
    "Candangolândia",
    "Núcleo Bandeirante",
    "Lago Sul",
    "Lago Norte",
    "Park Way"
  ];

  const interessesOptions = [
    "Relacionamento", 
    "O que der veio", 
    "Amizades", 
    "Esportes", 
    "Sair para beber", 
    "Festas", 
    "Encontrar um grupo", 
    "Animais"
  ];

  const [campus, setCampus] = useState(campuses[0]);
  const [region, setRegion] = useState(regions[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interessesChecked, setInteressesChecked] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setInteressesChecked((prevInteresses) => [...prevInteresses, value]);
    } else {
      setInteressesChecked((prevInteresses) =>
        prevInteresses.filter((interesse) => interesse !== value)
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      nomeCompleto: "Seu Nome Completo", // Ajuste conforme necessário
      descricao: "Sua Descrição", // Ajuste conforme necessário
      dtNascimento: "2024-08-16T12:01:21.983Z", // Ajuste conforme necessário
      universidade: {
        sigla: campus,
        campus: region,
      },
      interesses: interessesChecked,
    };

    try {
      await api.updatePerfil(userData); // Substitua pelo endpoint correto
      alert('Usuário atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <MainDiv>
      <ElipseWrapper>
        <Elipse top="-350px" />
      </ElipseWrapper>
      <PageHeaderWrapper>
        <PageHeader
          title="Perfil"
          subtitle="Informações e preferências"
        />
      </PageHeaderWrapper>
      
      <ProfileCard>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="campus">Campus</Label>
            <Select 
              id="campus" 
              value={campus} 
              onChange={(e) => setCampus(e.target.value)}
            >
              {campuses.map((campus) => (
                <option key={campus} value={campus}>
                  {campus}
                </option>
              ))}
            </Select>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="region">Região</Label>
            <Select 
              id="region" 
              value={region} 
              onChange={(e) => setRegion(e.target.value)}
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </Select>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="phoneNumber">Celular</Label>
            <Input
              type="text"
              id="phoneNumber"
              placeholder="Ex: (61) 99999-9999"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </InputGroup>

          <InterestGroup>
            <InterestTitle>Quais seus interesses</InterestTitle>
            <CheckboxWrapper>
              {interessesOptions.map((interesse) => (
                <CheckboxLabel key={interesse}>
                  <Checkbox 
                    type="checkbox" 
                    value={interesse}
                    onChange={handleCheckboxChange}
                  />
                  {interesse}
                </CheckboxLabel>
              ))}
            </CheckboxWrapper>
          </InterestGroup>
          
          <ButtonWrapper>
            {createButton('primary', '#', 'Atualizar Perfil', 'submit')}
          </ButtonWrapper>      
        </Form>
      </ProfileCard>
    </MainDiv>
  );
}

// Estilização permanece a mesma conforme fornecido anteriormente
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

const ProfileCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: #aa1945;
  pointer-events: none;
  line-height: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  color: #757575;
`;

const InterestGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const InterestTitle = styled.p`
  color: #757575;
  margin-bottom: 10px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 10px;
  color: #757575;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const ElipseWrapper = styled.div`
  position: absolute;
  top: -130px;
  left: -90px; 
  transform: rotate(18.38deg);
`;

const PageHeaderWrapper = styled.div`
  position: absolute;
  top: -25px;
  left: -20px; 
`;

