import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


export function SignInPageHeader({ user }) {
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
        setErrorMessage(null); //clear any old errors
        firebase.auth().signOut();
    }

    let content = null;

    if (!user) { //if logged out, show signup form
        content = (
          <div className="container">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        );
    } else { //if logged in, show welcome message
        content = (
          <div>
            {user &&
                <button className="btn btn-warning" onClick={handleSignOut}>
                  Log Out {user.displayName}
                </button>
            }
            <h2>happy</h2>
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

export function SignIn() {

    return (
        <div>
            <h2>cards</h2>
        </div>
    )
}