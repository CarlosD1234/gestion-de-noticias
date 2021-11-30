import { Routes, Route } from 'react-router-dom';
import App from '../components/gestorNoticias/App';
import { Navbar } from '../components/ui/Navbar';
import { InicioScreen } from '../components/inicio/InicioScreen';
import NoticiasEtiquetadas from '../components/etiquetadas/NoticiasEtiquetadas';
import EtiquetarNoticias from '../components/etiquetar/EtiquetarNoticias'

export const DashboardRoutes = () => {
    return ( 
        <>
        <Navbar/>
        <Routes>
            <Route path="" element={<InicioScreen/>} />
            <Route path="gestor-de-noticias" element={<App/>} />
            <Route path="etiquetar-noticias" element = {<EtiquetarNoticias/>}/>
            <Route path="noticias-etiquetadas" element = {<NoticiasEtiquetadas/>}/>
            <Route path="/" element={<InicioScreen/>} />
        </Routes>
        </>
    );
}