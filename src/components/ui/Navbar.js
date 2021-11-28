import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../style/Navbar.css';

export const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () =>{
         navigate('/login',{
             replace: true
        });
        
    }

    return (
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <span className= "nav-title">GeNN</span>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 

                        className="nav-item nav-link" 
                        to="/gestor-de-noticias"
                    >
                        Gestor de noticias
                    </NavLink>

                    <NavLink 

                        className="nav-item nav-link" 
                        to="/etiquetar-noticias"
                    >
                        Etiquetar noticias
                    </NavLink>

                    <NavLink 

                        className="nav-item nav-link" 
                        to="/noticias-etiquetadas"
                    >
                        Noticias etiquetadas
                    </NavLink>


                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className ="nav-item nav-link text-info">
                        ADMIN
                    </span>
                    <button 
                        className="nav-item nav-link btn btn-danger" 
                        onClick = { handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}