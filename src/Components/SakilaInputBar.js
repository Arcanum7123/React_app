import { useState } from "react";

export default function SakilaInputBar({setUsedCategory, setSelectedOutput}) {
  const [category, setCategory] = useState("");
  return (
    <form className="SakilaSearchForm" onSubmit={(evt) => { evt.preventDefault(); setUsedCategory(category); setSelectedOutput("Show"); } }>
      <input type="text" id="SakilaGenreInput" className="SakilaInput" placeholder="Enter a genre to view a list of films in that genre" value={category} onChange={(evt) => setCategory(evt.target.value)} />
      <input type="submit" value={"View films"} id="GenreSubmit" />
    </form>
  );
}