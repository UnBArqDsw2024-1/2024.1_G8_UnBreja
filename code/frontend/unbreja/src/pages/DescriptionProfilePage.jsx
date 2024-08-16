import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import FotoUser from "../components/FotoUser";
import DetailsInfos from "../components/DetailsInfos";
import Button from "../components/Button";

export default function DescriptionProfilePage() {
  const location = useLocation();
  const { user } = location.state;

  return (
    <MainDiv>
      <FotoUser infos={user} />
      <DetailsInfos infos={user} />
      <Button>Dar Match</Button>
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
`;
