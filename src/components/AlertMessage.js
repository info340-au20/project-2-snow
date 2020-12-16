export function AlertMessage({alert, dataLoading}) {
    // display toggle when loading
    if(dataLoading) {
        return(
            <div className="text-center">
                <i className="fa fa-spinner fa-spin fa-3x" aria-label="connecting..."></i>
            </div>
        )
    }
    return (
    <div>
        {alert
        /* alert */
        ? <h3 className="text-center alert alert-danger">"Cannot find search results! Check spelling."</h3>
        /* not alert */
        : <h3>{' '}</h3>
        }
    </div>
    )
}