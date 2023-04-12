import styled from "styled-components";


export const containerLeft = styled.section`
    width: 6rem;
    height: 100%; 
    box-shadow: 0px 0px 20px #8d8d8d;

    a{
        color: #656565;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 4rem;
        text-decoration: none;
        padding: .8rem;
        border: 1px solid red;
    }
    
    .config{
        margin: 1rem;
    }
    p{
        font-size: .8rem;
    }
    i{
        transform: scale(1.5);
        
    }
`

export const sideBar = styled.aside`
    background-color: #cbcbcb;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding-top: 4rem;
    
    i{
        transform: scale(1.5);
        
    }
    p{
        font-size: .8rem;
    }
    
`