import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {




    return(
        <nav className="navbar">
            <h1>Izmjena</h1>
		
            <form className="container-fluid justify-content-start">
                <div className="order-2 text-center">
                    
                <Link to="/" ><button className="btn" type="button">NASLOVNA</button></Link> 
                <Link to="/foto" ><button className="btn" type="button">FOTO GALERIJA</button></Link>
                <Link to="/video" ><button className="btn" type="button">VIDEO GALERIJA</button></Link>
                <Link to="/blog" ><button className="btn" type="button">BLOG</button></Link>
                <Link to="/kontakt" ><button className="btn" type="button">KONTAKT</button></Link>
                </div>	
                <a className="ms-auto me-auto logo order-md-2 me-md-0"> <img src="img/astalogo.png"/> </a>
            
            </form>	
		
		
		</nav>
    );
};

export default Header;