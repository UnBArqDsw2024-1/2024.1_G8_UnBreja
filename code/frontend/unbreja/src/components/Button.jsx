import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonComponent = ({ className, children, ...props }) => (
  <Link className={className} {...props}>
    {children}
  </Link>
);

const Button = styled(ButtonComponent)`
  background-color: #AA1945;
  color: #FFFFFF;
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
    background-color: #D74773;
  }
`;

export default Button;
