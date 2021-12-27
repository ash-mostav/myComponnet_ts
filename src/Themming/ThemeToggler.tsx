
import styled,{ITheme} from "styled-components";

const Button = styled.button`
  width: 90%;
  height: 45px;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: #ffffff10;
  color: ${({ theme }) => theme.themeMode.text};
  transition: all 1s ease;
  margin-top: 5px;  
  border:none;
  outline: none;
  z-index: 1001;
  &:hover{
    ${({theme})=>theme &&`
    background-color: #ffffff50;
    `}
  }
`;

interface IThemeToggle extends Partial<ITheme> {
  thetheme:string,
  toggleTheme:(themee:string)=>void;
  
}
const ThemeToggle:React.FC<IThemeToggle>= ({ thetheme, toggleTheme }) => {
  return (
    <Button onClick={e=>toggleTheme(thetheme)}>{thetheme === "light" ? "🌛" : "🌞"}</Button>
    
  );
};

export default ThemeToggle;



// <Tooltip text={theme === "light" ? "This is Light Mode ":"This is Night Mode"}>
//     </Tooltip>