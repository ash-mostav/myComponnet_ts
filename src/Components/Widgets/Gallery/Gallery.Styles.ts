import styled,{css} from "styled-components";
import { ProgressBarPercentage } from "../Snackbaar/Snackbar";

const Horizental=css`
@media screen and (min-width: 600px) {   
      grid-row: span 2 / auto;  
  }
`;
const Vertical=css`
@media screen and (min-width: 600px) {   
    grid-column: span 2 / auto;
  }
`;
  
  
 export const PhotoGrid=styled.div `
 width:70%;
    height: 100%;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 240px;
    margin:2%;
    border:10px dashed #fcd00720;
    border-radius:4px;
    @media screen and (min-width: 600px) {
  .card-tall {
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
  }
}
`

export const PhotoCard=styled.div`
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: transform 200ms ease-in-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter:grayscale(70%);
  &:hover {
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
      rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
      filter:grayscale(0%);
    transform: translateY(-1px) scale(1.1);
  }
 
`