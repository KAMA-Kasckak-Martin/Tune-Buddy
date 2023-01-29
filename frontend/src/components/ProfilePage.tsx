import React, {ChangeEvent, useEffect, useState} from "react";
import {User} from "./models/User";
import SingleImageUploadComponent from "./Upload";
import useProfile from "./hooks/useProfile";
import {Button} from "@mui/material";
import Parts from "./Parts/Parts";
import {TuningPart} from "./models/TuningPart";
import { v4 as uuid } from 'uuid';
import AddParts from "./Parts/AddParts";
import axios from "axios";
import { useParams} from "react-router-dom";
import "./ProfilePage.css"
export type ProfileProps={
    user: User
    setUser:(user:User)=> void
    canEdit: boolean
}

export default function ProfilePage(props:ProfileProps){
    const [edit, setEdit] = useState<boolean>(false)
    const [carImage, setCarImage] = useState<string>(props.user.car.img)
    const [desc, setDesc] = useState<string>(props.user.car.description)
    const [tuningParts, setTuningParts] =  useState<Array<TuningPart>>(props.user.car.tuningParts)
    const {updateImages}= useProfile()
    const [profileUser, setProfileUser] = useState<User>(props.user)
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get("/api/users/" + id)
                .then(response => {
                    setProfileUser(response.data)
                    setTuningParts(response.data.car.tuningParts)
                })
                .catch(console.error)
        } else {
            setProfileUser(props.user)
            setTuningParts(props.user.car.tuningParts)
        }
    }, [id])

    function onDescChange(event:ChangeEvent<HTMLInputElement>){
        setDesc(event.target.value)
    }

    function onEditClick(){
        setEdit(!edit)
        if (edit) {
            let _user = props.user
            _user.car.description = desc
            _user.car.tuningParts = tuningParts

            _user.car.img = carImage
            updateImages(_user)
            props.setUser(_user)
        }
    }

    function onPartsRemove(id: string) {
        setTuningParts(tuningParts.filter(p => p.id !== id))
    }

    function onPartsAdd(name: string, shopUrl: string) {
        setTuningParts(tuningParts.concat(
            {id: uuid(), name: name, shopUrl: shopUrl}
        ))
    }

    return(
        <div>
            <h2 className={"profile-name"}>{profileUser.name}</h2>
            <img className={"profile-pic"} src={profileUser.car.img} width={250} height={250}/>
            <br/>
            {props.canEdit ? <Button className={"edit-btn"} size={"small"} variant={"contained"} onClick={onEditClick}>{edit ? "Save" : "Edit"}</Button> : null }
            { edit ?  <SingleImageUploadComponent setCarImg={setCarImage}/> : null }
            <br/>
            <h3 className={"car-description"}>Car Description</h3>
            <input className={"description"} type="text" disabled={!edit} value={desc} onChange={onDescChange}/>
            <p className={"car-description"}>Parts</p>
            { edit ? <AddParts addEvent={onPartsAdd}/> : null}
            <div className={"part"}>{tuningParts.map((part, index)=><Parts key={index} part={part} editable={edit} removeEvent={onPartsRemove}/>)}</div>
        </div>
    )
}