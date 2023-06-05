import styled from 'styled-components';

export const ContainerButtom = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;

  input[type='file'] {
    display: none;
}
    
  label {
    height: 3rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000ed;
    box-shadow: 0px 4px 7px #6565659b;
    color: white;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: .2rem;
    overflow: hidden;
    cursor: pointer;
    transition: background-color .5s ease;

    &:hover{
        background-color: #fff;
        color: #000000;
      
        
    }
  }
  
`
export const StyledDocumentList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0;

`;

export const StyledDocumentListItem = styled.li`
  margin-left: 12%;

  a{
    text-decoration: none;
    color: black;
  }
  li{
    background-color: #f5f5f5;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
  }
`;