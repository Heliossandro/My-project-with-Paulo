import styled from "styled-components";
import { containerMain } from "../login/stylesLogin";

export const ContainerContainer = styled.main`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: #ccc; 
`

export const Container = styled.main`


    >section{
       
    }
    

    section{
        width: 50%;
    }
`

export const ContainerLogo = styled.div`
        display: flex;
        justify-content: center ;
        align-items: center;
    
    img{
        width: 8rem;
        height: 6rem;
    }

    `
export const ConteudoDireita = styled.section`
    width: 50%;
    height: 100%;
    border-radius: 0 1rem 1rem 0;
    div{
        width: 100%;
        height: 31rem;
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 0 1rem 1rem 0;
        opacity: .8;   
    }
    background-color: #000000;
    width: 50%;  
    
    @media screen and (max-width: 768px){
        display: none;
   
}
`

export const containerform = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    label{
        font-size: 14px;
    }

    form div{
        display: flex;
        flex-direction: column;
        margin-bottom: .8rem;
        width: 19rem;
    }

    form div > input{
        margin-top: .5rem;
        width: 100%;
        height: 2rem;
        background: #FAFAFA;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 7px;
        border: none;
        outline: none;
        padding-left: .5rem;
    }

    button{
        background-color: black;
        height: 1.8rem;
        width: 100%;
        border: none;
        color: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: .3rem;
        margin: .7rem 0 0 0;
        transition: background-color .5s ease;
        
    }

    button:hover{
        cursor: pointer;
        color: #000000;
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #ffffff;
    }
    .ErrorMessage{
        color: red;
        font-size: 0.8rem;
        width: 100%;
        margin: 0 auto;
        padding: 3rem;
        margin-top: 4rem;
        display: flex;
    }
    
   
    @media screen and (max-width: 768px){
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        
   
}
`
