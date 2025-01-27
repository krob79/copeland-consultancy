import './Heading.scss';

function Heading({text}) {

  return (
    <>
      <div className="container p-2">
          <h2 className="heading">{text}</h2>
      </div>
      
    </>
  )
}

export default Heading;
