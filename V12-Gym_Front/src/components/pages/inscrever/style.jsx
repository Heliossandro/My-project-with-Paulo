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
    border-radius: .3rem;
    box-shadow: 0px 0px 10px #00000030;

    @media screen and (max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        padding: 2rem;
        box-shadow: 0px solid #000000;
        box-shadow: 0px 0px 0px #00000030;

    }
    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: space-around;
        height: 80%;
       width: 100%;
        padding: 2rem;
        font-size: .8rem;
        box-shadow: 0px solid #000000;
        box-shadow: 0px 0px 0px #00000030;

    }

    

    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        box-shadow: 2px solid #0000;
    }

    input, textarea{
        outline: none;
        border: 1px solid #00000030;
        font-size: .9rem;
        box-shadow: 2px solid #000000;
    }

    input:focus, textarea:focus{
        border: 1px solid #0000006e;
    }

   
`

export const line1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 600px) {
        justify-content: center;
        flex-direction: column;
        width: 100%;
        font-size: .8rem;

    }
`

export const line2 = styled.div`
    display: flex;
    gap: 1rem;

    input{
        width: 20rem;
    }
    @media screen and (max-width: 600px) {
        justify-content: center;
        flex-direction: column;
        width: 100%;
        font-size: .8rem;

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
    @media screen and (max-width: 600px) {
        width: 100%;
        font-size: .8rem;

        

    }
`

export const line4 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 600px) {
        justify-content: center;
        flex-direction: column;
        width: 100%;
        font-size: .8rem;
    }

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
        box-shadow: 1px 1px 15px #00000030;
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
        color: #fff;
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #000;
        transition:all 1s;
        cursor: pointer;
    }

    
`