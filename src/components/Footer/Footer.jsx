import React from "react";
import './Footer.css';
import ContainerButton from "../ContainerButton/ContainerButton";
import logoFooter from '../../logo_footer.png'
const Footer = () =>{
    return (
        <>
            <ContainerButton/>
            <footer className="footer">
                <div className="logoFooter">
                    <img src={logoFooter} alt="" />
                    <p> Copyright © 2021 Facebook Inc.</p>
                </div>

                <div className="menu_footer">
                    <nav>
                        <p>Documentação</p>
                        <ul>
                            <a href=""><li>Instalação</li></a>
                            <a href=""><li>Princiapis Conceitos</li></a>
                            <a href=""><li>Guias Avançados</li></a>
                            <a href=""><li>Referencias de API</li></a>
                            <a href=""><li>Hooks</li></a>
                            <a href=""><li>Testando</li></a>
                            <a href=""><li>Contribuições</li></a>
                            <a href=""><li>FAQ</li></a>                
                        </ul>
                        <p>Comunidade</p>
                        <ul>
                            <a href=""><li>Código de Conduta</li></a>
                            <a href=""><li>Recursos da Comunidade</li></a>
                        </ul>
                    </nav>
                </div>

                <div className="menu_footer">
                    <nav>
                        <p>Canais</p>
                        <ul>
                            <a href=""><li>GitHub</li></a>
                            <a href=""><li>StackOverflow</li></a>
                            <a href=""><li>Fóruns e discursões</li></a>
                            <a href=""><li>Rectiflux Chat</li></a>
                            <a href=""><li>Comunidade DEV</li></a>
                            <a href=""><li>Facebook</li></a>
                            <a href=""><li>Twitter</li></a>
                        </ul>

                        <p>Mais</p>
                        <ul>
                            <a href=""><li>Tutorial</li></a>
                            <a href=""><li>Blog</li></a>
                            <a href=""><li>Agradecimentos</li></a>
                            <a href=""><li>React Native</li></a>
                            <a href=""><li>Comunidade DEV</li></a>
                            <a href=""><li>Privacidade</li></a>
                            <a href=""><li>Termos</li></a>
                        </ul>
                    </nav>
                    <nav>
                        <p>Canais</p>
                        <ul>
                            <a href=""><li>GitHub</li></a>
                            <a href=""><li>StackOverflow</li></a>
                            <a href=""><li>Fóruns e discursões</li></a>
                            <a href=""><li>Rectiflux Chat</li></a>
                            <a href=""><li>Comunidade DEV</li></a>
                            <a href=""><li>Facebook</li></a>
                            <a href=""><li>Twitter</li></a>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
}

export default Footer;