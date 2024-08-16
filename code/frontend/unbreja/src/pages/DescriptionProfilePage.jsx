import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import FotoUser from "../components/FotoUser";
import DetailsInfos from "../components/DetailsInfos";
import { createButton } from "../components/Button";

export default function DescriptionProfilePage() {
  //APAGAR QUANDO O BACKEND TIVER PRONTO
  const simulacaoVarObjeto = {
    nomeUsuario: "João Pedro",
    nomeCompleto: "João Pedro Silva",
    email: "joao.pedro@email.com",
    descricao: "Estudante de Engenharia de Software",
    senha: "senhaSegura123",
    dtNascimento: new Date(2002, 0, 15),
    fotoUsuario: "https://avatars.githubusercontent.com/u/56097889?v=4",
    interesses: [
      { nome: "Musculação" },
      { nome: "Eventos Acadêmicos" },
      { nome: "Trabalhos relacionados à inteligência artificial" }
    ],
    universidade: {
      nomeCampus: "Faculdade do Gama",
      siglaCampus: "FGA"
    }
  };


  return (
    <MainDiv>
      <FotoUser infos={simulacaoVarObjeto} />
      <DetailsInfos infos={simulacaoVarObjeto} />
      {createButton('secondary', '/', 'Dar Match')}
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