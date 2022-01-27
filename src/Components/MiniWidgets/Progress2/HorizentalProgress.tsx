import { useEffect, useState } from "react";
import { HorizentalProgressContainer,IBarProps } from "./HProgress.Styles";

export default function Bar1({...props}:IBarProps) {
  const [style, setStyle] = useState({});  
  const [valor, setValor] = useState<string>("25");
  const[isdone,setisDone] = useState<boolean>(false);
  /*
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${valor}%`
    };

    setStyle(newStyle);
  }, 200);*/

  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${valor}%`
    }; 
    if(valor === "100"){
      setisDone(true)
    }else if(valor <= "99"){
      setisDone(false)
    }
    setStyle(newStyle);
  }, [valor,isdone]);


  return (
    <HorizentalProgressContainer>
      <div className={isdone? "progress-done":"progress-notdone"} style={style}>
        {valor}%
      </div>
      <input
        type="number"
        className="input"
        value={valor}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValor(e.target.value)}
      />

    </HorizentalProgressContainer>
  );
}

{/* <input
type="number"
className="input"
value={valor}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValor(e.target.value)}
/> */}