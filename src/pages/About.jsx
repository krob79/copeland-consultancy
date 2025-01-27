import AboutBio from '../components/AboutBio';


import './About.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutConsultancy from '../components/AboutConsultancy';

function About({data}) {

  // These duration settings don't seem to change anything...
  AOS.init({
    duration: 5200,
    mirror: false
   });

  return (
    <>
        
        <AboutBio data={data}/>
        <AboutConsultancy data={data}/>
        
    </>
  )
}

export default About;
