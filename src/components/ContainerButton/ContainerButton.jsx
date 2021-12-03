import React from "react";
import './ContainerButton.css';

const ContainerButton = ()=>{
    return (
        <>
            <div className="bannerButtons">
                    <button>Comece a Usar</button>
                    <a href="">Faça o Tutorial <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg></a>
                </div>
        </>
    )
}

export default ContainerButton;