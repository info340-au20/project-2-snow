import React, { useState, useEffect } from 'react';
import './css/style.css';
import { BrowserRouter, Route, NavLink, useLocation} from 'react-router-dom';
import CardList from './Card';
import {csv} from 'd3';
import datacsv from './resorts.csv';

  function App() {
    const [resorts, setResorts] = useState([]);

    useEffect(() => {
      csv(datacsv).then(setResorts);
    }, []);

    const search = (searchValue) => {
      setResorts(resorts.filter(resortName =>
        Object.values(resortName).includes(searchValue)
      ));
    }

   return (
    <BrowserRouter>
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
        <Route exact path="/" component={() => <MainPageHeader search={search} />} />
        <Route path="/about" component={AboutPageHeader} />
        <Route exact path="/index.html" component={() => <MainPageHeader search={search} />} />
      </header>

      <main>
      <Route exact path="/" component={() => <Main resorts={resorts} />} />
      <Route path="/about" component={About} />
      <Route path="/index.html" component={() => <Main resorts={resorts} />} />
      </main>

      <footer className="page-footer font-small black pt-4">
        <div className="container-fluid text-center text-md-center">
          <p className="text-uppercase">Developers:</p>
          <p>Yilin Chen · Class of 2023 (<a href="mailto:ychen023@uw.edu">ychen023@uw.edu</a>)</p>
          <p>Sunny Zheng · Class of 2023 (<a href="mailto:sunnyzyr@uw.edu">sunnyzyr@uw.edu</a>)</p>
        </div>
        <div className="footer-copyright text-center py-3">
          <p>INFO340: Client Side Development ·&nbsp;
            <span><a href="https://github.com/info340-au20/project-1-snow.git" aria-label="Github Repository Link">GitHub</a></span>
            <span>·&nbsp; &copy; Yilin Chen & Sunny Zheng</span>
            · Header photos from <a href="https://unsplash.com/" aria-label="Unsplash website Link">Unsplash</a>
          </p>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

 export default App;

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
      </ul>
    </div>
   )
 }

  function Search({search}) {
    const [searchValue, setSearchValue] = useState("");
    const handleChange = event => {
      setSearchValue(event.target.value)
    };
    const resetInputField = () => {
      setSearchValue("")
    }

    const handleSearch = (event) => {
      event.preventDefault();
      search(searchValue);
      resetInputField();
    }

    return (
      <form className="location" onSubmit={handleSearch}>
        <label htmlFor="resort"></label>
        <input className="searchInput" id="resort" type="text" placeholder="Resort Name.." name="search" aria-label="resort name"
          value={searchValue}
          onChange={handleChange}>
        </input>
        <button className="searchButton" type="submit" aria-label="Search"><a className="fa fa-search"></a></button>
      </form>
    )
  }

 function Filter() {
   return (
    <form>
      <div className="outer">
        <legend className="reminder">
          Sort by your ski level:
        </legend>
        <div className="inner">
          <label htmlFor="green"></label>
          <input type="submit" className="greenButton" id="green" aria-label="Sort Green Percent" value="Green"></input>
          <label htmlFor="blue"></label>
          <input type="submit" className="blueButton" id="blue" aria-label="Sort Blue Percent" value="Blue"></input>
          <label htmlFor="black"></label>
          <input type="submit" className="blackButton" id="black" aria-label="Sort Black Percent" value="Black"></input>
        </div>
      </div> 
    </form>
   )
 }

 function MainPageHeader({search}) {
  return (
    <div className="header-img">
      <div className="header-name">
        <h1>Ski Resort</h1>
      </div>
      <br></br>

      <div className="search">
        <Search search={search} />
      </div> 

      <div className="filter">
        <Filter />
      </div>

    </div>
  )
}

function Main({resorts}) {
  return (
  <div>
    <br></br>
    <div className="cards container">
      <div className="cards row">
        <CardList resorts={resorts}/>
      </div>
    </div>
    <br></br>
  </div>
  )
}

function AboutPageHeader() {
  return (
    <div className="header-img">
      <div className="header-name">
        <h1>About US</h1>
      </div>
      <br></br>
    </div>
  )
}

function About() {
  return (
    <main>
    <section className="about">
      <br></br>
      <div className="intro">
        <h2>The problem we are trying to solve!</h2>
        <p>During the 2019-2020 season, the U.S had about 51.1 million snow sports visits in
          total. The demand for ski-related information is tremendous. Unlike other sports,
          snow-related sports highly depend on weather conditions, locations, and trail
          difficulty. Get data from different ski resorts would be crucial for people
          to decide which one would be their best destination, considering both safety and
          moderation factors. 
        </p>
        <p>
          Since there are so many ski resorts that the skiers and snowboarders can choose
          from, each snow trail's data is very scattered. People need to go to various snow
          resort websites to obtain relevant information, which is a waste of time and
          difficult to compare. 
        </p>
        <h2>How can SkiUS help skiers?</h2>
        <p>
          Our app mainly serves skiers and snowboarders looking for inspiration for their next destination 
          or just checking resort conditions before their trip regardless of skill levels. 
          Users could look for various ski resorts in the Washington State from our website, including 
          the basic information of specific ski resorts, lift numbers and runs difficulties. 
        </p>
        <p>Using a single app designed by our team, users will never need to check different 
          official websites for information regarding ski resorts. Confusions through 
          the searching process will be reduced. Users can find inspirations and be able to 
          find the ski destination that best fits their needs.
        </p>
        <h2>Who are we?</h2>
        <p>We are two students from the University of Washington who aim to help skiers find inspirations for their next ski destination.</p>
      </div>
    </section>
    <br></br>
  </main>
  )
}