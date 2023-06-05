import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const DadosContainer = styled.div`
  background-color: white;
  color: black;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Dado = styled.div`
  margin-bottom: 10px;
`;

export const BotaoEliminar = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
