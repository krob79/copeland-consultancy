import Heading from '../components/Heading';
import DualColumnSection from '../components/DualColumnSection';
import GlobeSection from '../components/GlobeSection';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Home.scss';

function Home({data}) {
  AOS.init({
      duration: 1200,
      mirror: false
  });

  return (
    <>
        <div className="container-fluid">
          <div className="row">
            <GlobeSection />
          </div>
        </div>
        <div className='container-fluid bg-white'>
            <div className='container p-5'>
                <Heading text={"Consultation Services - TEST GITHUB"} />
                {
                    data.map((element, index) => (
                        <DualColumnSection element={element} key={index} />
                    ))
                }
            </div>
        </div>
        
    </>
  )
}

export default Home
