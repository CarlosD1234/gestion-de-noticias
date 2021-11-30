import React, { Fragment, useState, useEffect } from 'react';
import News from '../News'
import '../../style/App.css'


function App() {

  let noticiasActuales = JSON.parse(localStorage.getItem('news'));
  if(!noticiasActuales){
    noticiasActuales = [];
  }

  /* NOTICIAS EN GENERAL */

  const [news, setNews] = useState(noticiasActuales);

  /* LOCAL STORAGE ALL NEWS */
  useEffect ( () => {
    if (noticiasActuales) {
      localStorage.setItem('news',JSON.stringify(news))
    } else {
      localStorage.setItem('news', JSON.stringify([]));
    }

  }, [news,noticiasActuales] );

  /* API NOTICIAS */
  const consultarApi = async () => {
    const api = await fetch ("https://api.webz.io/filterWebContent?token=cfdeea2d-44d7-492c-b1ff-eba011521a89&format=json&sort=crawled&q=site_type%3Anews%20thread.country%3ACL");
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
