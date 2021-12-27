import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 15px;
  opacity: 1;
  padding: 11px;
  margin-bottom: 22px;
  color: #000;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #f2f2f2;
  z-index: 1;
  &::placeholder {
    outline: none;
    font-size: 1.3rem;
    font-weight: 600;
  }

  &:focus ~ label {
    color: #fcd007;
    font-size: 1.3rem;
    font-weight: 600;
    top: 1rem;
    left: 5px;
  }
`;
export const ErrorMsg = styled("span")`
  color: red;
  margin: -14px 0 14px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 12px;
`;
export const InputGroup = styled("div")`
  position: relative;
  margin-bottom: 25px;
  label {
    display: block;
    position: absolute;
    &:before,
    &:after {
      position: absolute;
      content: "";
      height: 2px;
      bottom: lpx;
    }
  }
`;

export const Styledlabel = styled("label")`
  position: absolute;
  font-size: 1.1rem;
  font-weight: 700;
  color: #000;
  top: 7px;
  left: 15px;
  pointer-events: none;
  transition: all ease 300ms;
  padding: 7px;
  border-radius: 10px 10px 0 0;
  background: #f2f2f2;
`;

export const StyledInputForm = styled(Input)`
  width: 100%;
  z-index: 1;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #f2f2f2;
  font-size: 1.4rem;
  font-weight: 600;
  text-indent: 4.3rem;
  &:focus ~ label {
    color: #000;
    font-size: 1.1rem;
    font-weight: 600;
    top: -2rem;
    left: 15px;
  }
  &:focus {
    text-indent: 0.5rem;
    transition: text-indent 0.3s ease;
  }
`;
