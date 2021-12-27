import { InputHTMLAttributes } from "react";
import { StyledInputForm, InputGroup, Styledlabel } from "./AdvancedInput.Styled";

// type InputProps = {
//   placeholder?: string;
//   name?: string;
//   label?: string;
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function AdvancedInput({ name, placeholder, value, onChange, label }: InputProps) {
  return (
    <>

      <InputGroup>
        <StyledInputForm
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {label && <Styledlabel>{label}</Styledlabel>}
      </InputGroup>

    </>
  );
}

export default AdvancedInput;