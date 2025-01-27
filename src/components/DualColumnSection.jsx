import Col from 'react-bootstrap/Col';
import Markdown from 'react-markdown';
import './DualColumnSection.scss';
import '../css/App.css'

function DualColumnSection({element}) {

const {img, title, textbullets} = element;

const leftColOrder = img.side == "left"? {order:0} : {order:2};
const rightColOrder = img.side == "left"? {order:2} : {order:0};

const imageClass = img.side == "left"? "img-fluid services-image-left" : "img-fluid services-image-right";


  return (
    <>
        <div data-aos="fade-center" className="row">
          
          <Col lg={6} order={leftColOrder}>
              <img className={imageClass} src={img.path} alt={img.alt}/>
          </Col>
          <Col order={rightColOrder}>
              <div data-aos="fade-center">
                <Markdown>{title}</Markdown>
                <ul className="services-text">
                  {
                    textbullets.map((element, index) => (
                      <li key={index}><Markdown>{element}</Markdown></li>
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
