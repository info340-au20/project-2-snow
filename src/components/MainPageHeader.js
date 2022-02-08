// components
import { Search } from './Search';
import { Filter } from './Filter';

export function MainPageHeader({resorts, setResorts, store}) {
    return (
      <div className="header-img">
        <div className="header-name">
          <h1>Ski Resort</h1>
        </div>
        <br></br>
  
        <div className="search">
          <Search resorts={resorts} setResorts={setResorts} store={store} />
        </div> 
  
        <div className="filter">
          <Filter resorts={resorts} setResorts={setResorts}/>
        </div>
      </div>
    )
  }