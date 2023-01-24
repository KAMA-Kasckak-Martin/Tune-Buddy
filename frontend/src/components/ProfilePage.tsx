import React from "react";
import {User} from "./models/User";
export type ProfileProps={
    user: User
}

export default function ProfilePage(props:ProfileProps){
    return(
        <div>
            <p>Profile page</p>
            <h2>{props.user.name}</h2>
            <img src={props.user.car.img}/>
            <p>{props.user.car.description}</p>
            <div>
                <li>{props.user.car.tuningParts.name}</li>
                <li>{props.user.car.tuningParts.shopUrl}</li>
            </div>

        </div>
        )
}