import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export default function AuthDoctorRoute({component: Component, ...rest}){
    const { authDoctor } = useContext(AuthContext);
    return(
        <Route
            {...rest}
            render={()=>{
                if(authDoctor)
                {
                    return<Component/>
                }
                else{
                    return <Redirect to="/login"/>
                }}}>
        </Route>
    )
}