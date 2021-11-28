import React from 'react';
import '../../style/Home.css';


export const InicioScreen = () => {


    const pathimg = "/img/GN.svg"

    return (
        <div>
            <div>
                <h1 className="h1-home">Gestión y etiquetado de noticias</h1>

            </div>
            
            <div id="parent">
                <div className="left " >
                    <div className="comofunciona">

                        <h2>
                            ¿Cómo funciona?
                        </h2>
                        <p>
                            <li>
                                En el <b>Gestor de noticias</b> se deben elegir las noticias para etiquetar.
                            </li>
                            <li>
                                En <b>Etiquetar noticias</b> se deben etiquetar estas noticias para analizarlas.
                            </li>
                            <li>
                                Finalmente en <b>Noticias etiquetadas</b> se deben analizar las noticias.
                            </li>
                        </p>
                    </div>
                </div>
                <div className="right">

                    <img src={pathimg} alt="IMG COMO FUNCIONA"/>
                </div>
            </div>


        </div>
        
    )
}