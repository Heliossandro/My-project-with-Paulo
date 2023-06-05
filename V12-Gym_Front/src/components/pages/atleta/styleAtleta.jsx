import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
        margin-left: 12%;
  table {
      
    width: 90%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  th,
  td {
    padding: 5px;
    border-bottom: 1px solid #ccc;
    text-align: center; /* Centraliza o conteúdo horizontalmente */
    vertical-align: middle; /* Centraliza o conteúdo verticalmente */
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

    .pesquisar2,
    .pesquisar1 {
      font-size: 18px;
    }

    .pesquisar {
      width: 5rem;
    }

    .id {
      display: none;
    }

    .id1 {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .id {
      display: none;
    }

    .id1 {
      display: none;
    }

    th,
    tr,
    td {
      font-size: 18px;
    }
  }

  .icone:hover {
    box-shadow: 0px 4px 7px #6565659b;
    background-color: #000000b0;
    border-radius: 30px;
    width: 50%;
    color: #ffffff;
    transition: all 1s;
  }

  @media screen and (max-width: 400px) {
    th,
    tr,
    td {
      font-size: 0.7rem;
    }

    .pesquisar2 {
      margin-top: 2rem;
      font-size: 0.7rem;
    }

    .pesquisar {
      width: 5rem;
    }
    .pesquisar1 {
      font-size: 0.7rem;
    }
  }

  .icone:hover {
    box-shadow: 0px 4px 7px #6565659b;
    background-color: #000000b0;
    border-radius: 30px;
    width: 50%;
    color: #ffffff;
    transition: all 1s;
  }
`;

export const BodyTable = styled.div``;

export const ContainerButtom = styled.div`
  background-color: #000000;
  color: white;
  margin-top: 1rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  overflow: hidden;
  box-shadow: 0px 4px 7px #6565659b;
  transition: background-color 0.5s ease;

  a:hover {
    background-color: #fff;
    color: #000000;
  }

  a {
    padding: 0.3rem 0.3rem;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.9rem;
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
`


export const Pesquisar= styled.div`
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

        /* Estilos CSS para tornar a barra de pesquisa responsiva */
        @media only screen and (max-width: 600px) {
            .search-bar {
                max-width: 100%;
            }
        }

`