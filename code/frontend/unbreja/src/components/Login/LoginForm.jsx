import React from "react";
import styled from "styled-components";
import Input from "../Login/LoginInput";
import { createButton } from "../Button";

function LoginForm({ formData, onInputChange, onSubmit, isLoading, error }) {
  return (
    <FormContainer onSubmit={onSubmit}>
      <Input
        label="E-mail"
        type="email"
        name="username"
        value={formData.username}
        onChange={onInputChange}
      />
      <Input
        label="Senha"
        type="password"
        name="password"
        value={formData.password}
        onChange={onInputChange}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ButtonWrapper>
        {createButton('primary', null, isLoading ? 'Carregando...' : 'Entrar com a minha conta')}
        <TextWrapper>
          <p>Não possui conta?</p>
          {createButton('secondary', '/cadastrar', 'Cadastrar')}
        </TextWrapper>
      </ButtonWrapper>
    </FormContainer>
  );
}

export default LoginForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const TextWrapper = styled.div`
  margin-top: 5px;

  p {
    font-size: 16px;
    color: #aa1945;
    margin-bottom: 5px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;
