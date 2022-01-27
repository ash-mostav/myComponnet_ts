import { useEffect, useState, useMemo } from "react";
import { RatingContainer } from "./RateCircle.Styles";
interface IRatingCircleProps{
    rating?:number;
}
const RatingCircle = ({ rating }:IRatingCircleProps) => {
    const [val,setval]=useState<any>();
  const [dasharray, setDasharray] = useState<any>(0);

  const computedDasharray = useMemo(() => `${dasharray} 999`, [dasharray]);

  useEffect(() => {
    // Change 40 by 2 if you want a percentage from 0% to 100%
    setval(rating)
    setDasharray(val/2);
  }, [rating,val]);

  return (
    <RatingContainer>
      <div className="progressCircularBar">
        <svg
          className="progressCircle"
          width="90px"
          height="90px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="progressCircleBack"
            cx="32"
            cy="32"
            r="30"
            fill="transparent"
          />
          <circle
            className="progressCircleFront"
            cx="32"
            cy="32"
            r="30"
            fill="transparent"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeDasharray={computedDasharray}
          />
        </svg>
        <span className="rating">{val}</span>
      </div>
      <span className="name">Tannin</span>
    </RatingContainer>
  );
};

export default RatingCircle;
