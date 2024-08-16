import React from "react";
import styled from "styled-components";

function Input({ label, type, name, value, onChange, className }) {
  return (
    <div className={className} id="float-label">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default styled(Input)`
  display: flex;
  flex-direction: column;
  min-width: 350px;

  input {
    width: 100%;
    height: 56px;
    padding: 0px 16px 0 14px;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin-bottom: 20px;
  }

  label {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #aa1945;
    pointer-events: none;
    line-height: 24px;
  }
`;
