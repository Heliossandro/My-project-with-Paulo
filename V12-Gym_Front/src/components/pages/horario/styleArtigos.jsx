import styled from "styled-components";

export const container = styled.main`
  
`

export const content = styled.section`
 
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


`
export const containerContent=styled.section`

`