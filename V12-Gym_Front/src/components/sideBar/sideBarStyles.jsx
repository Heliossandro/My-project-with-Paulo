import styled from "styled-components";


export const containerLeft = styled.section`
    position: fixed;
    width: 5.5rem;
    height: 100vh;
    align-items: center;
    background-color: #cbcbcb;
    
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
    @media screen and (max-width: 768px) {    
        width: 3rem;

        p{
            display: none;
        }
    }
`

export const sideBar = styled.aside`
  width: 5.5rem;
  height: 89.33vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem ;
  background-color: #cbcbcb;
  
  

  i {
    transform: scale(1.5);
  }
  gap: 50px;
  padding-top: 4rem;

  i {
    transform: scale(1.5);
  }
  p {
    font-size: 0.8rem;
  }

  a {
    padding: 0.5rem 0;
  }

  a:hover i,
  p {
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

  a,
  i,
  p::before {
    transition: 250ms;
  }

  p {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    width: 2.5rem;
    gap: 35px;
  }
`;
