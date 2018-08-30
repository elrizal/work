import React from "react";
import {slide as Menu} from 'react-burger-menu'
import './Hamburger.css'

const Hamburger = props => {
    return (
    <Menu right>
    <div className="Grid">
    <div className="row">
            <nav className="nav">
            <a id="home" className="menu-item" href="/">Home  </a>  
            <a id="web" className="menu-item" href="/dev">Development </a>  
            <a id="uxui" className="menu-item" href="/uxui"> UX & UI Design </a>  
            <a id="brand" className="menu-item" href="/branddesign"> Branding  </a>  
            <a id="campaigns" className="menu-item" href="/sm"> Online Campaigns  </a>  
            <a id="posters" className="menu-item" href="/posters">O.O.H. Campaigns</a>  
            <a id="print" className="menu-item" href="/print"> Print Design  </a>  
            <a id="broadcast" className="menu-item" href="/broadcast"> Broadcast  </a>  
            <a id="illustration" className="menu-item" href="/illustration"> Illustrations  </a>  
            <hr className='hr-nav'></hr>
            <a href='https://www.linkedin.com/in/erin-leigh-rizal-3ab50767/' target='_blank' rel="noopener noreferrer">  <i id='icons' className='fab fa-linkedin fa-lg'></i> LinkedIn</a>    
            <a href='https://www.github.com/elrizal' target='_blank' rel="noopener noreferrer" > <i id='icons' className='fab fa-github  fa-lg'></i> Github</a>
           </nav>
     </div>
    </div>
    </Menu >
    );
}
export default Hamburger;