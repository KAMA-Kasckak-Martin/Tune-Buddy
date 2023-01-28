import {NavLink, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {User} from "./models/User";


type NavigationBarProps = {
    logout: () => Promise<string>
    user: User
}

export default function NavigationBar(props: NavigationBarProps) {
    const navigate= useNavigate()
    return (
        <div>{ props.user.id ?
            <div className={"nav-bar"}>
                <NavLink to={"/"}>Startseite</NavLink>
                <NavLink to={"/home"}>Friends</NavLink>
                <NavLink to={"/profile"}>Profile</NavLink>
                <NavLink to={"/event"}>Events</NavLink>
                <Button onClick={() => {
                    props.logout();
                    navigate("/login");
                }}>Logout</Button>
            </div>
            : null
        }    </div>
    )
}