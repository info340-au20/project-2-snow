import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Collapse, Button, CardBody, Card } from 'reactstrap'

function CardBookmark({resort}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="column col-md-6 col-xl-3">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto">
                            < img className="pb-3" src={resort.img} alt={resort.resort_name} title={resort.resort_name}></img>
                        </div>
                        <div className="col-sm">
                            <dt className="card-text">{resort.resort_name}</dt>
                            <div className="card-text">{resort.state}</div>
                            <button className="btn btn-secondary">Remove</button>
                        </div>
                    </div>
                </div>
                <Button color="secondary" onClick={handleToggle} style={{ marginBottom: '1rem' }}>Display Info ⇩</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                                <p className="category">
                                    Summit:{' '}
                                    <span className="answer">{resort.summit}'</span>
                                </p >
                                <p className="category">
                                    Runs:{' '}
                                    <span className="answer">{resort.runs}</span>
                                </p >
                                <p className="category green">
                                    Green Percent:{' '}
                                    <span className="answer green">{resort.green_percent}</span>
                                </p >
                                <p className="category blue">
                                    Blue Percent:{' '}
                                    <span className="answer blue">{resort.blue_percent}</span>
                                </p >
                                <p className="category black">
                                    Black Percent:{' '}
                                    <span className="answer black">{resort.black_percent}</span>
                                </p >
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </div>
        
    )
}

export default function CardListBookMark({user}) {
    const [bookmarked, setBookmarked] = useState([]);
    let userID = user.uid;
    useEffect(() => {
        
        let isMounted = true;
        let userRef = firebase.database().ref(userID);// like the url
        userRef.on('value', (snapshot) => {
          const theResortsObj = snapshot.val(); // convert into a JS value
          // have an object (with keys)
          // need an array
          if (theResortsObj != null) {
            let objectKeysArray = Object.keys(theResortsObj)
            let resortsArray = objectKeysArray.map((key) => {
                let singleChirpObj = theResortsObj[key]
                singleChirpObj.key = key
                return singleChirpObj
            })
            if (isMounted) {
                setBookmarked(resortsArray);
            }
          }
          
        })
        return () => { isMounted = false }; 
        
      }, [userID])
      if(bookmarked.length === 0) return null;

      
    
    
    
    let cards = [];
    cards = bookmarked.map((resort) => {
        return <CardBookmark resort={resort} key={resort.resort_name}/>
    })

    return (
        <div className="cards row">
            {cards}
        </div>
    )
}