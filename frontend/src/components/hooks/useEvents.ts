import axios from "axios";
import {useEffect, useState} from "react";
import {NewEvent,Event} from "../models/Event";

export default function useEvents() {

    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        getEvents()
    }, [])

    function getEvents() {
        axios.get("/api/events")
            .then(response => {
                setEvents(response.data)
            })
            .catch(console.error)
    }

    function addEvent(newEvent: NewEvent) {
        return axios.post("/api/events/addevent", newEvent)
            .then(response => response.data)
            .then((savedEvent) => setEvents(prevState => [...prevState, savedEvent]))
            .catch(console.error)
    }

    function removeEvent(id: string) {
        axios.delete(`/api/events/${id}`)
            .then(() => {
                setEvents(prevState => {
                    return prevState.filter((event) => event.id !== id
                    )
                })
            })
    }

    return {events, addEvent, removeEvent}
}
