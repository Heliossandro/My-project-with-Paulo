import styled from "styled-components";


export const containerLeft = styled.section`
    width: 5.5rem;
    height: 85%;
    border-right: 1px solid #cbcbcb; 
    box-shadow: 0px 0px 20px #8d8d8d;
    align-items: center;

    
  
    p{
        color: #656565;
         text-decoration: none;
    }
    a{
        color: #656565;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-decoration: none;
        transition: all .2s;
        padding: 3rem;
    }
    

    a:hover i{
        color: #070707;
    }

    .config{
        margin: 1rem;
    }
    .p{
        font-size: .8rem;
    }
    i{
        transform: scale(1.5);
    }
    @media screen and (max-width: 600px) {
        display:none;      
    }
`

export const sideBar = styled.aside`
    background-color: #cbcbcb;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.3rem;
    padding-top: 4rem;

    i{
        transform: scale(1.5);
    }
    p{
        font-size: .8rem;
    }

    a{
        padding: .5rem 0;
    }

    a:hover i,p{
        color: #070707;
        font-size: 1.2rem;
        transition: 250ms;
    }

    a:hover {
        width: 100%;
        background-color: #868686;
        box-shadow: 0px 4px 7px #6565659b;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }

    p{
        font-size: .8rem;
    }
    @media screen and (max-width: 600px) {
        display:none;
    }
    .icone:hover{
        
        background-color: #000000b0;
        border-radius: 30px;
        width: 50%;
        color: #ffffff;
        transition: 1s;
    }
`