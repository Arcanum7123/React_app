import { useEffect, useState } from "react";
import debounce from "debounce";
import { baseURL } from "./config.ts";

export default function SakilaGenreOutput ({filmTitle, newGenre}) {
    const [response, setResponse] = useState("Idle");
    useEffect( debounce( () => {
        if (filmTitle === "" || newGenre === "") {return}
        setResponse("Loading");
        fetch(`${baseURL}/add/${newGenre}/categoryTo/${filmTitle}`, {method: "POST"})
            .then((res) => {setResponse(res.ok? "Loaded" : "Failed")});
    }, 200),[newGenre]);
    if (response === "Idle") {
        return
    } else if (response === "Loading") {
        return <div className="SakilaOutput" id="AddGenreOutput">Loading...</div>
    } else if (response === "Failed") {
        return <div className="SakilaOutput" id="AddGenreOutput">Something went wrong, try again</div>
    } else if (response === "Loaded") {
        return <div className="SakilaOutput" id="AddGenreOutput">{newGenre} has been added as a genre of the film {filmTitle}</div>
    }
}