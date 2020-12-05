import './css/style.css'

 function App() {
   return (
    <div className="structure">
      <header>

        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            <img className="logo" src="img/logo.png" alt="Website Logo"></img> 
            SkiUS
          </a>
          <NavOption />
        </nav>

        <div className="header-img">
          <div className="header-name">
            <h1>Ski Resort</h1>
          </div>
          <br></br>

          <div className="search">
            <Search />
          </div> 
        </div>


      </header>
      
      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
          </div> 
          <div id="petList" className="col-9">
          </div> 
        </div>
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
  );
}

 export default App;

 function NavOption() {
   return (
    <div className="collapse navbar-collapse navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">Dashboard <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about.html">About</a>
        </li>
      </ul>
    </div>
   )
 }

 function Search() {
   return (
    <form className="location">
      <label htmlFor="resort"></label>
      <input className="searchInput" id="resort" type="text" placeholder="Resort Name.." name="search" aria-label="resort name"></input>
      <button className="searchButton" type="submit" aria-label="Search"><a className="fa fa-search"></a></button>
    </form>
   )
 }