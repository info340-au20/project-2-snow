import React, { useState, useEffect } from 'react';
import { Route, NavLink, useLocation} from 'react-router-dom';
import { csv } from 'd3';
// data
import datacsv from './resorts.csv';
// style
import './css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// firebase
import firebase from 'firebase/app';
import 'firebase/auth';
// components
import CardList from './components/Card';
import { About, AboutPageHeader } from './components/About';
import { SignIn, SignInPageHeader } from './components/SignIn';
import Footer from './components/Footer'


export default function App() {
  const [resorts, setResorts] = useState([]);
  const [store, setStore] = useState([]);
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  

  // auth state event listener
  useEffect(() => { // run after component loads
    // listen for changes to the authstate (logged in or not)
    const authUnregisterFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setIsLoading(false);
      } else { // not defined
        setUser(null);
        setIsLoading(false);
      }
    })

    return function cleanup() { //what to do when done loading
      authUnregisterFunction()
    }
  }, []) //only run hook on first load

  useEffect(() => {
    csv(datacsv).then(setResorts);
  }, []);


  useEffect(() => {
     csv(datacsv).then(setStore);
  }, []);

  

  return (
    <div className="structure">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            <img className="logo" src="logo.png" alt="Website Logo"></img> 
            {' '}SkiUS
          </a>
          <NavOption />
        </nav>
        <Route exact path="/" component={() => <MainPageHeader resorts={resorts} setResorts={setResorts} store={store}/>} />
        <Route path="/about" component={AboutPageHeader} />
        <Route path="/signIn" component={() => <SignInPageHeader user={user}/>} />
        <Route exact path="/index.html" component={() => <MainPageHeader resorts={resorts} setResorts={setResorts} store={store}/>} />
      </header>
      
      <main>
        <Route exact path="/" component={() => <Main resorts={resorts} user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path="/about" component={About} />
        <Route path="/signIn" component={() => <SignIn user={user} resorts={resorts} />} />
        <Route path="/index.html" component={() => <Main resorts={resorts} user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </main>


      <Footer />
    </div>
  );
}

function NavOption() {
  const { pathname } = useLocation();

  return (
    <div className="collapse navbar-collapse navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className='nav-item'> 
          <NavLink className="nav-link"
              to="/index.html" activeClassName={"activeLink active"}
                isActive={() => ['/', '/index.html'].includes(pathname)} >
                Dashboard 
          </NavLink> 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" activeClassName={"activeLink active"}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signIn" activeClassName={"activeLink active"}>Profile</NavLink>
        </li>
      </ul>
    </div>
  )
}

function MainPageHeader({resorts, setResorts, store}) {
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

function Main({resorts, user, isLoading}) {
  let alert = resorts.length === 0;

  return (
    <div>
      <br></br>
      <div className="cards container">
        <AlertMessage alert={alert} isLoading={isLoading} />
        <CardList resorts={resorts} user={user} />
      </div>
      <br></br>
    </div>
  )
}

function AlertMessage({alert, isLoading}) {
  if(isLoading) {
    return(
      <div className="text-center">
        <i className="fa fa-spinner fa-spin fa-3x" aria-label="connecting..."></i>
      </div>
    )
  }
  return (
    <div>
      {alert
        ? <h3 className="text-center alert alert-danger">"Cannot find search results! Check spelling."</h3>
        : <h3>{' '}</h3>
      }
    </div>
  )
}

function Search({resorts, setResorts, store}) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = event => {
    setSearchValue(event.target.value)
  };

  const search = (searchValue) => {
    let data = resorts.filter(resortName =>
      resortName.resort_name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setResorts(data);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    resorts = store;
    search(searchValue);
  }

  return (
    <form className="location" onSubmit={handleSearch}>
      <label htmlFor="resort"></label>
      <input className="searchInput" id="resort" type="text" placeholder="Resort Name.." name="search" aria-label="resort name"
        value={searchValue}
        onChange={handleChange}>
      </input>
      <button className="searchButton" type="submit" aria-label="Search"><FontAwesomeIcon icon={faSearch} /></button>
    </form>
  )
}

function Filter({resorts, setResorts}) {
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

