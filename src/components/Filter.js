export function Filter({resorts, setResorts}) {
    const greenCallBack = () => {
      setResorts([...resorts].sort((a, b) => ((a.acres * a.green_percent) < (b.acres * b.green_percent)) ? 1 : -1));
    };
    const blueCallBack = () => {
      setResorts([...resorts].sort((a, b) => ((a.acres * a.blue_percent) < (b.acres * b.blue_percent)) ? 1 : -1));
    };  
    const blackCallBack = () => {
      setResorts([...resorts].sort((a, b) => ((a.acres * a.black_percent) < (b.acres * b.black_percent)) ? 1 : -1));
    };
    const handleGreen = (event) => {
      event.preventDefault();
      greenCallBack();
    }
    const handleBlue = (event) => {
      event.preventDefault();
      blueCallBack();
    }
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
          <div className="inner">
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
  