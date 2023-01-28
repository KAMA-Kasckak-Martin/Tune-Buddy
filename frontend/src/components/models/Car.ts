import {TuningPart} from "./TuningPart";

export type Car={
    id: string,
    img: string,
    description: string,
    tuningParts: Array<TuningPart>
}