import React from "react";
import { useAuth } from "../Contexts/AuthContext"
import { Route, Navigate } from "react-router-dom"


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth;
    return (
        <Route {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Navigate replace to="/login" />
            }}
        >
        </Route>
    )
}
export default PrivateRoute