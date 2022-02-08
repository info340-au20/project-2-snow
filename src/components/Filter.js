export function Filter({resorts, setResorts}) {
  // callback for sorting green algorithm  
  // credits to https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/ 
  const greenCallBack = () => {
      setResorts([...resorts].sort((a, b) => ((a.acres * a.green_percent) < (b.acres * b.green_percent)) ? 1 : -1));
  };
  // callback for sorting blue algorithm   
  const blueCallBack = () => {
    setResorts([...resorts].sort((a, b) => ((a.acres * a.blue_percent) < (b.acres * b.blue_percent)) ? 1 : -1));
  };  
  // callback for sorting black algorithm   
  const blackCallBack = () => {
    setResorts([...resorts].sort((a, b) => ((a.acres * a.black_percent) < (b.acres * b.black_percent)) ? 1 : -1));
  };
  // callback to handle green sort when clicking
  const handleGreen = (event) => {
    event.preventDefault();
    greenCallBack();
  }
  // callback to handle blue sort when clicking
  const handleBlue = (event) => {
    event.preventDefault();
    blueCallBack();
  }
  // callback to handle black sort when clicking
  const handleBlack = (event) => {
    event.preventDefault();
    blackCallBack();
  }
    return (
      <form>
        <div className="outer">
          <legend className="reminder">
            Sort by your ski level (acres high to low):
          </legend>
          <div>
            <label htmlFor="green"></label>
            <input type="submit" className="greenButton" id="green" aria-label="Sort Green Percent" value="New"
                    onClick={handleGreen}>
            </input>
            <label htmlFor="blue"></label>
            <input type="submit" className="blueButton" id="blue" aria-label="Sort Blue Percent" value="Intermediate"
                    onClick={handleBlue}>
            </input>
            <label htmlFor="black"></label>
            <input type="submit" className="blackButton" id="black" aria-label="Sort Black Percent" value="Expert"
                    onClick={handleBlack}>
            </input>
          </div>
        </div> 
      </form>
    )
   }
  