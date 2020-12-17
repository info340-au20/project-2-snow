// React
import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import { Redirect } from 'react-router-dom';
// fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
// Firebase 
import firebase from 'firebase/app';

function ResortCard({resort, user}) {
    const [isOpen, setIsOpen] = useState(false); // button use state
    // a callback to handle display button
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const [redirectTo, setRedirectTo] = useState(undefined); // path param use state
    // a callback for detail page
    const handleInfo = () => {
        setRedirectTo(resort.resort_name);
    }
    if (redirectTo !== undefined){ // if resort is defined
        return <Redirect push to={"/info/" + redirectTo} />;
    }
    let mark = null;
    if (user) {
        const handleBookmark = (event) => {
        event.preventDefault();
        // reference into the database
        const userRef = firebase.database().ref(user.uid);
        userRef.push(resort);
    }
        mark = (
            <button className="bookmarkButton" type="button" aria-label="bookmark" onClick={handleBookmark}><FontAwesomeIcon icon={faBookmark} /></button>
        )
    }

    return (
        // Card body
        <div className="column col-md-6 col-xl-3">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto clickable" onClick={handleInfo}> {/* make image clickable to the detail page */}
                            <img className="pb-3" src={resort.img} alt={resort.resort_name} title={resort.resort_name}></img>
                        </div>
                        <div className="col-sm">
                            <dt className="card-text">{resort.resort_name}</dt>
                            <div className="card-text">{resort.state}</div>
                            {mark}
                        </div>
                    </div>
                </div>
                {/* drop down button */}
                <Button color="secondary" onClick={handleToggle} aria-label="dropdown">Display Info ⇩</Button>
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

// render card list
export default function CardList({resorts, user}) {
    let cards = resorts.map((resort) => {
        return <ResortCard resort={resort} key={resort.resort_name} user={user} />
    })

    return (
        <div className="cards row">
            {cards}
        </div>
    )
}