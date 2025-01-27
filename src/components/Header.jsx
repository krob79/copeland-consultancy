import './Header.scss';
import { useEffect } from 'react';

function Header({data}) {
    let nav = null;
    let navlogo = null;
    useEffect(() => {
        nav = document.querySelector('#nav-holder');
        navlogo = document.querySelector('#brand-logo');
        //console.log("---NAV ELEMENT");
        //console.log(nav);
        window.addEventListener('scroll', throttle(() => determineStickyState(nav), 200));
    }, []);

    let stickynavStyle = null;
    let stickynavTop = 0;

    let throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    let determineStickyState = (element) => {
        
        //console.log(element);

        if (!stickynavStyle) {
            stickynavStyle = window.getComputedStyle(element);
            stickynavTop = parseInt(stickynavStyle.top, 10);
        }

        const currentTop = element.getBoundingClientRect().top;
        console.log(`---determineStickyState - currentTop: ${currentTop}  stickynavTop: ${stickynavTop}`);
        if(currentTop <= stickynavTop){
            console.log("sticking");
            //navlogo.style.display = "none";
            navlogo.style.opacity = "1";
        }else{
            console.log("unsticking");
            navlogo.style.opacity = "0";
        }
        element.classList.toggle('is-sticky', currentTop <= stickynavTop);

    }

    


    return(
        <>
        <div className="container">
                <div id="logo" className="bg-white text-white text-center">
                    <a href="#" className="nav-brand"><img src="./logo_text_sm.png" /></a>
                </div>
            </div>
        <div id="nav-holder" className="container-fluid sticky-top bg-white">
            
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