import './Header.scss';

function Header() {
    return(
        <>
        <div className="container">
                <div id="logo" className="bg-white text-white text-center">
                    <a href="#" className="nav-brand"><img src="./logo_text_sm.png" /></a>
                </div>
            </div>
        <div id="nav-holder" className="container-fluid">
            
            
            <nav className="navbar navbar-expand-sm navbar">
            <div id="brand-logo" className="bg-white text-white text-center">
                <a href="#" className="nav-brand"><img src="./logo_text_sm.png" /></a>
            </div>
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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/">Resources</a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Link 1</a></li>
                        <li><a className="dropdown-item" href="#">Link 2</a></li>
                        <li><a className="dropdown-item" href="#">Link 3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
        

        </>
    )
}

export default Header;