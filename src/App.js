import "./App.css";
/*import Logo from "./Components/Logo";
import Header from "./Components/Header";
import Subhead from "./Components/Subhead";
import CurrencyImage from "./Components/CurrencyImage";
import PhoneImage from "./Components/PhoneImage";
import CityImage from "./Components/CityImage";
import LangImage from "./Components/LangImage";
import InputInfo from "./Components/InputInfo";
import Output from "./Components/Output";
import Spacer from "./Components/Spacer";
import OutputSelect from "./Components/OutputSelect";
import CountryInput from "./Components/CountryInput";
import SearchButton from "./Components/SearchButton";*/

//Sakila stuff
import SakilaHeader from "./Components/Sakila/SakilaHeader";
import SakilaOutput from "./Components/Sakila/SakilaOutput";
// import SakilaOutputSelect from "./Components/Sakila/X SakilaOutputSelect";
import SakilaInputBar from "./Components/Sakila/SakilaInputBar";
import SakilaInstruction from "./Components/Sakila/SakilaInstruction";
// import SakilaSearchButton from "./Components/Sakila/X SakilaSearchButton";
import { useState } from "react";
import SakilaUpdateRateInput from "./Components/Sakila/SakilaUpdateRateInput";
import SakilaRatingOutput from "./Components/Sakila/SakilaRatingOutput";
import SakilaAddCategoryInput from "./Components/Sakila/SakilaAddCategoryInput";
import SakilaGenreOutput from "./Components/Sakila/SakilaGenreOutput";
import SakilaRemoveCategoryInput from "./Components/Sakila/SakilaRemoveCategoryInput";
import SakilaRemoveCategoryOutput from "./Components/Sakila/SakilaRemoveCategoryOutput";
import CameraImage from "./Components/Sakila/CameraImage";
import FilmImage from "./Components/Sakila/FilmImage";

/*export default function Page() {
  return (
    <section>
      <Logo />
      <Header />
      <Subhead />
      <CurrencyImage />
      <LangImage />
      <br />
      <InputInfo />
      <Spacer />
      <OutputSelect />
      <CountryInput />
      <SearchButton />
      <CityImage />
      <PhoneImage />
      <Output />
      <br />
      <SakilaHeader />
      <SakilaOutputSelect />
      <SakilaInstruction />
      <SakilaInputBar />
      <SakilaSearchButton />
      <SakilaOutput />
    </section>
  );
}*/

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