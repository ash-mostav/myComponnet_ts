import styled, { ITheme } from "styled-components";
import { useEffect, useState } from "react";
import { Colors } from "./Themes";
import ThemeToggle from "./ThemeToggler";



const ThemePicker = styled.svg<{theColor:string}>`
  width: 25px;
  height: 25px;
  background: ${({theColor}) => theColor};
  border-radius: 50%;
  cursor: pointer;
  margin: 5px;  
`;

const InnerContainer = styled.div<{picker:boolean}>`
  left: ${({ picker }) => (picker ? "0px" : "-100px")};
  position: absolute;
  transition: all 0.25s ease;
  background: #242424;
  /* background:${({ theme }) => theme.innerback}; */
  width: 100px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  border-radius: 0 0 10px 0;
  z-index: 199;
`;
const SpotBox = styled.div`
  /* background:${({ theme }) => theme.innerback}; */
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const OuterContainer = styled.div`
  position: absolute;
  position: sticky;
  top: 5%;
  transition: all 0.25s ease;
  background: inherit;
  width: auto;
  height: auto;
  display: flex;
  z-index: 199;
  margin-top: 1%;
`;
const PickerContainer = styled("button")<{picker:boolean}>`
  width: 45px;
  height: 45px;
  background: #242424;
  /* background:${({ theme }) => theme.innerback}; */
  border-radius: 0 10px 10px 0;
  color: #fff;
  font-weight: Bold;
  cursor: pointer;
  outline: none;
  border: none;
  position: absolute;
  left: ${({ picker }) => (picker ? "0" : "100px")}; 
  z-index: 199;
  transition: all 0.25s ease;
`;
////////////////////// Component start
interface ICPicker extends ICPickerProps{
  thecolor: string;
  toggleColor: (thecolor:string)=>void|undefined;
  ttheme: string;
  thtogle: ()=>void; 
}
interface ICPickerProps{
  theme?:string;
}

/////////////////////////
const CPicker:React.FC<ICPicker> = ({ thecolor, toggleColor, ttheme, thtogle }) => {
  const Tcolors = Colors;
  const [picker, setpicker] = useState<boolean>(false);
  const showPicker = () => setpicker(!picker);
   
  const handlecolors = (colorval:string) => {
    toggleColor(colorval);
  };
  useEffect(() => {
    const localThemecolor = window.localStorage.getItem("color")||"#000";
    toggleColor(localThemecolor);
  }, [thecolor]);
  return (
    <>
      <OuterContainer>
        <PickerContainer onClick={e => showPicker()} picker={!picker}>
          Theme
        </PickerContainer>
        <InnerContainer picker={picker}>
          <ThemeToggle thetheme={ttheme} toggleTheme={thtogle}  />
     
          <SpotBox>
            {Object.values(Tcolors).map((i) => (
              <ThemePicker
                key={i}
                theColor={i}
                onClick={e => {
                  handlecolors(i);
                  showPicker();
                }}
              />
            ))}
          </SpotBox>
        </InnerContainer>
      </OuterContainer>
    </>
  );
};



export default CPicker;

{/* <ContrastRange tcon={tcon} tcontogle={tcontogle}  /> ,tcontogle,tcon*/}