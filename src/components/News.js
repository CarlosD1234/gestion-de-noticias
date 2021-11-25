import React from 'react';

import { handleEdit } from '../utility';

import '../style/News.css'

//APP -> INDIVIDUAL NEWS -> FORMULARIO
const News = ({noticia}) => {

    /* INFO NOTICIA IMAGEN */
    const imagen = noticia.thread.main_image;
    const alt = noticia.thread.site_categories[0];

    /* SUBMIT NEWS */
    const submitInfo = e => {
        e.preventDefault();

        //Agrega la noticia a EtiquetaNoticias
        //se mantienen los formatos de comentario y etiqueta como ""
        handleEdit(noticia);
        alert("Puedes ver la noticia en el apartado 'Etiquetar noticias'")

    }

    return (
        <div className ="container-news">

            <div className ="line"></div>
            <h1 className = "titulo-noticia">{noticia.title}</h1>
            <img src= {imagen} alt={alt}/>
            <a className = "link" href={noticia.url}>Más información aquí</a>
            <p className = "parrafo">{noticia.text}</p>
            
            <form onSubmit = {submitInfo}>
                <button className="button-upload">Subir noticia</button>
            </form>

        </div>
    );
}

export default News;