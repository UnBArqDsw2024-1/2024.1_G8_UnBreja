import React from "react";
import styled from "styled-components";

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

  return (
    <MainDiv>
      <ProfileCard>
        <Title>Perfil</Title>
        <Subtitle>Informações e preferências</Subtitle>

        <Form>
          <InputGroup>
            <Label htmlFor="campus">Campus</Label>
            <Select id="campus">
              {campuses.map((campus) => (
                <option key={campus} value={campus}>
                  {campus}
                </option>
              ))}
            </Select>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="region">Região</Label>
            <Select id="region">
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
            />
          </InputGroup>

          <InterestGroup>
            <InterestTitle>Quais seus interesses</InterestTitle>
            <CheckboxWrapper>
              <CheckboxLabel>
                <Checkbox type="checkbox" />
                Relacionamentos
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" />O que der veio
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" />
                Amizades
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" />
                Esportes
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" />
                Sair pra beber
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" />
                Festas
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" />
                Encontrar um Grupo
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" />
                Animais
              </CheckboxLabel>
            </CheckboxWrapper>
          </InterestGroup>

          <CompleteProfileButton type="submit">Continuar</CompleteProfileButton>
        </Form>
      </ProfileCard>
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

const ProfileCard = styled.div`
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

const CompleteProfileButton = styled.button`
  background-color: #4a148c;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #6a1b9a;
  }
`;
