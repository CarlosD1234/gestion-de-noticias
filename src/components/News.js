import React from 'react';
import '../style/News.css'

const News = ({noticia}) => {

    const imagen = noticia.thread.main_image;
    const alt = noticia.thread.site_categories[0];
    return (
        <div className ="container-news">
            <div className ="line"></div>
            <h1 className = "titulo">{noticia.title}</h1>
            <img src= {imagen} alt={alt}/>
            <a className = "link" href={noticia.url}>Más información aquí</a>
            <p className = "parrafo">{noticia.text}</p>
            <form className ="">
                <button>
                    Subir
                </button>
                <input
                    type = "text"
                    name = "etiqueta"
                    placeholder = "Etiqueta"
                    className = "etiqueta"
                />
                <textarea
                    type = "text"
                    name = "mascota"
                    placeholder = "Inserte comentario..."
                    className = "u-full-width"
                ></textarea>
            </form>
        </div>
    );
}

export default News;