import styled,{keyframes} from"styled-components";

const spin =keyframes`
to{
    transform:rotate(360deg);
}
`
export const Loading=styled.div`
width:3rem;
height:3rem;
border:5px solid #ccc;
border-radius:50%;
border-top-color:${({theme})=>theme.colors};
animation:${spin} 1s linear infinite; 

`