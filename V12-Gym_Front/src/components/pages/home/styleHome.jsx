import styled from "styled-components";

export const container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const containerContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;

  margin-left: 14rem;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const content = styled.div``;
