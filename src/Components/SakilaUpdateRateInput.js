import { useState } from "react";

export default function SakilaUpdateRateInput({setFilmTitle, setNewRating, setSelectedOutput}) {
    const [film, setFilm] = useState("");
    const [rating, setRating] = useState("");
    return (
        <form className="SakilaSearchForm" onSubmit={(evt) => { evt.preventDefault(); setFilmTitle(film); setNewRating(rating.toUpperCase()); setSelectedOutput("Update"); } }>
            <input type="text" id="SakilaFilmInputR" className="SakilaInput" placeholder="Type a film title" value={film} onChange={(evt) => setFilm(evt.target.value)} />
            <input type="text" id="SakilaRatingInput" className="SakilaInput" placeholder="Type the new rating (G, PG, PG-13, R, NC-17)" value={rating} onChange={(evt) => setRating(evt.target.value)} />
            <input type="submit" value={"Update film rating"} id="RatingSubmit" />
        </form>
    );
}