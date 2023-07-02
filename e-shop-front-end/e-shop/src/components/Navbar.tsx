import { useTranslation } from 'react-i18next'
import React, { useContext, useEffect, useState } from 'react'
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';
import { AppContext } from '../routes/Root';

const Navbar = () => {
    const { t } = useTranslation();
    const { isScreenSmall, setIsScreenSmall } = useContext(AppContext);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
  
      const handleMediaChange = (event : any) => {
        setIsScreenSmall(event.matches);
      };
  
      setIsScreenSmall(mediaQuery.matches);
  
      mediaQuery.addEventListener('change', handleMediaChange);
  
      return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
      };
    }, []);
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={`./products/?lang=${localStorage.getItem("lang")}`}>Navbar</Link>
                { isScreenSmall && (<div className="navbar-language"><LanguageSelector/></div>)}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'home/'} className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;