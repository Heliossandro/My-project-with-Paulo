import styled from "styled-components";

export const Container = styled.main` 
  display: flex;
`;

export const Content = styled.section`
width: 90%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ContainerTable = styled.section`
  
  display: flex;
  flex-direction: column;
  
  padding: 2rem;
  margin-top: 3rem;
  border-radius: 1rem;
  background-color: #fff;
  
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
    
  }

  @media screen and (max-width: 1300px) {
    tr,
    td,
    th,p,h2 {
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

export const Main=styled.div`

`;

export const BodyTable = styled.div``;

export const FirstSection = styled.div`
  width:100%;
  display: flex;
 justify-content: space-between;

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
      width: 1rem;
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

     input {
      width: 15rem;
      outline: none;
      border: none;
      font-weight: 500;
      font-size: 1rem;
      transition: 0.8s;
      background: transparent;
      font-family: Comfortaa;

    }
    
    svg {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    order: 1;
    width: 5rem;
    display: none;
    

  }
`;

export const ContainerButtom = styled.div`
  background-color: #ffffff;
  padding: 0.9rem 4rem;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 1rem;
  box-shadow: 08px 9px 20px -10px #4b4b4b;
  transition: 1s;
  :hover {
    background-color: #e4e4e4;

  }


  a {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: 2rem;
    height: 1rem;
    border-radius:.5rem;
   font-size: .9rem;
  }

  @media screen and (max-width: 300px) {
   
  }
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
`;