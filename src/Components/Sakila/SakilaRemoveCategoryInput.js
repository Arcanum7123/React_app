import { useState } from "react";

export default function SakilaRemoveCategoryInput({setFilmTitle, setRemoveGenre, setSelectedOutput}) {
    const [film, setFilm] = useState("");
    const [genre, setGenre] = useState("");
    return (
        <form className="SakilaSearchForm" onSubmit={(evt) => { evt.preventDefault(); setFilmTitle(film); setRemoveGenre(genre); setSelectedOutput("Remove"); } }>
            <input type="text" id="SakilaFilmInputD" className="SakilaInput" placeholder="Type a film title" value={film} onChange={(evt) => setFilm(evt.target.value)} />
            <input type="text" id="SakilaGenreInputD" className="SakilaInput" placeholder="Type a genre to remove to the film" value={genre} onChange={(evt) => setGenre(evt.target.value)} />
            <input type="submit" value={"Remove genre from film"} id="GenreSubmitD" />
        </form>
    )
}