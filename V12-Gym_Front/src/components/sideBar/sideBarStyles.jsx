import styled from "styled-components";

export const containerLeft = styled.section`
  position: fixed;
  width: 14rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cbcbcb;

  p {
    color: #656565;
    text-decoration: none;
    margin-left: 1rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  a {
    padding: 1rem;
    width: 80%;
    color: #656565;
    display: flex;

    justify-content: flex-start;
    align-items: center;

    text-decoration: none;
    transition: all 0.2s;
  }

  a:hover i {
    color: #070707;
  }

  div{
    display: flex;
    flex-direction: column;

  }
  @media screen and (max-width: 768px) {
    width: 3rem;

    p {
      display: none;
    }
  }
`;
