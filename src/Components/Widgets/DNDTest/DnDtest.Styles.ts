import styled from "styled-components";
interface IStylesProps {
  dragged?: boolean;
  className?: string;
}
export const Container = styled.div`
  height: 90vh;
  width: 80vw;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;

  .dragged {
    background-color: #f2f2f2;
    /* opacity: 1; */
    cursor: grab;
  }
  .dragged-over {
    background: #f2f2;
  }

  /* .done { 
    background:green;
    background:green;
 } */
`;
export const SmallBox = styled.div`
  width: 36%;
  box-shadow: -3px 3px 5px 2px #f2f2f2;
  .task-done {
    background: green;
  }
  .task-pending {
    background: ${({ theme }) => theme.colors};
  }
`;
export const TrashCan = styled.div`
  width: 20%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 7rem;
  box-shadow: -3px 3px 5px 2px #f2f2f2;
`;
export const StyledTask = styled.div<IStylesProps>`
  border: 1px solid white;
  margin: 10px;
  box-shadow: 1px 3px 5px gray;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #f2f2f25a;
  }
`;

// .task {
//   border: 1px solid white;
//   margin: 10px;
//   box-shadow: 1px 3px 5px gray;
//   height: 8vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* background: #6c757d; */
//    background:${({theme})=>theme.colors};
// }
