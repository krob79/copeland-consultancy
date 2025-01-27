import Markdown from 'react-markdown';
import Heading from './Heading';
import './AboutConsultancy.scss';

function AboutConsultancy({data}){

    const {logopath, certificatepath, aboutcompanyheading, company} = data;

    return (
        <>
        <Heading text={aboutcompanyheading}/>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <img id="logo" src={logopath} alt="Copeland Consultancy Logo" />
                </div>
                <div className="col-sm-12">
                    <h3>Copeland Consultancy is:</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-6 p-2">
                    <div className="aboutlist">
                      <Markdown>{company}</Markdown>
                    </div>
                </div>
                <div className="col p-2">
                    <img src={certificatepath} className="img-fluid" alt="Member Certificate" />
                    <p>Member of the Textile Exchange since 2020</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutConsultancy;