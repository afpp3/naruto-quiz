import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  width: 100%;
  margin-top: 32px;
  align-items: center;
  padding: 5px 10px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: 4px;
`;

export default Input;
