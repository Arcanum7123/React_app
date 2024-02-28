import { useEffect, useState } from "react";
import debounce from "debounce";
import { baseURL } from "./config.ts";

export default function SakilaRemoveCategoryOutput({filmTitle, removeGenre}) {
    const [response, setResponse] = useState("Idle");
    useEffect( debounce(() => {
        if (filmTitle === "" || removeGenre === "") {return}
        setResponse("Loading");
        fetch(`${baseURL}/removeFrom/category/${removeGenre}/film/${filmTitle}`, {method: "DELETE"})
            .then((res) => {setResponse(res.ok? "Loaded" : "Failed")});
    }, 200), [removeGenre]);
    if (response === "Idle") {
        return
    } else if (response === "Loading") {
        return <div className="SakilaOutput" id="RemoveGenreOutput">Loading...</div>
    } else if (response === "Failed") {
        return <div className="SakilaOutput" id="RemoveGenreOutput">Something went wrong, try again</div>
    } else if (response === "Loaded") {
        return <div className="SakilaOutput" id="RemoveGenreOutput">{removeGenre} has been removed as a genre of the film {filmTitle}</div>
    }
}