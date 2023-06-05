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
    margin-top: 4rem;
    gap: 10rem ;
    margin-left: 12%;
    
    
    @media screen and (max-width: 1280px)   {
        gap: 7rem;
        font-size: 0.9rem;
    }


    @media screen and (max-width: 1000px)   {
        justify-content: space-around;
        font-size: 0.8rem;
    }
    @media screen and (max-width: 600px)   {
        justify-content: space-around;
        font-size: 0.7rem;
    }

    @media screen and (max-width: 320px)   {
        justify-content: space-around;
        margin: 0rem;
        font-size: 0.5rem;
    }
 
a{
    color: black;
    text-decoration: none;
    
}
ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    
}

li {
    padding: 1rem;
}


li:hover{
    border-radius: 3px;
    background-color: #4747475a;
    box-shadow: #474747;
    transition: background-color .5s ease;   
}

a:hover{
    color: #00000063;
    transition: background-color .5s ease; 
}

`

export const content= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 5rem;
    

.pesquisar2{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-left: -1.3rem;
        gap: .5rem;
        font-size: 1.5rem;
        color: #858181 ;
        cursor: pointer;       
    }

    .pesquisar{
        width: 7rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        
        border-bottom: 1px solid #858181;
    }
    .pesquisar1{
        border: none;
        outline: none;
        font-size: 1.2rem;
        cursor: pointer;
    }

    .pesquisar2,input:hover{
        color: #000000;
        transition: 1s;
    }
   
    .pesquisar:hover{
        border-bottom: 1px solid #000000;
        transition: 1s;
    }
@media screen and (max-width: 600px) {

    .pesquisar2,.pesquisar1{
                
                font-size: .7rem;
            }

            .pesquisar{
                
                width: 4rem;
            }
}

@media screen and (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;

.pesquisar2,.pesquisar1{
            
            font-size: .7rem;
        }

        .pesquisar{
            
            width: 4rem;
        }
}
`
export const produto =styled.div`
` 
export const resultados =styled.div`
` 
export const Pesquisar= styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 0%;

.search-bar {
        display: flex;
        align-items: center;
        max-width: 400px;
        margin: 0 auto;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .search-bar input[type="text"] {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 5px;
    }

    .search-bar button {
    background-color: #000000;
    color: #fff;
    border: none;
    padding: 8px;
    border-radius: 3px;
    margin-left: 5px;
    cursor: pointer;
    }

        /* Estilos CSS para tornar a barra de pesquisa responsiva */
        @media only screen and (max-width: 600px) {
            .search-bar {
                max-width: 100%;
            }
        }


   
`
