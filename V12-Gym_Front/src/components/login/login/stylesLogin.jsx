import styled from 'styled-components';

export const containerContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ccc;
  transition: all 1s;

  @media screen and (orientation: landscape) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    transition: all 1s;
  }
`;

export const containerMain = styled.main`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  background-color: #fff;
  box-shadow: 4px 1px 20px 8px rgba(0, 0, 0, 0.158);
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const text = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 60vh;
    width: 100%;
    padding-top: 1rem;
    gap: 3rem;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
  }
`;

export const containerImage = styled.section`
  background-color: #000;
  width: 50%;
  height: 100%;
  border-radius: 0 1rem 1rem 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0 1rem 1rem 0;
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const containerLogo = styled.div`
  width: 15rem;
  height: 10rem;

  img {
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 1.2rem;
    color: #00000098;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 1.5rem;
    }
    img {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: -1rem;
      width: 15rem;
      height: 9rem;
    }
  }

  @media screen and (orientation: landscape) {
    height: 15vh;
  }
`;

export const containerform= styled.div`
  margin-top: 4rem;

  form {
    width: 100%;
  }

  form > div {
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin: 0.5rem 0;
  }

  input {
    margin-top: 0.5rem;
    height: 2rem;
    background: #fafafa;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    border: none;
    outline: none;
    padding-left: 0.5rem;
  }

  section {
    display: flex;
    justify-content: space-between;
  }

  a {
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.4s;
  }

  a:hover {
    color: black;
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }

  @media screen and (max-width: 330px) {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      width: 9rem;
    }

    a {
      display: flex;
    }

    input {
      margin-left: 0.4rem;
      margin-bottom: 1rem;
      width: 90%;
    }
  }
`;

export const buttonEntrar = styled.button`
  height: 1.8rem;
  width: 5rem;
  background-color: #000;
  border: none;
  color: #fff;
  margin: 0.7rem 0.7rem 0 0;
  border-radius: 0.3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.5s ease;

  :hover {
    color: #000;
    box-shadow: 0px 4px 7px #6565659b;
    background-color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 330px) {
    height: 1.4rem;
    width: 5rem;
  }
`;

export const buttonCriarConta = styled.button`
  background-color: #fff;
  height: 1.8rem;
  width: 5rem;
  border: none;
  color: #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
  margin: 0.7rem 0 0 0;
  transition: background-color 0.5s ease;

  :hover {
    cursor: pointer;
    color: #fff;
    box-shadow: 0px 4px 7px #6565659b;
    background-color: #000;
  }
`;

export const SplashContainer= styled.div`
`
export const SplashText= styled.div`
`
export const Logo= styled.div`
`
