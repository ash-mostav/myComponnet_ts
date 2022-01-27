import {  useState } from "react";
import { BtnToggle, DDITitle, DropDown, DropDownItem, DropDownMenu, InnerDevider } from "../Serachtaginput/FilterPOP/MiniDrop.Styles";
interface IAnyArr {
  option: "Starting with" | "Have any of";
}
interface IDropMenuPost {
  options?: Array<string>;
  name: string;
  value?: string;
  editOption: (e: any) => void;
};
function DropMenu({ name, editOption }: IDropMenuPost): JSX.Element {
  const [menu, setmenu] = useState<boolean>(false);
  const [optionName, setoptionName] = useState<Array<string>>(["Starting with", "Have any of"]);
  const handleCheck = (e: any) => {

    editOption(e.target.value)
  }
  return (
    <>
      <DropDown>
        <BtnToggle
          type="button"
          onClick={() => setmenu(!menu)}
        >
          🛠
        </BtnToggle>
        {menu && (
          <DropDownMenu
            onMouseLeave={() => setmenu(!menu)}
          >
            {/* <DropDownmenuheader >Configuration</DropDownmenuheader> */}
            <fieldset className="fieldsetStyles">
              <legend>Filter Options</legend>
              {optionName?.map((item: string, index: number) => (
                <>
                  <input 
                  key={index}
                    type="radio"
                    name={name}
                    value={item}
                    id={name}
                    onChange={(e: any) => handleCheck(e)}
                    className="radiostyle"
                  />
                  <label htmlFor={item}>{item}</label> 
                    </>             
              ))}
            </fieldset>
          </DropDownMenu>
        )}
      </DropDown>
    </>
  );
};


export default DropMenu;

// {/* <DropDownItem ><InnerDevider />
// <DDITitle>Save</DDITitle>
// </DropDownItem> */}
