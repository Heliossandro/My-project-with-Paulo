import styled from "styled-components";

export const container = styled.main`
    width: 100%;
    display: flex;
`

export const content = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;    
`

export const containerTable = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 6rem;
    margin-left: 10%;
    

  table {
    
    width: 90%;
    border-collapse: collapse;
    margin-top: 10px;
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

    @media screen and (max-width: 600px){
        display: flex;
        align-items: center;
        justify-content: center;
        
       
    @media screen and (max-width: 400px){
        display: inline;
        justify-content: center;
        .observacao{
            display: none;
        }

    }
    }
`
export const buttonEntrar = styled.button`
    height: 1.8rem;
    width: 5.6rem;
    background-color: #000;
    border: none;
    color: #fff;
    margin: .7rem .7rem 0 0;
    border-radius: .3rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all .4s;

        :hover{
            color: #000000;
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #ffffff;
        transition: all 1s;
        cursor: pointer;
    }
    

    @media screen and (max-width: 600px){
        height: 1.4rem;
        width: 5rem;
        font-size: .8rem;
        
    }

    @media screen and (max-width: 600px){
        height: 1.4rem;
        width: 5rem;
        font-size: .8rem;
        
    }
`