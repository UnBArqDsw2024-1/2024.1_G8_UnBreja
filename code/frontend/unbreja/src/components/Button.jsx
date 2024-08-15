import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({ className, children, ...props }) => (
    <Link className={className} {...props}>
        {children}
    </Link>
);

export default styled(Button)`
    background-color: #AA1945;
    color: white;
    padding: 16px;
    width: 354px;
    height: 52px;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 20px;
    font-family: 'Inter', sans-serif;
    display: inline-block;
    text-align: center;

    &:hover {
        background-color: #6a1b9a;
    }
`;