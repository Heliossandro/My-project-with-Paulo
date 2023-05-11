import styled from "styled-components";

export const container = styled.main`
    width: 100%;
    display: flex;
`

export const content = styled.section`
    height: 100vh;
`

export const containerTable = styled.div`
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
        width: 100%;
        color: #656565;
    }


    tr:nth-child(1n){
        border-bottom: 1px solid #00000044;
        padding: .5rem 0 .5rem 0;
    }

    tr{
        display: flex;
        justify-content: space-between;
        text-align: center;
    }

    td{
        font-size: 1.1rem;
        padding: .5rem 0; 
        width: 100%;
    }

    td > div{
        width: 15rem;
        margin: 0 auto;
        justify-content: center;
        display: flex;
        gap: .5rem;
    }

    td > div > a{
        text-decoration: none;
        border-radius: .2rem;
        font-size: 1rem;
    }

`

export const btn1 = styled.a`
    background-color: #000000f0;
    color: #fff;
    width: 5rem;
    
    transition: all .4s;
    

    :hover{
        color: #000;
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #fff;
        transition: 1s;
    }
`

export const btn2 = styled.a`
    color: #000;
    width: 5rem;
    box-shadow: 0px 4px 7px #6565659b;
    
    :hover{
        color: #fff;
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #000;
        transition: 1s;
    }
`
