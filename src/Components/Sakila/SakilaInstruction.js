export default function SakilaInstruction() {
    /*function displayInstructions () {
        const sakilaRadioSelected = document.getElementById("SakilaOption");
        const sakilaInstruct = document.getElementById("SakilaInstruction");
        let sakilaOption = "Unselected";
        for (let i = 0; i < sakilaRadioSelected.length; i++) {
            if (sakilaRadioSelected[i].checked) {
                sakilaOption = sakilaRadioSelected[i].value;
            }
        }
        
        switch (sakilaOption) {
          case "filmsIn":
            sakilaInstruct.innerHTML = `Type a film genre and press go`;
            break;
          case "updateRating":
            sakilaInstruct.innerHTML = `Type a film title followed by a comma and a space, then type the new rating (G, PG, PG-13, R, NC-17) and press go`;
            break;
          case "categoryToFilm":
            sakilaInstruct.innerHTML = `Type a film title followed by a comma and a space, then the genre to add to the film and press go`;
            break;
          case "removeCat":
            sakilaInstruct.innerHTML = `Type a film title followed by a comma and a space, then the genre to remove from the film and press go`;
            break;
        }
    }*/
    return <div id="SakilaInstructions">Comlpete the text boxes for an operation, then click the button for that operation</div>
}