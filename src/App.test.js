import { render, screen, fireEvent } from '@testing-library/react';
import CameraImage from './Components/CameraImage';
import FilmImage from './Components/FilmImage';
import SakilaAddCategoryInput from './Components/SakilaAddCategoryInput';
import SakilaInputBar from './Components/SakilaInputBar';
import SakilaOutput from './Components/SakilaOutput';

import React from 'react';

test('Renders camera image', () => {
  render(<CameraImage />);
  const cImageElement = screen.getByAltText(/Clipart of a film camera/i);
  expect(cImageElement).toBeInTheDocument();
});

test('Renders film image', () => {
  render(<FilmImage />);
  const fImageElement = screen.getByAltText(/Image of camera film/i);
  expect(fImageElement).toBeInTheDocument();
});

test('Renders add category film input', () => {
  render(<SakilaAddCategoryInput />);
  const addCatInputElement = screen.getByPlaceholderText(/Type a film title/i);
  expect(addCatInputElement).toBeInTheDocument();
});

test('Renders add category genre input', () => {
  render(<SakilaAddCategoryInput />);
  const addCatInputElement = screen.getByPlaceholderText(/Type a new genre to add to the film/i);
  expect(addCatInputElement).toBeInTheDocument();
});

test('Searching for horror films', async () => {
  const setUsedCategory = jest.fn();
  const setSelectedOutput = jest.fn();

  const setCategory = jest.fn();
  jest
    .spyOn(React, 'useState')
    .mockImplementationOnce(initState => [initState, setCategory]);

  const setFilms = jest.fn();
  jest
    .spyOn(React, 'useState')
    .mockImplementationOnce(initState => [initState, setFilms]);
  render(<SakilaInputBar usedCategory="Horror" setUsedCategory={setUsedCategory} selectedOutput="Show" setSelectedOutput={setSelectedOutput} />);  //add in usedCategory as hard coded "horror", setUsedCategory as mock function above and similarly for the other params
  render(<SakilaOutput usedCategory="Horror" />);
  
  const input = screen.getByPlaceholderText(/Enter a genre to view a list of films in that genre/i);
  fireEvent.change(input, {target: {value: 'horror'}});

  const submitButton = screen.getByText(/View films/i);
  fireEvent.click(submitButton);

  await screen.findByTestId(/GenreList/i);

  const outputList = screen.getByTestId(/GenreList/i);
  expect(outputList).toBeInTheDocument();
});