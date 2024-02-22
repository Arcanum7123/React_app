export default function OutputSelect() {
    return (
      <div className="Radio">
        <label>
          <input type="radio" value="capital" name="Option" id="Capital" />
          Capital city
        </label>
  
        <label>
          <input type="radio" value="currencies" name="Option" id="Currencies" />
          Currency
        </label>
  
        <label>
          <input type="radio" value="idd" name="Option" id="IDD" />
          Calling code
        </label>
        
        <label>
          <input type="radio" value="languages" name="Option" id="Languages" />
          Language
        </label>
      </div>
    );
}