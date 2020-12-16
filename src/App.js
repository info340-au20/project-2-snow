// React 
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// data
import { csv } from 'd3';
import datacsv from './resorts.csv';
// style
import './css/style.css';
// firebase
import firebase from 'firebase/app';
import 'firebase/auth';
// components
import { About, AboutPageHeader } from './components/About';
import { SignIn, SignInPageHeader } from './components/SignIn';
import { NavOption } from './components/NavOption';
import { MainPageHeader } from './components/MainPageHeader';
import { Main } from './components/Main';
import { InfoPageHeader } from './components/InfoPageHeader';
import Footer from './components/Footer';

export default function App() {
  const [resorts, setResorts] = useState([]); // for display data
  const [store, setStore] = useState([]); // for reset data
  const [user, setUser] = useState(undefined); // for firebase
  const [dataLoading, setdataLoading] = useState(true); // for toggle
  // auth state event listener
  useEffect(() => { // run after component loads
    // listen for changes to the authstate (logged in or not)
    const authUnregisterFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setdataLoading(false);
      } else { // not defined
        setUser(null);
        setdataLoading(false);
      }
    })

    return function cleanup() { // what to do when done loading
      authUnregisterFunction()
    }
  }, []) // only run hook on first load

  // load data
  useEffect(() => {
    csv(datacsv).then(setResorts);
  }, []);

  // store data
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
        {/* nav bar options */}
        </nav>
        <Switch>
          <Route exact path="/" component={() => <MainPageHeader resorts={resorts} setResorts={setResorts} store={store}/>} />
          <Route path="/about" component={AboutPageHeader} />
          <Route path="/signIn" component={() => <SignInPageHeader user={user} dataLoading={dataLoading} />}  />
          <Route path="/info/:resort_name" component={() => <InfoPageHeader resorts={resorts} />} />
          <Redirect to="/"></Redirect>
        </Switch>
      </header>
      
      {/* display main content */}
      <main>
        <Switch>
          <Route exact path="/" component={() => <Main resorts={resorts} user={user} dataLoading={dataLoading} />} />
          <Route path="/about" component={About} />
          <Route path="/signIn" component={() => <SignIn user={user} resorts={resorts} dataLoading={dataLoading}/>} />
          <Route path="/index.html" component={() => <Main resorts={resorts} user={user} dataLoading={dataLoading} />} />
          <Route exact path="/index.html" component={() => <MainPageHeader resorts={resorts} setResorts={setResorts} store={store}/>} />
          <Route path="/info/:resort_name" component={() => <InfoPageHeader resorts={resorts} />} />
          <Redirect to="/"></Redirect>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}
