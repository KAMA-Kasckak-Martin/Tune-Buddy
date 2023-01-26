import useEvents from "./hooks/useEvents";
import AddEvent from "./Event/AddEvent";
import EventGallery from "./Event/EventGallery";


export default function EventApp(){

    const {addEvent,removeEvent,events}= useEvents()

    return(
        <div>
            <h1>Events</h1>
            <AddEvent addEvent={addEvent}/>
            <EventGallery events={events} removeEvent={removeEvent}/>
        </div>
    )
}