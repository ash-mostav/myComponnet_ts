import React, { useState } from "react";
import styled from "styled-components";
import { FlexColumn } from "../Global.Styles";
import { useEffect } from "react";

// const ColorBox = styled.div`
//   background-color: ${({ currentColor }) => currentColor};
//   margin: 0 auto 16px;
//   height: 50px;
//   width: 50px;
//   border-radius: 25%;
// `;
// const ContrastBox = styled.div`
//   background-color: ${({ currentContrast }) => currentContrast};
//   margin: 50px;
//   height: 50px;
//   width: 50px;
//   border-radius: 25%;
// `;
const PickContainer = styled(FlexColumn)`
  height: auto;
  width: 100%;
  background: ${({ currentColor }) => currentColor};
`;
const Styledrange = styled("input")`
  width: 95%;
  height: 15px;
  padding: 0 5px;
  /* transform: rotate(90deg); */
`;


const RangeInput = ({ value, max = 100, onChange }) => {
  return (
    <Styledrange
      type="range"
      value={value}
      min={0}
      max={max}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const ContrastRange = ({ tcontogle }) => {
  const [val, setval] = useState(50);

  const handleChange = (sliderValues) => {
    setval(sliderValues);
    tcontogle(`hsl(0,0%, ${sliderValues}%)`);
  };

  useEffect(() => {
  }, [val]);
  return (
    <PickContainer>
      <RangeInput label={val} value={val} onChange={handleChange} />
    </PickContainer>
  );
};

export default ContrastRange;
