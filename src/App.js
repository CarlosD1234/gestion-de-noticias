import React, { Fragment, useState, useEffect } from 'react';
import News from './components/News'

function App() {

  
  const [news, setNews] = useState([]);

  const consultarApi = async () => {
    const api = await fetch ("http://webhose.io/filterWebContent?token=b1f282e4-542e-4401-b648-e84962baa0ec&q=site_type:news%20country:CL");
    const newsFullContent = await api.json();
    const news = newsFullContent.posts;

    //Aqui agrega campos al objeto, pero creo que no era la manera correcta, revisar
    news.map( news => (
      news.etiqueta ="",
      news.comentario = ""
    ));
    console.log(news);
    setNews(news)
  };

  useEffect ( () => {
    consultarApi();
  }, []);

  
  return (
    <Fragment>

        <p>Noticias</p>

        <button onClick = {consultarApi}>
          Refresh
        </button>

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
