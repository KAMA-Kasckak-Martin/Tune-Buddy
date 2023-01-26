import {useNavigate} from "react-router-dom";
import {Event} from "../models/Event";

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
        navigate("/events/"+ props.event.id)
    }

    return(
        <div>
            <p> {props.event.name}</p>
            <p> {props.event.description}</p>
            <button onClick={onDeleteClick}></button>
            <button onClick={onDetailClick}></button>
        </div>
    )
}