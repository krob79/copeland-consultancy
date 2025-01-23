import Heading from '../components/Heading';
import DualColumnSection from '../components/DualColumnSection';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Markdown from 'react-markdown';
// import Globe from '../components/Globe';
import GlobeSection from '../components/GlobeSection';

import './TestPage.scss';

function TestPage({data}) {

  const {imgpath, heading, bio} = data;

  return (
    <>
        <style type="text/css">
        {`
          .bio{
            background-color: black;
          }
          .bioText{
            {/* padding: 15px; */}
            color: #999;
          }
        `}
        </style>
        <div className="container p-3">
            <Heading text={heading}/>
        </div>
        <div className="container bg-dark text-white border">
            <div className="row">
                <div className='col-lg-4'>
                    <img className="mw-100" src={imgpath} alt="Todd Copeland, Founder of Copeland Consultancy"/> 
                </div>
                <div className="col p-3 bioText">
                    <Markdown>{bio}</Markdown>
                </div>
            </div>
        </div>
        
       
        
    </>
  )
}

export default TestPage;
