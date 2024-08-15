import React from "react";
import styled from "styled-components";

export default function DetailsInfos({ infos }) {
  const formatList = (list) => {
    if (list.length === 1) return list[0];
    return `${list.slice(0, -1).join(", ")} e ${list.slice(-1)}.`;
  };

  return (
    <MainDiv>
      <InfoWrapper>
        <span>
          <strong>Descrição:</strong> {infos.campus.nomeCampus}, {infos.idade}{" "}
          anos.
        </span>
        <span>
          <strong>Interesses:</strong> {formatList(infos.interesses)}
        </span>
      </InfoWrapper>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  position: relative;
  font-family: "Inter", sans-serif;
  width: 100%;
  height: auto;
  margin-top: 55px;
  display: flex;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 355px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #999797;
  font-weight: regular;
  font-size: 18px;

  span {
    font-weight: regular;
    margin-bottom: 15px;
  }

  strong {
    font-weight: bold;
  }
`;
