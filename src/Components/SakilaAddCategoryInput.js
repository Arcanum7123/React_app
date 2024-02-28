import { useState } from "react";

export default function SakilaAddCategoryInput({setFilmTitle, setNewGenre, setSelectedOutput}) {
    const [film, setFilm] = useState("");
    const [genre, setGenre] = useState("");
    return (
        <form className="SakilaSearchForm" onSubmit={(evt) => { evt.preventDefault(); setFilmTitle(film); setNewGenre(genre); setSelectedOutput("Add"); } }>
            <input type="text" id="SakilaFilmInputG" className="SakilaInput" placeholder="Type a film title" value={film} onChange={(evt) => setFilm(evt.target.value)} />
            <input type="text" id="SakilaAddGenreInput" className="SakilaInput" placeholder="Type a new genre to add to the film" value={genre} onChange={(evt) => setGenre(evt.target.value)} />
            <input type="submit" value={"Add genre to film"} id="AddGenreSubmit" />
        </form>
    )
}