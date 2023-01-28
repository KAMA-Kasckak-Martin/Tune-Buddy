import {useParams} from "react-router-dom";
import useEvent from "../hooks/useEvent";

export default function EventDetails() {

    const params = useParams()

    const id: string | undefined = params.id

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