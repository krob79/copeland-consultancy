import FormContainer from "./FormContainer";

import './Footer.scss';

function Footer() {
  return (
    
        

                <footer>
                    <h3>Subscribe</h3>
                    
                    <div className="form-holder">
                        <FormContainer />
                        
                        <div className="footer-bg">
                            <img src="./hands_bg.png" className="img-fluid" alt="Hands Background" />
                        </div>
                    </div>
                    
                    <p className="c-text">Copyright © 2024 Copeland Consultancy website - All Rights Reserved.</p>
                    <div id="nav-holder" className="container-fluid">
            
            
            <nav className="navbar navbar-expand-sm navbar">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Welcome</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
                </footer>

    
  );
}

export default Footer;