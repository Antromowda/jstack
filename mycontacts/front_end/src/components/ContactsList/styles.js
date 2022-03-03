import styled from 'styled-components';

export const Container = styled.div`
margin-top: 32px;
`;

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

strong {
  font-size: 24px;
}

a {
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  font-weight: bold;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  padding: 8px 16px;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: #FFF;
  }
}
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    .sort-button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        margin-right: 8px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Card = styled.div`
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        margin-left: 8px;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]}
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
