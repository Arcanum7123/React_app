import { useEffect, useState } from "react";
import debounce from "debounce";
import { baseURL } from "./config.ts";

export default function SakilaOutput({usedCategory}) {
    const [films, setFilms] = useState([]);
    useEffect( debounce( () => {
        if (usedCategory === "") {return}
        fetch(`${baseURL}/filmsInCategory/${usedCategory}`, {method: "GET"})
            .then((res) => res.json())
            .then((films) => setFilms(films));
    }, 100), [usedCategory]);
    return (<div className="SakilaOutput" data-testid="GenreList" id="GenreOutput">
        {films.map(
            record => <li key={record}><b>{record}</b></li>
          )}
    </div>);
}