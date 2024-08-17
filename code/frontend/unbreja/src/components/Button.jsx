import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// ButtonComponent agora pode renderizar tanto um <Link> quanto um <button>
const ButtonComponent = ({ className, children, as, ...props }) => {
  if (as === "button") {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  } else {
    return (
      <Link className={className} {...props}>
        {children}
      </Link>
    );
  }
};

const PrimaryButton = styled(ButtonComponent)`
  background-color: #aa1945;
  color: #ffffff;
  font-weight: medium;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  width: 355px;
  height: 52px;
  border-radius: 15px;
  margin-top: auto;
  margin-bottom: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #d74773;
  }
`;

const SecondaryButton = styled(ButtonComponent)`
  background-color: white;
  color: #aa1945; 
  border: 2px solid #aa1945;
  border-radius: 10px;
  padding: 3px 3px;
  font-weight: medium;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  width: 355px;
  height: 52px;
  border-radius: 15px;
  margin-top: auto;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #f8f8f8;
  }
`;

export function createButton(type, to, children, buttonType = "button") {
  if (type === 'primary') {
    return (
      <PrimaryButton as={buttonType === "submit" ? "button" : Link} to={to} type={buttonType}>
        {children}
      </PrimaryButton>
    );
  } else if (type === 'secondary') {
    return (
      <SecondaryButton as={buttonType === "submit" ? "button" : Link} to={to} type={buttonType}>
        {children}
      </SecondaryButton>
    );
  } else {
    throw new Error("Tipo de botão desconhecido");
  }
}
