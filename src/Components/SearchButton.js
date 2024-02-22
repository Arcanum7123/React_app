export default function SearchButton() {
    async function GetCountryName(countryInput) { //Gets correctly capitalised country name
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryInput}?fields=name`);
      const text = await response.text();
      let countryOutput = text.split('\",\"')[0]; //Removes superfluous characters after name
      countryOutput = countryOutput.split('\":\"')[1]; //Removes superfluous characters before name
      console.log(countryOutput);
      return countryOutput;
    }
  
    function cleanCapital(textIn) {
      const textTwo = textIn.split('\"]')[0]; //Removes superfluous characters after capital
      const textFinal = textTwo.split('[\"')[1]; //Removes superfluous characters before capital
      return textFinal;
    }
  
    function cleanCurrency(textIn) {
      const textTwo = textIn.split('e\":\"')[1];
      const textFinal = textTwo.split('","')[0];
      return textFinal;
    }
  
    function cleanLanguageIDD(textIn) {
      const textTwo = textIn.split('\":\"')[1];
      const textThree = textTwo.split('\"}}')[0];
      const textFinal = textThree.split('\",\"')[0];
      return textFinal;
    }
  
    async function handleClick() { //Searches in API for the country in the textbox
      const countryInput = document.getElementById("Country").value.toLowerCase(); //Gets input
      const displayResult = document.getElementById("Output"); //Gets output location
      const outputSelected = document.getElementsByName("Option");
      let optionSelected = "capital";
      for (let i = 0; i < outputSelected.length; i++) {
        if (outputSelected[i].checked) {
          optionSelected = outputSelected[i].value;
        }
      }
  
      if (countryInput){
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryInput}?fields=${optionSelected}`); //Finds capital
        const text = await response.text();
        console.log(text);
        
        const countryOutput = await GetCountryName(countryInput);
        let answer;
        let problem = false;
  
        if (!text.includes("capital") && !text.includes("currencies") && !text.includes("languages") && !text.includes("idd")) { //If there is not a valid output for the input
          displayResult.innerHTML = `Please select what you want to know and enter a country.`;
        } else {
          if (optionSelected.includes("capital")) {
            answer = cleanCapital(text);
          } else if(optionSelected.includes("currencies")) {
            optionSelected = "currency"
            answer = "the " + cleanCurrency(text);
          } else if (optionSelected.includes("languages")) {
            optionSelected = "language";
            answer = cleanLanguageIDD(text);
          } else if (optionSelected.includes("idd")) {
            optionSelected = "calling code";
            answer = cleanLanguageIDD(text);
          } else {
            problem = true;
          }
  
          if (!problem) {
            displayResult.innerHTML = `The ${optionSelected} of ${countryOutput} is ${answer}.`;
          } else {
            displayResult.innerHTML = `Oops! Something went wrong. Please try again.`
          }
        }
      } else { //If clicked without search term
        displayResult.innerHTML = `Please select what you want to know and enter a country.`;
      }
    }
  
    return (
      <button type="button" id="SearchButton" onClick={handleClick}>
      Search
      </button>);
}