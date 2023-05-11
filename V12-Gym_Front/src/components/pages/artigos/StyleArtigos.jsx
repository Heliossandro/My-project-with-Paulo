import styled from "styled-components";

export const container = styled.main`
    display: flex;
    width: 100%;
  
`
export const containerContent = styled.section`
display: flex;

`
export const containerOpcoes= styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 4rem;
    gap: 15rem ;

    @media screen and (max-width: 1280px)   {
        gap: 7rem;
        font-size: 0.9rem;
    }


    @media screen and (max-width: 1000px)   {
        justify-content: space-around;
        gap: 1rem;
        font-size: 0.8rem;
    }

    @media screen and (max-width: 300px)   {
        justify-content: space-around;
        margin-left: 1.5rem;;
        gap: 1rem;
        font-size: 0.5rem;
    }
    @media screen and (max-width: 250px)   {
        justify-content: space-around;
        margin-left: 1.5rem;;
        gap: 0.5rem;
        font-size: 0.4rem;
        
    }
 
a{
    color: black;
    text-decoration: none;
    
}
div:hover{
    padding: .5rem;
    border-radius: 5px;
    background-color: #111111;
    box-shadow: 0px 4px 7px #6565659b;
    transition: all 1s;
}
a:hover{
    color: #fff;
    padding: .5rem;
    transition: all 250ms;
}

@media screen and (max-width: 390px ){
    gap: 10px;
}

`

export const content= styled.div`

`