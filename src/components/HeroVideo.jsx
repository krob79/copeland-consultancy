import '../css/App.css'

function HeroVideo() {

  return (
    <>
        <style type="text/css">
        {`
          .vid-overlay{
            color: white;
            margin-left: 25%;
            margin-top: 50px;
            width: 350px;
            background-color: rgba(255, 255, 255, 0.2);
          }

          .vid-overlay-btn{
            background-color: rgba(252, 193, 0);
          }
        `}
      </style>
        <div className="container-fluid bgvideo">
          <div className="row">
            <div className="vid-overlay card">
                <div className="card-body">
                    <h5>Helping companies solve their most pressing sustainability challenges</h5>
                    <p><a href="#" className="btn btn-large vid-overlay-btn">Contact</a></p>
                </div>
            </div>
            <div className="bg-black">
                <video autoPlay loop muted plays-inline="true" className="back-video"><source src="./spinning_globe_handbrake.mp4" type="video/mp4" /></video>
            </div>
            
          </div>
        </div>
        
    </>
  )
}

export default HeroVideo;
