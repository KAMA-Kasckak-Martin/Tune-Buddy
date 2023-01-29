
import {ChangeEvent, useState} from "react";
import {Button, TextField} from "@mui/material";

export type AddEventProps={
    addEvent:(name:string,url:string)=> void
}
export default function AddParts(props:AddEventProps){

    const [partName,setPartName]=useState<string>("")
    const [url,setUrl]=useState<string>("")

    function onNameChange(event:ChangeEvent<HTMLInputElement>){
        setPartName(event.target.value)
    }

    function onrUrlChange(event:ChangeEvent<HTMLInputElement>){
        setUrl(event.target.value)
    }

    function onSaveClick() {
        props.addEvent(partName, url)
        setPartName("")
        setUrl("")
    }

    return(
        <div>
            <TextField placeholder={"name"} value={partName} onChange={onNameChange}/>
            <TextField placeholder={"shopUrl"} value={url} onChange={onrUrlChange}/>
            <Button size={"large"} variant={"contained"} onClick={onSaveClick}>Add</Button>
        </div>
    )
}