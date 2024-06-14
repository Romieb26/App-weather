import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #87c2f9;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const CustomButton = ({ children, onClick }) => (
  <Button onClick={onClick}>
    {children}
  </Button>
);

export default CustomButton;
