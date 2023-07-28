import { useTranslation } from 'react-i18next'
import React, { useContext, useEffect, useRef, useState } from 'react'
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';
import { AppContext } from '../routes/Root';
import { debugPort } from 'process';
import profileIcon from '../images/loginForm/profileIcon.png'
import jwt_decode from "jwt-decode";
import useOutsideClick from './useOutsideClick';

const Navbar = () => {
    const { jwt, setJwt, username, setUsername, setUserPhoneNumber, setUserFullname } = useContext(AppContext);
    const { t } = useTranslation();
    const { isScreenSmall, setIsScreenSmall } = useContext(AppContext);
    const [decodedJwt, setDecodedJwt] = useState() as any;

    useEffect(() => {
        if (jwt != null) {
            let decodedJwt = jwt_decode(jwt.jwt) as any
            setDecodedJwt(decodedJwt);
            if(setUsername && setUserPhoneNumber && setUserFullname){
                setUsername(decodedJwt.sub);
                setUserFullname(decodedJwt.fullname);
                setUserPhoneNumber(decodedJwt.phone);

            }
        }
    }, [jwt])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 992px)');

        const handleMediaChange = (event: any) => {
            setIsScreenSmall(event.matches);
        };

        setIsScreenSmall(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);


    const ref = useRef(null);

    useOutsideClick(ref, () => {
        const navbarElements = document.getElementsByClassName("navbar-toggler");
        navbarElements[0].classList.add("collapsed")

        const navbarMenuElement = document.getElementById("navbarNavDropdown");
        navbarMenuElement?.classList.remove("show");



    });

    const profileStyles = {
        marginLeft: "-5%",
        marginTop: "10px",
        minWidth: "100%",
      };
      



    return (
        (isScreenSmall ? (<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" ref={ref}>
                <Link className="navbar-brand" to={`./products/?lang=${localStorage.getItem("lang")}`}>Navbar</Link>
                
                {isScreenSmall && (<div className="navbar-language"><LanguageSelector /></div>)}
                <button className="navbar-toggler togglerCustom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon togglerCustom"></span>
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
                        {jwt === null && <div className='loginAndLanguageButtonsContainer'>
                            <Link to={"/login"}><button className='loginButton'>Sign In</button></Link>
                            <Link to={"/register"}><button className='registerButton'>Sign Up</button></Link>
                        </div>}
                        
                    </ul>
                </div>
            </div>
            {jwt != null && decodedJwt != null && <div className='profileButtonsContainer' style={profileStyles}>
                            <div className="dropdownprofile">
                                <div className="dropbtnprofile">
                                    <img src={profileIcon} alt="" className='profileIcon' />
                                    <span className='profileUsername'>{decodedJwt.sub}</span>
                                </div>
                                <div className="dropdown-content-profile">
                                    <Link to={'/profile/123'}><span>Profile</span></Link>
                                    <Link to={''}><span>Logout</span></Link>
                                </div>
                            </div>
                        </div>}
        </nav>) :
            (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={`./products/?lang=${localStorage.getItem("lang")}`}>Navbar</Link>

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
                    {jwt === null && <div className='loginAndRegisterMobile'>
                        <div className="navbar-language"><LanguageSelector /></div>
                        <Link to={"/login"}><button className='loginButton'>Sign In</button></Link>
                        <Link to={"/register"}><button className='registerButton'>Sign Up</button></Link>
                    </div>}
                    {jwt != null && decodedJwt != null && <div className='profileButtonsContainer'>
                        <div className="navbar-language"><LanguageSelector /></div>
                        <div className="dropdownprofile">
                            <div className="dropbtnprofile">
                                <img src={profileIcon} alt="" className='profileIcon' />
                                <span className='profileUsername'>{decodedJwt.sub}</span>
                            </div>
                            <div className="dropdown-content-profile">
                                <Link to={'/profile/123'}><span>Profile</span></Link>
                                <Link to={''}><span>Logout</span></Link>
                            </div>
                        </div>
                    </div>}

                </nav>)

        )
    )
}

export default Navbar;