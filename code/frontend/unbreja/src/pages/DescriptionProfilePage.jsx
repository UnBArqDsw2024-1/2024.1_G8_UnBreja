import React from "react";
import styled from "styled-components";
import FotoUser from "../components/FotoUser";
import DetailsInfos from "../components/DetailsInfos";
import Button from "../components/Button";

export default function DescriptionProfilePage() {
  //APAGAR QUANDO O BACKEND TIVER PRONTO
  const simulacaoVarObjeto = {
    nomeUsuario: "João Pedro",
    idade: "22",
    fotoUsuario:
      "https://web.whatsapp.com/6b4f43dd-9417-4525-8772-9931d160fa25",
    curso: "Engenharia de Software",
    interesse: "Relacionamento",
    campus: {
      nomeCampus: "Faculdade do gama",
      siglaCampus: "FGA"
    },
    interesses: [
      "Musculação",
      "Eventos Acadêmicos",
      "Trabalhos relacionados à inteligência artificial"
    ],
    busca: ["Relacionamentos"],
    outrasRedesSociais: "@jpedrofga"
  };

  return (
    <MainDiv>
      <FotoUser infos={simulacaoVarObjeto} />
      <DetailsInfos infos={simulacaoVarObjeto} />
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
