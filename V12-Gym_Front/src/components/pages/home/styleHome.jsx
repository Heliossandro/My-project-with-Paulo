import styled from "styled-components";



export const container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
`

export const containerContent = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

`

export const header = styled.header`

    display: flex;
    justify-content: right;
    align-items: center;
    height: 4rem;
    width: 100%;
    padding: 0 2rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.271);  

    h1{
        font-size: 1.1rem;
        color: #656565;
        padding: 0 .5rem;
    }
    div{
        display: flex;  
    }

    i{
        color: #656565;
        transform: scale(1.3);

    }
    a{
       display: flex;
       text-decoration: none;
    }



`

export const content = styled.div`


`