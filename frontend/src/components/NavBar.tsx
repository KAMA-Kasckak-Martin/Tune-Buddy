import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";


type NavigationBarProps = {
    logout: () => Promise<string>
}

export default function NavigationBar(props: NavigationBarProps) {

    return (
        <div className={"nav-bar"}>
            <NavLink to={"/"} >Startseite</NavLink>
            <NavLink to={"/home"} >Friends</NavLink>
            <NavLink to={"/profile"} >Profile</NavLink>
            <NavLink to={"/event"} >Events</NavLink>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    )
}