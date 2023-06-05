import styled from "styled-components";

export const container = styled.main`
  width: 100%;
  display: flex;
`;

export const content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
 margin-top: 3rem;
`;

export const containerForm = styled.section`
  color: red;
  font-size: 0.8rem;
  width: 100%;
  margin: 0 auto;
  padding: 3rem;
  margin-top: 4rem;
  margin-left: 12%;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    box-shadow: 2px solid #0000;
  }

  input,
  textarea {
    background-color: #f2f2f2;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  input:focus,
  textarea:focus {
    border-color: #000000;
  }
`;

export const line1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
  }
`;

export const line2 = styled.div`
  gap: 1rem;

  input {
    width: 100%;
  }
`;

export const line4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  textarea {
    border-radius: 4px;
    width: 100%;
    max-width: 100%;
    max-height: 4rem;
    padding: 1rem;
    resize: vertical;
  }

  div {
    text-align: right;
  }

  button{
        margin-top: 1rem;
        border: none;
        background-color: transparent;
        box-shadow: 0px 4px 7px #6565659b;
        border-radius: .3rem;
        width: 8rem;
        height: 2rem;
        transition: all .2s;
        font-size: .9rem;
        text-transform: uppercase;
        font-weight: bold;
        background-color: #ffffff;
        color: #000000;
        cursor: pointer;

    }

    button:hover{
        color: #fff;
        box-shadow: 0px 4px 7px #6565659b;
        background-color: #000;
        transition:all 1s;
       
    }
`
    export const Formik = styled.form`
    `
    export const Field = styled.input`
    `
    
    export const ErrorMessage = styled.span`
    `
