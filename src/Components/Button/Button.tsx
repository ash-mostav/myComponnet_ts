
import { LinkProps } from "react-router-dom";
import { CustomeButton, ICustomeButton, LinedA } from "./Button.Styles";


interface IButtonProps extends ICustomeButton  {
  text?: string;
  onClick?: () => void; 
  style?: React.CSSProperties; 
  className?: string ; 
  to?:string
}
export const Button = (props: IButtonProps) => {
  return (
    <CustomeButton as={props.to?"":"button"}
    {...props}    
    >
      {props.text}
    </CustomeButton>
  );
};
export const RiButton = (props: IButtonProps) => {
  return (
    <LinedA
    {...props}    
    >
      {props.text}
    </LinedA>
  );
};

export default Button;
