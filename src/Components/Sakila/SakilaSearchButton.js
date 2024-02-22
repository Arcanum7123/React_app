export default function SakilaSearchButton() {
    async function sakilaHandleClick() {
      const sakilaOutput = document.getElementById("SakilaOutput");
      const sakilaInput = document.getElementById("SakilaInput").value.toUpperCase();
      const sakilaRadioSelected = document.getElementsByName("SakilaOption");
      let sakilaOption = "Unselected";
      for (let i = 0; i < sakilaRadioSelected.length; i++) {
        if (sakilaRadioSelected[i].checked) {
          sakilaOption = sakilaRadioSelected[i].value;
        }
      }
  
      const sakInstruct = document.getElementById("SakilaInstructions");
  
      if (sakilaInput) {
        switch (sakilaOption) {
          case "filmsIn":
            sakInstruct.innerHTML = `Type a film genre and press go`;
            const sakilaResponse = await fetch(`http://localhost:8080/home/filmsInCategory/${sakilaInput}`, {method: "GET"});
            const sakilaText = await sakilaResponse.json();
            console.log(sakilaText);
            sakilaOutput.innerHTML = sakilaText;
            break;
          case "updateRating":
            sakInstruct.innerHTML = `Type a film title followed by a comma and a space, then type the new rating (G, PG, PG-13, R, NC-17) and press go`
            const allowedRatings = ["G", "PG", "PG-13", "R", "NC-17"];
            const filmTitle = sakilaInput.split(', ')[0];
            const newRating = sakilaInput.split(', ')[1];
            
            //If allowed, amend
            if (!(filmTitle === undefined) && (allowedRatings.includes(newRating))){
              await fetch(`http://localhost:8080/home/updateRating/${filmTitle}/${newRating}`, {method: "PUT"});
              sakilaOutput.innerHTML = `The rating of ${filmTitle} has been updated to ${newRating}!`
            } else {
              sakilaOutput.innerHTML = `Oops, something went wrong! Make sure you input in the format "[film title], [new rating]"`
            }
            break;
          case "categoryToFilm":
            sakInstruct.innerHTML = `Type a film title followed by a comma and a space, then the genre to add to the film and press go`
            const newCategory = sakilaInput.split(', ')[1];
            const filmTitleC = sakilaInput.split(', ')[0];
  
            //If allowed, add
            if (!(filmTitleC === undefined) && !(newCategory === undefined)) {
              await fetch(`http://localhost:8080/home/add/${newCategory}/categoryTo/${filmTitleC}`, {method: "POST"});
              sakilaOutput.innerHTML = `${filmTitleC} is now included in the ${newCategory} genre.`
            } else {
              sakilaOutput.innerHTML = `Oops, something went wrong! Make sure you input in the format "[film title], [new genre]"`
            }
            break;
          case "removeCat":
            sakInstruct.innerHTML = `Type a film title followed by a comma and a space, then the genre to remove from the film and press go`
            const newCategoryR = sakilaInput.split(', ')[1];
            const filmTitleR = sakilaInput.split(', ')[0];
  
            //If allowed, delete category
            if (!(filmTitleR === undefined) && !(newCategoryR === undefined)) {
              await fetch(`http://localhost:8080/home/removeFrom/category/${newCategoryR}/film/${filmTitleR}`, {method: "DELETE"});
              sakilaOutput.innerHTML = `${filmTitleR} is no longer included as a ${newCategoryR} film.`
            } else {
              sakilaOutput.innerHTML = `Oops, something went wrong! Make sure you input in the format "[film title], [genre to remove]"`
            }
            break;
          default:
            sakilaOutput.innerHTML = `Please select an action to take.`
        } 
      }
    }
  
    return (
      <button type="button" id="SakilaSearchButton" onClick={sakilaHandleClick}>
      Go
      </button>);
}