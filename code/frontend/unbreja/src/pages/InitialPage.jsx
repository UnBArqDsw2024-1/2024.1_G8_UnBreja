import styled from "styled-components";
import logo from "../assets/logo.svg";
import Elipse from "../components/Elipse";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function InitialPage() {
  return (
    <MainDiv>
      <ElipseWrapper>
        <Elipse />
        <Text>Seja bem vindo ao</Text>
      </ElipseWrapper>
      <ImageWrapper>
        <img src={logo} alt="UnBreja Logo" />
      </ImageWrapper>
      <ButtonWrapper>
        <Button to="/cadastrar">Iniciar</Button>
      </ButtonWrapper>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  font-family: "Inter", sans-serif;
  height: 100vh;
  gap: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 1;
`;

const ElipseWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  z-index: 0;
`;

const Text = styled.p`
  margin: 142px 0 64px 68px;
  font-family: "Inter", sans-serif;
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  width: 185px;
  height: 102px;
  z-index: 1;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  img {
    margin-top: 0;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 48px;
  z-index: 1;
`;
