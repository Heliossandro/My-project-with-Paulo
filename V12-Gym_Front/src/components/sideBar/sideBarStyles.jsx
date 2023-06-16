import styled from "styled-components";

export const containerLeft = styled.section`
border-radius: 1rem;
  width: 18rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;

  span{
    border-bottom:solid 1px #999;
  }

  p {
    display: flex;
    justify-content: center;
    text-align: center;
    color: #656565;
    text-decoration: none;
    margin-left: 1rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  a {
    margin-top: 1rem;
    padding: 1rem 7rem;
    width: 80%;
    color: #656565;
    display: flex;
    
    justify-content: end;
    align-items: center;

    text-decoration: none;
    transition: all 0.2s;
    border-radius: 10rem;
    :hover{
      color: #eee;
      background-color: #000000c0;
    }
  }


  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 1rem;

  }

  .divmae{
    margin-top: 10%;
  }
  @media screen and (max-width: 768px) {
    width: 3rem;

    p {
      display: none;
    }
  }
`;
