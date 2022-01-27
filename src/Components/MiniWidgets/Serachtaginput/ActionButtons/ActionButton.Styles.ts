import styled from "styled-components";
import { FlexColumn } from "../../../../GlobalStyledCom";

export const IconsConatainer = styled(FlexColumn)`
  height: auto;
  width: auto;
`;
export const CloseIcon = styled("span")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 19px;
  font-size: 1.2rem;
  font-weight: 700;
  background: #fff;
  cursor: pointer;
  background: #242424;
  &:hover {
    background: ${({ theme }) => theme.colors};
  }
  border-radius: 0px 0px 3px 3px;
`;
export const AddIcon = styled(CloseIcon)`
  border-radius: 3px 3px 0 0;
`;
