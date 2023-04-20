import styled from "styled-components";

export const container = styled.main`
    width: 100%;
    height: 100vh;
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
    border-radius: .3rem;
    box-shadow: 0px 0px 10px #00000030;

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input, textarea{
        outline: none;
        border: 1px solid #00000030;
        font-size: .9rem;
    }

    input:focus, textarea:focus{
        border: 1px solid #0000006e;
    }

`

export const line1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const line2 = styled.div`
    display: flex;
    gap: 1rem;

    input{
        width: 20rem;
    }
`

export const line3 = styled.div`
    display: flex;
    gap: 1rem;

    > div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }

    >div>div{
        display: flex;
        gap: .5rem;
    }

    >input{
        width: 16.5 rem;
    }
`

export const line4 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    textarea{
        max-width: 100%;
        max-height: 4rem;
        padding: 1rem;
    }

    div{
        text-align: right;
    }

    button{
        border: none;
        background-color: transparent;
        box-shadow: 1px 1px 10px #00000030;
        border-radius: .3rem;
        width: 10rem;
        height: 2rem;
        transition: all .2s;
        font-size: .9rem;
        text-transform: uppercase;
        font-weight: bold;
        background-color: #000;
        color: #fff;
    }

    button:hover{
        background-color: #000000e4;
        cursor: pointer;
    }
`