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
    margin-top: 4rem;
    
    table {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    thead{
    }

    th{
        text-transform: uppercase;
    }


    tr:nth-child(1n){
        border-bottom: 1px solid #00000044;
        padding-bottom: 1rem;
    }

    tr{
        display: flex;
        justify-content: space-between;   
    }

    td{
        font-size: 1.1rem;
        padding: .5rem 0; 
        display: flex;
        align-items: center;
        justify-content: center;
    }


`

export const containerButtom = styled.div`

    background-color: #000;
    margin-top: 1rem;
    width: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .2rem;
    overflow: hidden;

    :hover{
        background-color: #000000dd;
    }
    a{
        padding: .5rem .7rem;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 1.1rem;
        color: #fff;
        text-decoration: none;
    }

`