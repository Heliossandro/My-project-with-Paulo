import styled from "styled-components";

export const header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100%;
  padding: 0 2rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.205);
  background-color: #ffffff;

  h1 {
    font-size: 1.1rem;
    color: #656565;
    padding: 0 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    color: #656565;
  }

  a {
    display: flex;
    text-decoration: none;
  }

  .text {
    font-size: 2rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    h1 {
      display: none;
    }
    .text {
      font-size: 1.7rem;
    }
  }

  @media screen and (max-width: 300px) {
    h1 {
      display: none;
    }
    .text {
      font-size: 1.4rem;
    }
  }
`



export const toRight = styled.div`

 /*    @media screen and (max-width: 768px){
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
 */
`

export const hamburguer = styled.div`
    width: 2.5rem;
    height: 2rem;
    background-color: #421f63;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    padding: .4rem;
    visibility: hidden;
    cursor: pointer;

    div{
        height: .1rem;
        width: 100%;
        background-color: #fff;
    }

    @media screen and (max-width: 768px){
        visibility: visible;
    }
`