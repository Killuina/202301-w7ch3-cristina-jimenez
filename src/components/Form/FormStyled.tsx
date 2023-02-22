import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 200px;
  margin-top: 2rem;
  background-color: #fdf6e3;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(1rem);
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background-color: #ff9b9d;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ff7b7f;
  }
`;
