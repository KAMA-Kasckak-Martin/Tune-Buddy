import {Navigate, Outlet} from "react-router-dom";
import {User} from "./models/User";

type ProtectedRoutesProps = {
    user: User
}


export default function ProtectedRoutes(props: ProtectedRoutesProps) {


    const isAuthenticated: boolean = props.user.name !== ""

    return (

        isAuthenticated ? <Outlet/> : <Navigate to={"/login"}/>
    )
}