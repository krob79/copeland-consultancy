import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Markdown from 'react-markdown';
import './DualColumnSection.scss';
import '../css/App.css'

function DualColumnSection({element}) {

const {img, title, textbullets} = element;

const bgStyle = {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '100%',
    color: 'white'
};

const headingStyle = {
  color: '#9e9800'
}

const textStyle = {
    
    "textAlign": "left"
};

const leftColOrder = img.side == "left"? {order:0} : {order:2};
const rightColOrder = img.side == "left"? {order:2} : {order:0};

const imageClass = img.side == "left"? "img-fluid services-image-left" : "img-fluid services-image-right";


  return (
    <>
        <div data-aos="fade-right" className="row rowStyle">
          
          <Col lg={6} order={leftColOrder}>
              <img className={imageClass} src={img.path} alt={img.alt}/>
          </Col>
          <Col order={rightColOrder}>
              <div data-aos="fade-left">
                <Markdown>{title}</Markdown>
                <ul>
                  {
                    textbullets.map((element, index) => (
                      <li style={textStyle} key={index}><Markdown>{element}</Markdown></li>
                    ))
                  }
                </ul>
              </div>
          </Col>
          
        </div>
        <hr/>

    </>
  )
}

export default DualColumnSection;
