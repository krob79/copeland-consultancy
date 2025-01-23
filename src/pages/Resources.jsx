import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../css/App.css';

function Resources() {

  return (
    <>
      <style type="text/css">
        {`
          .btn-flat {
            background-color: purple;
            color: white;
          }

          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }

          .container-flat {
            color: white;
          }

          .col{
            border: 1px solid black;
            background-color: grey;
          }

          .row{
            
          }
        `}
      </style>
      <div>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Resources</h1>

      <Button variant='flat'>flat button</Button>
     
      <Container fluid className="container-flat">
        <Row>
          <Col md={{offset: 1}}>sm=8</Col>
          <Col md={{offset: 4}}>sm=4</Col>
        </Row>
        <Row lg={6}>
          <Col xs>First, but unordered</Col>
          <Col md={{order:'first'}} xs={{ order: 5 }}>Second, but last</Col>
          <Col md={{order:'last'}} xs={{ order: 0 }}>Third, but second</Col>
        </Row>
      </Container>
    </>
  )
}

export default Resources;
