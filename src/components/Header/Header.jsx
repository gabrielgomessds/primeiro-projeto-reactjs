import React from "react";
import Img from '../../reactjs.jpg';
import './Header.css'
import iconLanguages from '../../translate.svg';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="logoHeader">
                    <img src={Img} alt="" /> <h3>React</h3>
                </div>
                <div className="menuHeader">
                    <nav>
                        <ul>
                            <a href=""><li> Documentação</li></a>
                            <a href=""><li>Tutorial</li></a>
                            <a href=""><li>Blog</li></a>
                            <a href=""><li>Comunidade</li></a>
                        </ul>
                        <div className="containerInputSearch"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg><input type="text" className="inputSearch" placeholder="Buscar docs" />
                        </div>
                        <div className="versionHeader">
                            <a href="">v17.0.2</a>
                           
                            <a href="" >
                                 <img src={iconLanguages} alt="" /> Languages
                            </a>

                            <a href="" className="arrow-up">GitHub <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                            </svg></a>
                        </div>
                    </nav>
                </div>


            </header>
        </>
    );
}

export default Header;