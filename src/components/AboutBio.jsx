import '../pages/About.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Markdown from 'react-markdown';
import Heading from './Heading';

function AboutBio({data}) {
  const {bioimgpath, aboutfounderheading, bio} = data;

  return (
    <>
    <Heading text={aboutfounderheading}/>
    <div className="container-fluid bg-black text-white">
        {/* This text-window is not part of the row, because the extensive bio text pushes the row down making it much taller than desired */}
        <div id="text-window">
                <div id="bio1" className="bio-text"><Markdown>{bio}</Markdown></div>
        </div>
        <div className="row bio-row">
            <div className="stripe"></div>
            
            <div className="col-md-5 col-lg-6">
                <img id="bio-image" src={bioimgpath} alt="Todd Copeland, Founder of Copeland Consultancy"/>
            </div>
            
        </div>
        {/* Alternate bio text to appear under the image instead of to the side, for smaller viewports */}
        <div className="row">
            <div className="container">
                <div id="bio2" className="bio-text"><Markdown>{bio}</Markdown></div>
            </div>
        </div>
    </div>
    </>
  );
}

export default AboutBio;