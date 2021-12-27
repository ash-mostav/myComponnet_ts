import { useEffect, useState } from "react";
import { BarContainer } from "./ProgressBar.Styles";


 export interface IProgressDefault {
    value?: number;
    max?: number;
    color?:string;
    width?:string;
}

const ProgressBar = (props: IProgressDefault) => {
    const [val, setVal] = useState<number>(0)
    
    useEffect(() => {
        const iterval = setInterval(() => {
            setVal((val: number) => {
                const newval: number = val + 1;
                if (newval === 100) {
                    clearInterval(iterval)
                }
                
                return newval
            });

        }, 100)
    }, [])
    return (
        <>
            <BarContainer {...props}>
                <progress max={100} value={val} color="#ddd" />
                <span>{val}%</span>
            </BarContainer>
        </>

    )
}
export default ProgressBar;