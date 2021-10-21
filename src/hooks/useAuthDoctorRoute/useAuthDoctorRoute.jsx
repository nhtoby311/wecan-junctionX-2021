import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export default function AuthDoctorRoute({component: Component, ...rest}){
    const { authAdmin } = useContext(AuthContext);
    return(
        <Route
            {...rest}
            render={()=>{
                if(authAdmin)
                {
                    return<Component/>
                }
                else{
                    return <Redirect to="/login"/>
                }}}>
        </Route>
    )
}