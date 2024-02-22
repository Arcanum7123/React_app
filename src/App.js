import "./App.css";
import Logo from "./Components/Logo";
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
import SearchButton from "./Components/SearchButton";

//Sakila stuff
import SakilaHeader from "./Components/Sakila/SakilaHeader";
import SakilaOutput from "./Components/Sakila/SakilaOutput";
import SakilaOutputSelect from "./Components/Sakila/SakilaOutputSelect";
import SakilaInputBar from "./Components/Sakila/SakilaInputBar";
import SakilaInstruction from "./Components/Sakila/SakilaInstruction";
import SakilaSearchButton from "./Components/Sakila/SakilaSearchButton";

export default function Page() {
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
}
