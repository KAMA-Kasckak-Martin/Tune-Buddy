import React from "react";
import {useNavigate} from "react-router-dom";
import {FriendProps} from "./FriendPage";

export default function Friend(props: FriendProps){
    const navigate= useNavigate()

    function onDetailClick(){
        navigate("/profile/"+ props.user.id)
    }

    return(
        <div>
            <p>{props.user.name}</p>
            <img src={props.user.car.img} onClick={onDetailClick}/>
            <p>{props.user.car.description}</p>
        </div>
    )
}