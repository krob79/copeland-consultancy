import '../css/App.css';
import './Globe.scss';

function Globe({size='500px'}){

    return(
        <>
        <div className='planet-container'>
            <div className='night'></div>
            <div className='day'></div>
            <div className='clouds'></div>
            <div className='inner-shadow'></div>
        </div>
        </>
    )

}

export default Globe;