import { render, screen } from '@testing-library/react';
import Logo from './Components/Logo';
import Header from './Components/Header';
import Subhead from "./Components/Subhead";
import CurrencyImage from "./Components/CurrencyImage";
import PhoneImage from "./Components/PhoneImage";
import CityImage from "./Components/CityImage";
import LangImage from "./Components/LangImage";
import InputInfo from "./Components/InputInfo";
import OutputSelect from "./Components/OutputSelect";
import CountryInput from './Components/CountryInput';
import SearchButton from './Components/SearchButton';

test('renders header', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Country wiki/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders logo', () => {
  render(<Logo />);
  const logoElement = screen.getByAltText(/A map/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders subhead', () => {
  render(<Subhead />);
  const subheadElement = screen.getByText(/Find the information you want about countries easily/i);
  expect(subheadElement).toBeInTheDocument();
});

test('renders currency image', () => {
  render(<CurrencyImage />);
  const currencyImageElement = screen.getByAltText(/Picture of currency symbols/i);
  expect(currencyImageElement).toBeInTheDocument();
});

test('renders phone image', () => {
  render(<PhoneImage />);
  const phoneImageElement = screen.getByAltText(/Picture of a phone/i);
  expect(phoneImageElement).toBeInTheDocument();
});

test('renders city image', () => {
  render(<CityImage />);
  const cityImageElement = screen.getByAltText(/Image of a city skyline/i);
  expect(cityImageElement).toBeInTheDocument();
});

test('renders language image', () => {
  render(<LangImage />);
  const langImageElement = screen.getByAltText(/Image of words in various languages/i);
  expect(langImageElement).toBeInTheDocument();
});

test('renders input info', () => {
  render(<InputInfo />);
  const inputInfoElement = screen.getByText(/Please select the information you would like and enter the country you would like the know about, then click the search button./i);
  expect(inputInfoElement).toBeInTheDocument();
});

test('renders capital output select', () => {
  render(<OutputSelect />);
  const capitalOutputSelectElement = screen.getByText(/Capital city/i);
  expect(capitalOutputSelectElement).toBeInTheDocument();
});

test('renders currency output select', () => {
  render(<OutputSelect />);
  const currencyOutputSelectElement = screen.getByText(/Currency/i);
  expect(currencyOutputSelectElement).toBeInTheDocument();
});

test('renders language output select', () => {
  render(<OutputSelect />);
  const languageOutputSelectElement = screen.getByText(/Language/i);
  expect(languageOutputSelectElement).toBeInTheDocument();
});

test('renders calling code output select', () => {
  render(<OutputSelect />);
  const codeOutputSelectElement = screen.getByText(/Calling code/i);
  expect(codeOutputSelectElement).toBeInTheDocument();
});

test('renders country input bar', () => {
  render(<CountryInput />);
  const countryInputElement = screen.getByPlaceholderText(/Enter a country/i);
  expect(countryInputElement).toBeInTheDocument();
});

test('renders search button', () => {
  render(<SearchButton />);
  const searchButtonElement = screen.getByText(/Search/i);
  expect(searchButtonElement).toBeInTheDocument();
});