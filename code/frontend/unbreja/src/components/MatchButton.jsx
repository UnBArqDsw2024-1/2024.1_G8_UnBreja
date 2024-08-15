import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({ className, children, ...props }) => (
  <Link className={className} {...props}>
    {children}
  </Link>
);

export default styled(Button)`
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
