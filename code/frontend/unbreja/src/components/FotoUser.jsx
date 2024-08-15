import React from "react";
import styled from "styled-components";

export default function FotoUser({ infos }) {
  function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  function emojiInterest(interest) {
    const auxInterest = interest.toLowerCase();
    if (auxInterest === "relacionamento") return `😈 ${interest}`;
    if (auxInterest === "amizades") return `🤗 ${interest}`;
    if (auxInterest === "o que der véio") return `🤷‍♂️ ${interest}`;
    if (auxInterest === "esportes") return `🏅 ${interest}`;
    if (auxInterest === "sair pra beber") return `🍻 ${interest}`;
    if (auxInterest === "festas") return `🎉 ${interest}`;
    if (auxInterest === "encontrar um grupo") return `👥 ${interest}`;
    if (auxInterest === "animais") return `🐾 ${interest}`;

    return interest;
  }

  return (
    <MainDiv>
      <InfoWrapper>
        <UserImage src={infos.fotoUsuario} />
        <NameUser>
          <p className="Nome">{infos.nomeUsuario}</p>
          <InterestCampusWrapper>
            <p className="Idade">{calculateAge(infos.dtNascimento)} anos</p>
            <p className="Campus">{infos.universidade.siglaCampus}</p>
          </InterestCampusWrapper>
        </NameUser>
      </InfoWrapper>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  position: relative;
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 53%;
  margin-top: 0px;
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 0 0 50px 50px;
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

  .Curso {
    font-weight: semibold;
    font-size: 28px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .Idade {
    font-weight: regular;
    font-size: 18px;
    color: #ffffff;
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
