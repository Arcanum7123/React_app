export default function SakilaOutputSelect() {
    return (
      <div className="Radio">
        <label>
          <input type="radio" value="filmsIn" name="SakilaOption" id="FilmsIn" />
          Films in category
        </label>
  
        <label>
          <input type="radio" value="updateRating" name="SakilaOption" id="UpdateRating" />
          Update flim rating
        </label>
  
        <label>
          <input type="radio" value="categoryToFilm" name="SakilaOption" id="AddCategory" />
          Add a category to a film
        </label>
        
        <label>
          <input type="radio" value="removeCat" name="SakilaOption" id="RemoveCategory" />
          Remove category from film
        </label>
      </div>
    );
}