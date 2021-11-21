import React, { Fragment, useState } from 'react';
import News from '../News'
import '../../style/App.css'


function App() {

  /* NOTICIAS EN GENERAL */

  const [news, setNews] = useState([]);

  /* API NOTICIAS */
  const consultarApi = async () => {
    const api = await fetch ("http://webhose.io/filterWebContent?token=b1f282e4-542e-4401-b648-e84962baa0ec&q=site_type:news%20country:CL");
    const newsFullContent = await api.json();
    const news = newsFullContent.posts;

    //Aqui agrega campos al objeto, pero creo que no era la manera correcta, revisar
    news.map( news => (
      news.etiqueta ="",
      news.comentario = ""
    ));
    //console.log(news);
    setNews(news)
  };
  
  return (
    <Fragment>

        <h1 className = "titulo"><span>Ge</span>stor de <span>N</span>oticias <span>N</span>acionales</h1>
        <div style = {{textAlign:"center"}}>
          <button onClick = {consultarApi} className= "refreshButton">
            Actualizar
          </button>
        </div>
        <section>
          {news.map( noticia => (
            <News
              key = {noticia.uuid}
              noticia = {noticia}
            />
          ))}
        </section>
    </Fragment>
  );
}

export default App;
