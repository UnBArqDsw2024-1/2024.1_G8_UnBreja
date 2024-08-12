import styled from "styled-components";
import logo from "../assets/logo.svg";
import Elipse from "../components/Elipse";

export default function InitialPage() {
  return (
    <MainDiv>
      <ElipseWrapper>
        <Elipse />
        <Text>Seja bem vindo ao</Text>
      </ElipseWrapper>
      <TextWrapper>
        <img src={logo} alt="UnBreja Logo" />
      </TextWrapper>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 414px;
  height: 896px;
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
  height: 38.28%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 42px;
  color: #ffffff;
  margin-left: -150px;
  margin-top: 50px;
  width: 185px;
  height: 102px;
  z-index: 1;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 164px;
  margin-bottom: 50px;
  z-index: 1;

  img {
    margin-top: 0;
  }
`;
