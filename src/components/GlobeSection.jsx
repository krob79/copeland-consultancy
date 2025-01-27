import Globe from "./Globe";

import './GlobeSection.scss';

function GlobeSection(){

    return(
        <>
            <div className="stripe"></div>
            <div id="vid-overlay" className="card">
                <div id="vid-overlay-text" className="card-body">
                    <h5>Helping companies solve their most pressing sustainability challenges</h5>
                    <div id="card-btn"><a href="#" className="btn btn-large vid-overlay-btn">Contact</a></div>
                </div>
                <div id="vid-overlay-bg"></div>
            </div>
            <div className="globeContainer">
                <Globe size="500px"/>
            </div>
            <div className="star-bg"></div>
        </>
    )
}

export default GlobeSection;