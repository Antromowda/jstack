import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  font-size: 16px;
  background: #FFF;
  outline: none;
  border: 2px solid #FFF;
  border-radius: 4px;
  transition: border-color 0.2s ease-in;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
