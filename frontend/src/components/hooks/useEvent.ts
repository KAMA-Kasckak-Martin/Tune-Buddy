import {useEffect, useState} from "react";
import axios from "axios";
import {Event} from "../models/Event";

function useEvent(id: string | undefined) {
    const [event, setEvent] = useState<Event>()

    useEffect(() => {
        if (id) {
            getEventById(id)
        }
        //eslint-disable-next-line
    }, [])

    function getEventById(id: string) {
        axios.get("/api/events/" + id)
            .then(response => response.data)
            .then(data => {
                setEvent(data)
            })
            .catch(console.error)
    }

    return {event}
}

export default useEvent;
