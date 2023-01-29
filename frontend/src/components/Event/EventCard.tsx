import {useNavigate} from "react-router-dom";
import {Event} from "../models/Event";
import "./EventCard.css"

export type EventCardProps={
    event: Event
    removeEvent:(id:string)=> void
}


export default function EventCard (props:EventCardProps){

    const navigate= useNavigate()

    function onDeleteClick(){
        props.removeEvent(props.event.id)
    }

    function onDetailClick(){
        navigate("/event/"+ props.event.id)
    }

    return(
        <div>
            <p> {props.event.name}</p>
            <button  onClick={onDeleteClick} >Delete</button>
            <button placeholder={"Detail"} onClick={onDetailClick}>Detail</button>
        </div>
    )
}