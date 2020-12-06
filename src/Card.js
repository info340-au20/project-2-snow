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
                        </div>
                    </div>
                </div>
                <button type="button" href="#" className="'align-self-end btn btn-dark btn-block btn-primary card-button'">Detail</button>
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