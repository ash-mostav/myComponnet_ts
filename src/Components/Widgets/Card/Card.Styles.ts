import styled from "styled-components";

export const StyledCard=styled.article`
width:90vw;
max-width:300px;
background: #fff;
border-radius:0.25rem;

img{
    width:100%;
    border-radius:0.25rem 0.25rem 0 0;
}
footer{
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 2rem;
    h4{
        text-transform:capitalize;
        color:#000;
        &::before{
            content: "Name : ";
            color:#ff0000;
        }
    }
 
    p{
        color:#000;
        font-weight:700;
    }
}
&:hover{
    box-shadow:0 3px 3px #000; 
    cursor: pointer;
    background: #f2f2f2;
}
transition:all 0.25s ease-in-out;
@media(min-width:768px){
    max-width:600px;
}
`