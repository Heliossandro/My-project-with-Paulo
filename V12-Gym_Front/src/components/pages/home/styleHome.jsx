import styled from "styled-components";


export const container = styled.main` 
    margin: 0;
    padding: 0;
    background-color: #ccc;
    box-sizing: border-box;
    height: 10vh;

`
export const sideBar = styled.section`
    
`
export const containerContent = styled.section`

`

export const header = styled.header`

li{
    list-style: none;
}
a:hover{
color: white;
}
a{
    color: black;
    text-decoration: none; 
    position: relative;
    padding: 0 2rem;
    display: flex;
    gap: 2rem;
}

`
export const navbar= styled.div`

width:100%
height: 60px
max-width: 1200px
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;

.navbar .links {
    display: flex;
    gap:2rem
}

`


export const content = styled.div`


`