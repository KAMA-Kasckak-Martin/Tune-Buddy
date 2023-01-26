import {Event} from "../models/Event";
import {ChangeEvent, useState} from "react";
import EventCard from "./EventCard";

export type EventGalleryProps={
    events:Event[]
    removeEvent:(id:string)=>void
}

export default function EventGallery(props:EventGalleryProps){

    const [searchText, setSearchText] = useState<string>("")

    const filterEvents:Event[]=props.events.filter(event=> event.name.toLowerCase().includes(searchText.toLowerCase()))

    function onSearchChange(event:ChangeEvent<HTMLInputElement>){
        setSearchText(event.target.value)
    }

    return(
        <div>
            <input placeholder={"Search event"} value={searchText} onChange={onSearchChange}/>
            <div>{filterEvents.map(event=><EventCard event={event}  removeEvent={props.removeEvent}/>)}</div>
        </div>
    )
}