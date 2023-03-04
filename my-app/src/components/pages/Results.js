import './Page.css';

function Results(props) { 
    if (!props.informationComplete) {
        return (
            <div className="page">
                <h1>Oops! Please go back and make sure that you filled out all the information.</h1>
            </div>
        )
    }
    return (
        <div className="page">
            <h1>Enjoy your workout!</h1>
        </div>
    )
}

export default Results;