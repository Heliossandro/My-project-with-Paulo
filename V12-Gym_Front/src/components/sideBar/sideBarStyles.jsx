import styled from "styled-components";


export const containerLeft = styled.section`
    width: 5rem;
    heigth: 100%;
    border-right: 1px solid #cbcbcb; 

    a{
        color: #656565;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 4rem;
        text-decoration: none;
    }
`

export const sideBar = styled.aside`
    background-color: #cbcbcb;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding-top: 5rem;

    p{
        font-size: .8rem;
    }
`