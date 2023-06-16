import styled from "styled-components";

export const container = styled.main`
  width: 100%;
  display: flex;
`;

export const content = styled.section`
  width: 100%;
  height: 100%;
 
 @media screen and (max-width: 768px){
  padding-top: 1rem;
 } 
`

export const containerForm = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 3rem;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 5px #00000030;
  margin-top: 8rem;
  margin-left: 12%;

  span {
    color: red;
    font-size: 0.8rem;
  }

  .span1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 2px solid #0000;
  }

  input,
  textarea,
  select {
    outline: none;
    border: 1px solid #00000030;
    font-size: 0.9rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    box-shadow: 2px solid #000000;
  }
  
  input:focus,
  textarea:focus {
    border: 1px solid #0000006e;
  }
  
    @media screen and (max-width: 500px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      padding: 2rem;
      margin-top: 4rem;
      box-shadow: 0px 0px 0px #00000030;
    }
  `
  

export const line1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 0.8rem;
    margin-bottom
  }

  @media screen and (max-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 0.8rem;
  }
`

export const line2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const line3 = styled.div`
  display: flex;
  gap: 1rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  > div > div {
    display: flex;
    gap: 0.5rem;
  }

  > input {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const line4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .ipt {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

  input {
    display: flex;
    padding-left: 0.3rem;
    border-radius: 0.3rem;
    width: 100%;
    height: 2.4rem;
  }

  textarea {
    max-width: 100%;
    max-height: 4rem;
    padding: 1rem;
    resize: none;
  }

  div {
    text-align: right;
  }

  button {
    border: none;
    background-color: transparent;
    box-shadow: 1px 1px 15px #00000030;
    border-radius: 0.3rem;
    width: 10rem;
    height: 2rem;
    transition: all 0.2s;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    color: #fff;
    box-shadow: 0px 4px 7px #6565659b;
    background-color: #000;
    transition: all 1s;
  }

  button:hover {
    background-color: #fff;
    color: #000000;
    transition: all 1s;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 0.8rem;
select{ 
  font-size: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
  }

  @media screen and (max-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 0.8rem;

    input {
      width: 5rem;
    }

    textarea {
      max-width: 11rem;
      max-height: 4rem;
      padding: 1rem;
      border-radius: 0.3rem;
    }

    button {
      width: 7rem;
      font-size: 0.8rem;
      height: 2rem;
    }

    div{
      flex-direction: column;
    }
  }
  `


export const form= styled.form`
display: flex;
width: 100%;



`
export const inputContainer= styled.div`
`
export const button= styled.div`
`

