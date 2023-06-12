import styled from "styled-components";



export const content = styled.section`
 
`

export const containerTable = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 6rem;
    margin-left: 10%;

  table {
    width: 90%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  th,
  td {
    padding: 5px;
    border-bottom: 1px solid #ccc;
    text-align: center; 
    vertical-align: middle; 
  }

  th {
    background-color: #f2f2f2;
  }
    @media screen and (max-width: 600px){
        display: flex;
        align-items: center;
        justify-content: center;
        
        table,td{
            font-size: .9rem;
        }
       

    }

    @media screen and (max-width: 400px){
        display: inline;
        align-items: center;
        justify-content: center;
        width: 90%;
        padding: 2rem;
        
       
        table,td{
            font-size: .6rem;
        }
       

    }

`
export const buttonEntrar = styled.button`
    height: 1.8rem;
    width: 5.6rem;
    background-color: #000;
    border: none;
    color: #fff;
    margin: .7rem .7rem 0 0;
    border-radius: .3rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: background-color 1.5s ease;

        :hover{
            color: #000000;
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #ffffff;
        cursor: pointer;
    }
    

    @media screen and (max-width: 600px){
        height: 1.4rem;
        width: 5rem;
        font-size: .8rem;
        
    }

    @media screen and (max-width: 400px){
        height: 1.2rem;
        width: 4.5rem;
        font-size: .8rem;
        
    }
`

export const containerContent=styled.section`

`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 50%;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 6px;
  

  h2 {
    font-size: 18px;
    margin: 0;
  }

  button {
    background-color: transparent;
    border: none;
    color: #888;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #000000;
    }
  }
`

export const ModalBody = styled.div`
  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    background-color: #000000;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover {
      background-color: #7c7c7c;
    }
  }
`
