import "./App.css";
import SakilaHeader from "./Components/SakilaHeader";
import SakilaOutput from "./Components/SakilaOutput";
import SakilaInputBar from "./Components/SakilaInputBar";
import SakilaInstruction from "./Components/SakilaInstruction";
import { useState } from "react";
import SakilaUpdateRateInput from "./Components/SakilaUpdateRateInput";
import SakilaRatingOutput from "./Components/SakilaRatingOutput";
import SakilaAddCategoryInput from "./Components/SakilaAddCategoryInput";
import SakilaGenreOutput from "./Components/SakilaGenreOutput";
import SakilaRemoveCategoryInput from "./Components/SakilaRemoveCategoryInput";
import SakilaRemoveCategoryOutput from "./Components/SakilaRemoveCategoryOutput";
import CameraImage from "./Components/CameraImage";
import FilmImage from "./Components/FilmImage";

export default function Page() {
  const [usedCategory, setUsedCategory] = useState("");
  const [filmTitle, setFilmTitle] = useState("");
  const [newRating, setNewRating] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [removeGenre, setRemoveGenre] = useState("");
  const [selectedOutput, setSelectedOutput] = useState("");
  return (
    <section>
      <CameraImage />
      <SakilaHeader />
      <SakilaInstruction />
      <FilmImage />
      <SakilaInputBar usedCategory = {usedCategory} setUsedCategory = {setUsedCategory} selectedOutput = {selectedOutput} setSelectedOutput = {setSelectedOutput} />
      <SakilaUpdateRateInput filmTitle = {filmTitle} setFilmTitle = {setFilmTitle} newRating = {newRating} setNewRating = {setNewRating} selectedOutput = {selectedOutput} setSelectedOutput = {setSelectedOutput} />
      <SakilaAddCategoryInput filmTitle = {filmTitle} setFilmTitle = {setFilmTitle} newGenre = {newGenre} setNewGenre = {setNewGenre} selectedOutput = {selectedOutput} setSelectedOutput = {setSelectedOutput} />
      <SakilaRemoveCategoryInput filmTitle = {filmTitle} setFilmTitle = {setFilmTitle} removeGenre = {removeGenre} setRemoveGenre = {setRemoveGenre} selectedOutput = {selectedOutput} setSelectedOutput = {setSelectedOutput} />
      {selectedOutput === "Show" && <SakilaOutput usedCategory = {usedCategory}  />}
      {selectedOutput === "Update" && <SakilaRatingOutput filmTitle = {filmTitle} newRating = {newRating} />}
      {selectedOutput === "Add" && <SakilaGenreOutput filmTitle = {filmTitle} newGenre = {newGenre} />}
      {selectedOutput === "Remove" && <SakilaRemoveCategoryOutput filmTitle = {filmTitle} removeGenre = {removeGenre} />}
    </section>
  )
}