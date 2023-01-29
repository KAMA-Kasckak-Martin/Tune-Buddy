import React from "react";
import {useNavigate} from "react-router-dom";
import {FriendProps} from "./FriendPage";
import "./Friend.css"

export default function Friend(props: FriendProps){
    const navigate= useNavigate()

    function onDetailClick(){
        navigate("/profile/"+ props.user.id)
    }

    return(
        <div>
            <p className={"profile-name"}>{props.user.name}</p>
            <img className={"profile-pic"} src={props.user.car.img} width={250} height={250} onClick={onDetailClick}/>
            <p className={"description"}>{props.user.car.description}</p>
        </div>
    )
}