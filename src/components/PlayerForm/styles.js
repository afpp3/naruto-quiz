import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input,
  button {
    outline: 0;
    height: 40px;
    width: 100%;
  }
`;

export const Input = styled.input`
  margin-top: 32px;
  padding: 5px 10px;
  background: transparent;
  border: 1px solid #f9f9ff;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.contrastText};
`;

export const Button = styled.button`
  padding: 10 0;
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 16px;
  letter-spacing: 1.25px;
  font-weight: bold;
  font-family: 'Latto', sans-serif;
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  transition: 0.3s ease-in-out;

  &:disabled {
    background-color: gray;
    cursor: default;
    opacity: 0.65;
    cursor: not-allowed;
  }

  &:disabled:hover {
    transform: none;
  }

  &:hover {
    transform: scale(0.9);
  }
`;
