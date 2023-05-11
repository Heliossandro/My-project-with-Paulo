import styled from "styled-components";

export const container = styled.main`
    width: 100%;
    display: flex;
`

export const content = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (max-width: 600px) {
        width: 100%;
        font-size: .8rem;
    }    
`

export const containerTable = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 4rem;

    .pesquisar{
        color: #65656550;
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid #00000044;
        border: none;
        width: 5rem;
        margin-bottom: 1rem;
    }
    .pesquisar1{
        border: none; 
    }
    
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

        @media screen and (max-width: 600px) {
        .id{
            display: none;
        }
    }
    }

    td{
        width: 100%;
        font-size: 1.1rem;
        padding: .5rem 0; 
        display: flex;
        align-items: center;
        justify-content: center;
       
        @media screen and (max-width: 1000px) {
            width: 100%;
            display: flex;
            align-items: center;
        .id{
            display: none;
        }
        .email{
            margin-right: .7rem;
        
        }
}

        @media screen and (max-width: 600px) {
            width: 100%;
            display: flex;
            font-size: .9rem;
            width: 100%;
        .id{
            display: none;
        }
        .email{
            margin-right: .7rem;
        
        }
    }

    }
    .icone:hover{
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #000000b0;
        border-radius: 30px;
        width: 50%;
        color: #ffffff;
        transition: all 1s;
    }



`

export const containerButtom = styled.div`

    background-color: #3a3a3a;
    margin-top: 1rem;
    width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .2rem;
    overflow: hidden;
    box-shadow: 0px 4px 7px #6565659b;
    

    a:hover{
        background-color: #fff;
        color: #000000;
        transition:all 1s;
        
    }

    a{
        padding: .3rem .3rem;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: .9rem;
        color: #fff;
        text-decoration: none;
    }
    @media screen and (max-width: 600px) {
        width: 5rem;
        font-size: .8rem;
    }

`
