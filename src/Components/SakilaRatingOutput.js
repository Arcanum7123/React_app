import { useEffect, useState } from "react";
import debounce from "debounce";
import { baseURL } from "./config.ts";

export default function SakilaRatingOutput({filmTitle, newRating}) {
    const allowedRatings = ["G", "PG", "PG-13", "R", "NC-17"];
    const [response, setResponse] = useState("Idle");
    useEffect( debounce( () => {
        if (filmTitle === "" || newRating === "" || !(allowedRatings.includes(newRating.toUpperCase()))) {return}
        setResponse("Loading");
        fetch(`${baseURL}/updateRating/${filmTitle}/${newRating}`, {method: "PUT"})
            .then((res) => {setResponse(res.ok? "Loaded" : "Failed")});
    }, 200), [newRating]);
    if (response === "Idle") {
        return
    } else if (response === "Loading") {
        return <div className="SakilaOutput" id="UpdateRateOutput">Loading...</div>
    } else if (response === "Failed") {
        return <div className="SakilaOutput" id="UpdateRateOutput">Something went wrong, try again</div>
    } else if (response === "Loaded") {
        return <div className="SakilaOutput" id="UpdateRateOutput">The rating of {filmTitle} has been updated to {newRating}</div>
    }
}