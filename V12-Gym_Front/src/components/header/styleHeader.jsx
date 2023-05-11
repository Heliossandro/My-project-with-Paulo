import styled from "styled-components";

export const header = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    width: 100%;
    padding: 0 2rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.271);  
    span{
        box-shadow: 6px black;  
    }   
    h1{
        font-size: 1.1rem;
        color: #656565;
        
    }
    div, span{
        color: #656565;
        
    }    
    
    > div > span{
        font-size: 2rem;
        text-transform: uppercase;
        
    }
    @media screen and (max-width: 500px) {
        
           
        span, h1{
            display: none;
        }

    }
    @media screen and (max-width: 350px)   {
    justify-content: right; 
    
    h1{
        display: none;
    }
    .icon{
        
    }
}
    
`

export const toRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    a{
        text-decoration: none;
        display: flex;
        gap: .8rem;
    }
`