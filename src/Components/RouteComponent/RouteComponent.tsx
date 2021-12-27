import React from "react";
import { useLocation, useNavigate } from "react-router";

interface IProps{
    component:React.FC<any>
    [key:string]:any
}

function RouteComponent(props:IProps) {
    const location = useLocation()
    const navigation = useNavigate()

    const history = {
        push: (path: string) => navigation(path)
    }
    const Child: React.FC<any> = props.component ;

    return (
        <div>
            <Child history={history} location={location} {...props}/>
        </div>
    );
}

export default RouteComponent;