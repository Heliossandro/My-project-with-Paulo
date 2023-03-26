import styled from 'styled-components'

export const containerContainer = styled.main`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}   
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ccc;
    transition: all 1s;
`

export const containerMain = styled.main`

    display: flex;
    justify-content: space-between;
    width: 50rem;
    background-color: #fff;
    box-shadow: 4px 1px 20px 8px rgba(0, 0, 0, 0.30);
    border-radius: 1rem;

    @media screen and (max-width: 600px){
    width: 90%;
}
`

export const text = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    align-items: center;

    @media screen and (max-width: 600px){
        height: 80vh;
        width: 100%;
        margin-top: 0;
}
`

export const containerImage = styled.section`
    
    width: 50%;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 0 1rem 1rem 0;
    }

    @media screen and (max-width: 600px){
        display: none;
   
}
`

export const containerLogo = styled.div`
    width: 15rem;
    height: 10rem;
    
    img{
        width: 100%;
        height: 100%;
    }

    p{
        font-size: 1.2rem;
        color: #00000098;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
      
    }
`


export const containerform = styled.div`
    margin-top: 4rem;
    form{
        width: 100%;
    ;
    }
    form > div{
        display: flex;
        flex-direction: column;
        width: 20rem;
        margin: .5rem 0;
    }

    input{
        margin-top: .5rem;
        height: 2rem;;
        background: #FAFAFA;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 7px;
        border: none;
        outline: none;
        padding-left: .5rem;
    }


    section{
        display: flex;
        justify-content: space-between;
    }

    a{
        font-size: .8rem;
        
    }

`

export const buttonEntrar = styled.button`
    height: 1.8rem;
    width: 5rem;
    background-color: #000;
    border: none;
    color: #fff;
    margin: .7rem .7rem 0 0;
    border-radius: .3rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :hover{
        cursor: pointer;
    }
`

export const buttonCriarConta = styled.button`
background-color: #fff;
    height: 1.8rem;
    width: 5rem;
    border: none;
    color: #000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: .3rem;
    margin: .7rem 0 0 0;

    :hover{
        cursor: pointer;
    }
`