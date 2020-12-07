import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function Card({resort}) {
    return (
        <div className="column col-md-6 col-xl-3 d-flex">
            <div className="card mb-4 shadow-sm">
                <div className="card-body d-flex">
                    <div className="row">
                        <div className="col-sm-auto">
                            < img className="pb-3" src={resort.img} alt={resort.resort_name} title={resort.resort_name}></img>
                        </div>
                        <div className="col-sm">
                            <h2 className="card-title">{resort.resort_name}</h2>
                            <div className="card-text">{resort.state}</div>
                            <button className="bookmarkButton" type="button" aria-label="bookmark"><FontAwesomeIcon icon={faBookmark} /></button>
                        </div>
                    </div>
                </div>
                <button type="button" className="align-self-end btn btn-dark btn-block btn-primary card-button">Detail</button>
                <div className="back-card">
                    <p className="category">
                        Summit:{' '}
                        <span className="answer">{resort.summit}</span>
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
                </div>
            </div>
        </div>
    )
}

export default function CardList({resorts}) {
    let cards = resorts.map((resort) => {
        return <Card resort={resort} key={resort.resort_name} />
    })

    return (
        <div className="cards row">
            {cards}
        </div>
    )
}