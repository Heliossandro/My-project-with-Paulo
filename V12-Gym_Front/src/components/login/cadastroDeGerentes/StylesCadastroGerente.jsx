import styled from "styled-components";

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
`

export const Container = styled.main`
    display: flex;

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
    border-radius: 0 1rem 1rem 0;
    div{
        width: 100%;
        height: 31rem;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover ;
        border-radius: 0 1rem 1rem 0;   
    }
`

export const containerform = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    width: 50%;

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
        transition: all .4s;
    }
`
