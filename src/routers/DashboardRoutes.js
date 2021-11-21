import { Routes, Route } from 'react-router-dom';


import App from '../components/gestorNoticias/App';
import { Navbar } from '../components/ui/Navbar';
import { InicioScreen } from '../components/inicio/InicioScreen';
import NoticiasEtiquetadas from '../components/etiquetadas/NoticiasEtiquetadas';
import { About } from '../components/about/About';


export const DashboardRoutes = () => {
    return ( 
        <>
        <Navbar/>
        <Routes>
            <Route path="" element={<InicioScreen/>} />
            <Route path="gestor-de-noticias" element={<App/>} />
            <Route path="noticias-etiquetadas" element = {<NoticiasEtiquetadas/>}/>
            <Route path="about" element={<About/>} />

            <Route path="/" element={<InicioScreen/>} />
        </Routes>
        </>
     );
}