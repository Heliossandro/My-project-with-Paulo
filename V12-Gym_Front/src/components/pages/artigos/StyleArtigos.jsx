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
.form{
        display: flex;
        flex-direction: column;
    }

`

export const content= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 5rem;
    

@media screen and (max-width: 600px) {

}

@media screen and (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;


}
`
export const produto =styled.div`
` 
export const resultados =styled.div`
` 

export const Pesquisar= styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;


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

