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
    width: 80%;
    margin: 0 auto;
    margin-top: 9rem;
    
    table {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    thead{
    }

    th{
        width: 100%;
        text-transform: uppercase;
        color: #656565;
    }


    tr:nth-child(1n){
        border-bottom: 1px solid #00000044;
        padding-bottom: 1rem;
    }

    tr{
        display: flex;
        justify-content: space-between; 
        text-align: center ;
    }

    td{
        width: 100%;
        font-size: 1.1rem;
        padding: .5rem 0; 
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icone:hover{
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #000000b0;
        border-radius: 30px;
        width: 50%;
        color: #ffffff;
        transition:all 1s;
    }

    @media screen and (max-width: 600px){
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 3rem;

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
    

    @media screen and (max-width: 330px){
        height: 1.4rem;
        width: 5rem;
    }
`