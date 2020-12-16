import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import firebase from 'firebase/app';
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import React, { useState } from 'react';

function ResortCard({resort, user}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
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
                            {mark}
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