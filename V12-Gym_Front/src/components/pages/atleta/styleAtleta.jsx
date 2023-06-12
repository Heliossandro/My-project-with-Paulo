import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const ContainerTable = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;

  form {
    display: flex;

    justify-content: space-between;
    align-items: center;
  }
  width: 100%;

  table {
    border-collapse: collapse;
    margin-top: 20px;
  }

  th,
  td {
    padding: 5px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    vertical-align: middle;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 1300px) {
    tr,
    td,
    th {
      font-size: 1rem;
    }

    .id1 {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 18px;

    .id1 {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    margin-left: 15%;
    th,
    tr,
    td {
      font-size: 0.7rem;
    }

    .icone:hover {
      box-shadow: 0px 4px 7px #6565659b;
      background-color: #000000b0;
      border-radius: 30px;
      color: #ffffff;
      transition: all 1s;
    }
  }
  @media screen and (max-width: 320px) {
    width: 90%;
    margin-left: 16%;

    .id {
      display: none;
    }
    th,
    tr,
    td {
      font-size: 0.7rem;
    }

    .icone:hover {
      box-shadow: 0px 4px 7px #6565659b;
      background-color: #000000b0;
      border-radius: 30px;
      color: #ffffff;
      transition: all 1s;
    }
  }
`;

export const BodyTable = styled.div``;

export const FirstSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    position: relative;
    display: flex;
    outline: 0;
    border: 0;
    width: 14em;
    height: 2.3em;
    line-height: 3;
    background: #fff;
    overflow: hidden;
    border-radius: 0.3em;
    border: 1px solid #666;
    > select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0important;
      background: #fff;
      background-image: none;
      font-family: Comfortaa;
      flex: 1;
      padding: 0 5rem;
      color: #000;
      border: none;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        order: 2;
      }
    }
    > svg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1em;
      padding: 0.3rem;

      height: 100%;
      width: 100%;
      color: #666;
      background: #fff;
      cursor: pointer;

      transition: 0.25s all ease;
    }
  }
  > section {
    background-color: #fff;
    padding: 1.5rem;
    cursor: pointer;
    display: flex;
    border-radius: 1rem;
    //box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

    :hover {
      > input {
        width: 30rem;
      }
    }

    > input {
      width: 0;
      outline: none;
      border: none;
      font-weight: 500;
      font-size: 1rem;
      transition: 0.8s;
      background: transparent;
      font-family: Comfortaa;

      @media screen and (max-width: 768px) {
        order: 1;
      }
    }

    svg {
      font-size: 1.5rem;
    }
  }
`;

export const ContainerButtom = styled.div`
  background-color: #000000;
  color: white;
  padding: 0.9rem 4rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  transition: background-color 0.5s ease;

  :hover {
    background-color: #fff;
    color: #000000;
  }

  a:hover {
    color: #000000;
  }

  a {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: 5rem;
    font-size: 18px;
  }

  @media screen and (max-width: 300px) {
    width: 4rem;
    a {
      font-size: 0.7rem;
    }
  }
`;

export const Pesquisar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0%;

  .search-bar {
    display: flex;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .search-bar input[type="text"] {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 5px;
  }

  .search-bar button {
    background-color: #000000;
    color: #fff;
    border: none;
    padding: 8px;
    border-radius: 3px;
    margin-left: 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
