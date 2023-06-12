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
        width: 7rem;
        height: 6rem;
    }

    `
export const ConteudoDireita = styled.section`
    width: 50%;
    height: 100%;
    border-radius: 0 1rem 1rem 0;
    div{
        width: 100%;
        height: 100%;
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 0 1rem 1rem 0;
        opacity: .8;   
        object-fit: cover;
    }
    background-color: #000000;
    
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

    form >div  div{
        display: flex;
        flex-direction: column;/* 
        margin-bottom: .8rem; */
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

    form > div > div{
        min-height: 1.7rem;
        display: flex;
        justify-content: center;
    }

    form > div > div > span{
        height: 100%;
        font-size: .8rem;
        color: red;
    }

    button:hover{
        cursor: pointer;
        color: #000000;
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #ffffff;
    }
   
    @media screen and (max-width: 768px){
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
}
`

export const containerButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    button{
        background-color: #000000;
        border: none;
        color: #ffffff;
        padding: .5rem 1rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: .3rem;
        transition: background-color .5s ease;
        
    }

    a{
        padding: .5rem 2rem;
        background-color: #000000;
        text-decoration: none;
        color: #fff;
        border-radius: .3rem;
    }
`
