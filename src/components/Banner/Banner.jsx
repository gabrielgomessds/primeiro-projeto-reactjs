import React from "react";
import ContainerButton from '../ContainerButton/ContainerButton';
import './Banner.css'

const Banner = () =>{
    return(
       <>
           <section className="banner">
               <h1>React</h1>
               <p>Uma biblioteca JavaScript para criar interfaces de usuário</p>
                <ContainerButton/>
           </section>
       </>
    )
}

export default Banner;