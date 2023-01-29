import React from "react";
import {TuningPart} from "../models/TuningPart";

export type PartsProps = {
    part: TuningPart
    editable: boolean
    removeEvent:(id:string)=> void
}

export default function Parts(props: PartsProps) {
    function onDeleteClick(){
        props.removeEvent(props.part.id)
    }

    return (
        <div>
            <p>{props.part.name}</p>
            <a href={props.part.shopUrl}>{props.part.shopUrl}</a>
            <br/>
            { props.editable ? <button onClick={onDeleteClick}>Delete</button> : null }
            <br/>
        </div>
    )
}