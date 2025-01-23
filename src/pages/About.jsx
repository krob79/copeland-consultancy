import Heading from '../components/Heading';
import Markdown from 'react-markdown';


import './About.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

function About({data}) {

  const {imgpath, heading, bio, logopath, about} = data;

  // These duration settings don't seem to change anything...
  AOS.init({
    duration: 5200,
    mirror: false
   });

  return (
    <>
        <div className="container p-3">
            <Heading text={heading}/>
        </div>
        <div className="container-fluid bg-dark text-white border">
            <div className="row">
                <div className='col'>
                <div className="stripe"></div>
                <div id="bio-container">
                    <div className="bio-image">
                      <img id="bio-image" src={imgpath} className="headshot-transparent" data-aos="img-transition-in"  data-aos-once="false" alt="Todd Copeland, Founder of Copeland Consultancy"/>
                    </div>
                    <div id="bio-text-container">
                    <div className="bio-text"><Markdown>{bio}</Markdown></div>
                    </div>
                    
                    <div className="bio-background"></div>
                </div>
                <div id="bio-text-container2" className="container">
                    <div className="bio-text" data-aos="text-transition-in" ><Markdown>{bio}</Markdown></div>
                </div>
                </div>
                
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <div className="aboutTextContainer">
                      <h3>Copeland Consultancy is:</h3>
                      <Markdown>{about}</Markdown>
                    </div>
                </div>
                <div className="col">
                    <img id="logo" src={logopath} alt="Copeland Consultancy Logo" />
                </div>
                
            </div>
        </div>
    </>
  )
}

export default About;
