import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    width: 100rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 1rem;
    border-radius: 1rem;

    @media screen and (max-width: 768px) {
    width: 20%;
  
   
  }
  `;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
`;

export const Search = styled.div`
display: flex;
justify-content: space-between;
border-radius: 20rem;
padding: 1rem;
align-items: center;
width: 20rem;
background-color: #eee;
  input{
    border:none;
    background-color: transparent;
    outline: none;
  }
`;