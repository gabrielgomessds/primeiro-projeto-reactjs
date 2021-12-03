import React from "react";
import './Info.css'
const Info = () =>{
    return(
        <>
            <section className="infoContainer">
                <div className="info">
                    <p className="titleInfo">Declarativo</p>
                    <p className="textInfo">
                        React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.
                    </p>
                    <p className="textInfo">Views declarativas fazem com que seu código seja mais previsível e simples de depurar.</p>
                </div>


                <div className="info">
                    <p className="titleInfo">Baseado em componentes</p>
                    <p className="textInfo">
                            Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas.
                    </p>
                    <p className="textInfo">Como a lógica do componente é escrita em JavaScript e não em templates, você pode facilmente passar diversos tipos de dados ao longo da sua aplicação e ainda manter o estado fora do DOM.</p>
                </div>


                <div className="info">
                    <p className="titleInfo">Aprenda uma vez, use em qualquer lugar</p>
                    <p className="textInfo">
                        Não fazemos suposições sobre as outras tecnologias da sua stack, assim você pode desenvolver novos recursos com React sem reescrever o código existente.
                    </p>
                    <p className="textInfo"> O React também pode ser renderizado no servidor, usando Node, e ser usado para criar aplicações mobile, através do <a href="#">React Native</a>.</p>
                </div>
                
            </section>
        </>
    )
}

export default Info;