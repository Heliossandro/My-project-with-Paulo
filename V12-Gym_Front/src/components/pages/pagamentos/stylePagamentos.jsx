import styled from "styled-components";

export const container = styled.main`
    width: 100%;
    display: flex;
`

export const content = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const containerForm = styled.section`
    width: 50%;
    margin: 0 auto;
    padding: 3rem;
    

    @media screen and (max-width: 1000px) {
        width: 70%;
        padding: 2rem;

    }

    @media screen and (max-width: 600px) {
        width: 80%;
        padding: 2rem;

    }

    form{
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        box-shadow: 2px solid #0000;
    }

    input, textarea{
        background-color: #65656568;
        outline: none;
        border: 0px solid #00000030;
        font-size: .9rem;
        box-shadow: 2px solid #000000;
    }

    input:focus, textarea:focus{
        border: 0px solid #0000006e;
    }

`

export const line1 = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input{
        width: 20rem;
    }
`

export const line2 = styled.div`
    gap: 1rem;

    input{
        width: 15rem;
    }
`

export const line4 = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 1rem;


    textarea{
        border-radius: .3rem;
        width: 20rem;
        max-width: 100%;
        max-height: 4rem;
        padding: 1rem;
    }

    div{
        text-align: right;
    }

    button{
        margin-top: 1rem;
        border: none;
        background-color: transparent;
        box-shadow: 0px 4px 7px #6565659b;
        border-radius: .3rem;
        width: 8rem;
        height: 2rem;
        transition: all .2s;
        font-size: .9rem;
        text-transform: uppercase;
        font-weight: bold;
        background-color: #ffffff;
        color: #000000;

    }

    button:hover{
        color: #fff;
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #000;
        transition:all 1s;
        cursor: pointer;
    }
`