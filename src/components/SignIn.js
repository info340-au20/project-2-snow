// React
import React, { useState } from 'react';
// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// Component
import CardListBookMark from './SignInCard'

export function SignInPageHeader({ user, dataLoading }) {
    const [errorMessage, setErrorMessage] = useState(undefined);
    //FirebaseUI config
    const uiConfig = {
        // which sign in providers to use
        signInOptions : [
            {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // where to show the "display name" on the sign in page
            requireDisplayName: true
            }, // each object is a signin method
            firebase.auth.GoogleAuthProvider.PROVIDER_ID // also log in with Google
        ],
        // page won't show the account chooser
        credentialHelper: 'none',
        // use popup instead of redirect for external sign-up methods --Google
        signInFlow: 'popup',
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false,
        }
    }

    //A callback function for logging out the current user
    const handleSignOut = () => {
        setErrorMessage(null); // clear any old errors
        firebase.auth().signOut();
    }

    // display toggle when loading
    if(dataLoading) {
      return(
        <div className="text-center">
            <i className="fa fa-spinner fa-spin fa-3x" aria-label="connecting..."></i>
        </div>
      )
    }
      
    let content = null;
    if (!user) { // if logged out, show signup form
        content = (
          <div className="container">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        );
    } else { // if logged in, show welcome message
        content = (
          <div className="logout">
            {user &&
                <button className="btn btn-info" onClick={handleSignOut}>
                  Log Out As {user.displayName}
                </button>
            }
          </div>
        );
    }

    return (
      <div>
          <div className="header-img">
            <div className="header-name">
            <h1>Sign In</h1>
            </div>
            <br></br>
            {errorMessage &&
                <p className="alert alert-danger">{errorMessage}</p>
            }
            {content}
        </div>
      </div>  
      
    )
  }

export function SignIn({ user , dataLoading}) {
  //console.log(dataLoading);
  // display toggle when loading
  if(dataLoading) {
    return(
        <div className="text-center">
            <i className="fa fa-spinner fa-spin fa-3x" aria-label="connecting..."></i>
        </div>
    )
  }
    let content = null;

    if (user) { //if logged out, show signup form
        content = (
            <div>
                <br></br>
                <h2 className="logout">Bookmarked Resorts</h2>
                <br></br>
                <div className="cards container">
                <CardListBookMark user={user}/>
                </div>
                <br></br>
            </div>
        );
    }
    
    return (
        <div>
            {content}
        </div>
    )
}