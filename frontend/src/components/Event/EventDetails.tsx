import {useParams} from "react-router-dom";
import useEvent from "../hooks/useEvent";
import {useEffect} from "react";

export default function EventDetails() {
    const { id } = useParams();
    const {event} = useEvent(id)

    if (!event) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div>
            {!event && <p>Loading...</p>}
            {<div>
                <p>{event.name}</p>
                <p>{event.description}</p>
            </div>
            }
        </div>

    )
}