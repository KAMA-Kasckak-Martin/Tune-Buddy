import lambo from "./images/lambo.png"
import "./HomePage.css"

export default function HomePage(){
    return(
        <div>
            <h1>Tune Buddy</h1>
            <img className={"lambo"} src={lambo}></img>
        </div>
    )
}