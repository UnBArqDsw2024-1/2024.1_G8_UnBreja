import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import TinderCard from "react-tinder-card";

export default function SwipePage() {
  const [stamp, setStamp] = useState(null);
  const navigate = useNavigate();

  const swiped = (direction, nameToDelete) => {
    setTimeout(() => {
      setStamp(null);
    }, 300);
  };

  const onSwipeStart = (direction) => {
    if (direction === "right") {
      setStamp("LIKE");
    } else if (direction === "left") {
      setStamp("NOPE");
    }
  };

  const handleClick = (user) => {
    navigate(`/descricaoperfil/${user.id}`, { state: { user } });
  };

  const profiles = [
    {
      id: "1",
      nomeUsuario: "João Pedro",
      nomeCompleto: "João Pedro Silva",
      descricao: "Estudante de Engenharia de Software",
      dtNascimento: new Date(2002, 0, 15),
      fotoUsuario: "https://avatars.githubusercontent.com/u/56097889?v=4",
      universidade: {
        nomeCampus: "Faculdade do Gama",
        siglaCampus: "FGA"
      }
    },
    {
      id: "2",
      nomeUsuario: "Maria Clara",
      nomeCompleto: "Maria Clara Costa",
      descricao: "Apaixonada por design gráfico",
      dtNascimento: new Date(1999, 5, 23),
      fotoUsuario: "https://randomuser.me/api/portraits/women/50.jpg",
      universidade: {
        nomeCampus: "Universidade de Brasília",
        siglaCampus: "UnB"
      }
    },
    {
      id: "3",
      nomeUsuario: "Lucas Mendes",
      nomeCompleto: "Lucas Mendes Rocha",
      descricao: "Entusiasta de inteligência artificial",
      dtNascimento: new Date(1998, 10, 12),
      fotoUsuario: "https://randomuser.me/api/portraits/men/60.jpg",
      universidade: {
        nomeCampus: "Universidade de São Paulo",
        siglaCampus: "USP"
      }
    },
    {
      id: "4",
      nomeUsuario: "Beatriz Oliveira",
      nomeCompleto: "Beatriz Oliveira Santos",
      descricao: "Engenheira Civil em formação",
      dtNascimento: new Date(2001, 3, 18),
      fotoUsuario: "https://randomuser.me/api/portraits/women/68.jpg",
      universidade: {
        nomeCampus: "Universidade Federal de Minas Gerais",
        siglaCampus: "UFMG"
      }
    },
    {
      id: "5",
      nomeUsuario: "Gabriel Souza",
      nomeCompleto: "Gabriel Souza Pereira",
      descricao: "Desenvolvedor Full Stack",
      dtNascimento: new Date(1997, 8, 30),
      fotoUsuario: "https://randomuser.me/api/portraits/men/22.jpg",
      universidade: {
        nomeCampus: "Instituto Federal de São Paulo",
        siglaCampus: "IFSP"
      }
    },
    {
      id: "6",
      nomeUsuario: "Ana Paula",
      nomeCompleto: "Ana Paula Ribeiro",
      descricao: "Estudante de Medicina",
      dtNascimento: new Date(2000, 7, 9),
      fotoUsuario: "https://randomuser.me/api/portraits/women/34.jpg",
      universidade: {
        nomeCampus: "Universidade Federal do Rio de Janeiro",
        siglaCampus: "UFRJ"
      }
    },
    {
      id: "7",
      nomeUsuario: "Carlos Henrique",
      nomeCompleto: "Carlos Henrique Almeida",
      descricao: "Aficionado por tecnologia e inovação",
      dtNascimento: new Date(1996, 1, 27),
      fotoUsuario: "https://randomuser.me/api/portraits/men/35.jpg",
      universidade: {
        nomeCampus: "Universidade Federal de Santa Catarina",
        siglaCampus: "UFSC"
      }
    },
    {
      id: "8",
      nomeUsuario: "Juliana Ferreira",
      nomeCompleto: "Juliana Ferreira Lima",
      descricao: "Bióloga apaixonada por conservação ambiental",
      dtNascimento: new Date(1998, 11, 14),
      fotoUsuario: "https://randomuser.me/api/portraits/women/39.jpg",
      universidade: {
        nomeCampus: "Universidade de Brasília",
        siglaCampus: "UnB"
      }
    },
    {
      id: "9",
      nomeUsuario: "Felipe Costa",
      nomeCompleto: "Felipe Costa Santos",
      descricao: "Especialista em segurança da informação",
      dtNascimento: new Date(1995, 4, 22),
      fotoUsuario: "https://randomuser.me/api/portraits/men/41.jpg",
      universidade: {
        nomeCampus: "Universidade Estadual de Campinas",
        siglaCampus: "UNICAMP"
      }
    },
    {
      id: "10",
      nomeUsuario: "Larissa Martins",
      nomeCompleto: "Larissa Martins Silva",
      descricao: "Estudante de Arquitetura",
      dtNascimento: new Date(2001, 2, 2),
      fotoUsuario: "https://randomuser.me/api/portraits/women/23.jpg",
      universidade: {
        nomeCampus: "Universidade Federal de Pernambuco",
        siglaCampus: "UFPE"
      }
    }
  ];

  return (
    <MainDiv>
      <CardContainer>
        {profiles.map((user) => (
          <TinderCard
            className="swipe"
            key={user.id}
            onSwipeStart={(dir) => onSwipeStart(dir)}
            onSwipe={(dir) => swiped(dir, user.id)}
          >
            <InfoWrapper onClick={() => handleClick(user)}>
              {stamp && <Stamp direction={stamp}>{stamp}</Stamp>}
              <UserImage src={user.fotoUsuario} />
              <NameUser>
                <p className="Nome">{user.nomeUsuario}</p>
                <InterestCampusWrapper>
                  <p className="Campus">{user.universidade.siglaCampus}</p>
                </InterestCampusWrapper>
              </NameUser>
            </InfoWrapper>
          </TinderCard>
        ))}
      </CardContainer>
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
  background-color: green;
`;

const CardContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  border-radius: 15px;
  display: flex;
  z-index: 1;
  background-color: blue;
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 50px;
  object-fit: cover;
  object-position: center;
`;

const NameUser = styled.div`
  position: absolute;
  bottom: 45px;
  width: 83%;
  height: auto;
  z-index: 2;
  align-self: center;

  font-family: "Poppins", sans-serif;

  .Nome {
    font-weight: bold;
    font-size: 45px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .Campus {
    font-weight: regular;
    font-size: 18px;
    color: #ffffff;
  }
`;

const InterestCampusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stamp = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 32px;
  font-weight: bold;
  color: white;
  background-color: ${({ direction }) =>
    direction === "LIKE" ? "green" : "red"};
  transform: rotate(-15deg);

  ${({ direction }) =>
    direction === "LIKE"
      ? css`
          right: 20px;
        `
      : css`
          left: 20px;
        `}
`;
