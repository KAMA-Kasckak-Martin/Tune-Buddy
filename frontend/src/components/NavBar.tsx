import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";
import "./NavBar.css"


type NavigationBarProps = {
    logout: () => Promise<string>
}

export default function NavigationBar(props: NavigationBarProps) {

    return (
        <div className={"nav-bar"}>
            <NavLink className={"link"} to={"/"} >Startseite</NavLink>
            <NavLink className={"link"} to={"/login"} >Login/Register</NavLink>
            <NavLink className={"link"} to={"/home"} >Friends</NavLink>
            <NavLink className={"link"} to={"/profile"} >Profile</NavLink>
            <NavLink className={"link"} to={"/event"} >Events</NavLink>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    )
}