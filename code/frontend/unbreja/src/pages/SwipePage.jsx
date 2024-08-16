import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { profiles as initialProfiles } from "../helpers/profiles";

export default function SwipePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profiles, setProfiles] = useState(initialProfiles);
  const [stamp, setStamp] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const navigate = useNavigate();

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    setStamp(direction === "right" ? "LIKE" : "NOPE");

    setTimeout(() => {
      setStamp(null);

      const newProfiles = [...profiles];
      newProfiles.splice(currentIndex, 1);
      setProfiles(newProfiles);

      if (newProfiles.length > 0) {
        setCurrentIndex(0);
      } else {
        console.log("Não há mais perfis para exibir.");
      }
    }, 300);
  };

  const handleClick = (user) => {
    navigate(`/descricaoperfil/${user.id}`, { state: { user } });
  };

  return (
    <MainDiv>
      <CardContainer>
        {profiles.length > 0 && (
          <SwipeCard
            key={profiles[currentIndex].id}
            user={profiles[currentIndex]}
            handleClick={() => handleClick(profiles[currentIndex])}
            onSwipe={handleSwipe}
            showStamp={stamp}
            swipeDirection={swipeDirection}
          />
        )}
      </CardContainer>
    </MainDiv>
  );
}

const SwipeCard = ({
  user,
  handleClick,
  onSwipe,
  showStamp,
  swipeDirection
}) => {
  const cardRef = useRef(null);

  const handleTouchStart = (e) => {
    const startX = e.touches[0].clientX;

    const handleTouchMove = (e) => {
      const moveX = e.touches[0].clientX - startX;
      const absMoveX = Math.abs(moveX);

      if (cardRef.current) {
        cardRef.current.style.transform = `translateX(${moveX}px)`;
      }

      if (absMoveX > 100) {
        if (moveX > 0) {
          onSwipe("right");
        } else {
          onSwipe("left");
        }
      }
    };

    const handleTouchEnd = () => {
      if (cardRef.current) {
        cardRef.current.style.transition = "transform 0.5s ease";
        cardRef.current.style.transform = `translateX(${
          swipeDirection === "right" ? "100%" : "-100%"
        })`;
      }

      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.transition = "";
          cardRef.current.style.transform = "";
        }
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      }, 500);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <Card ref={cardRef} onClick={handleClick} onTouchStart={handleTouchStart}>
      {showStamp && <Stamp direction={showStamp}>{showStamp}</Stamp>}
      <UserImage src={user.fotoUsuario} />
      <NameUser>
        <p className="Nome">{user.nomeUsuario}</p>
        <InterestCampusWrapper>
          <p className="Campus">{user.universidade.siglaCampus}</p>
        </InterestCampusWrapper>
      </NameUser>
    </Card>
  );
};

const MainDiv = styled.div`
  font-family: "Inter", sans-serif;
  width: 414px;
  height: 896px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
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
`;
