import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        console.log('salir');
        //localStorage.clear();        
        dispatch( startLogout() );
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <span className="navbar-brand">
                    { name }
                </span>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/nac"
                    >
                        Nacionalidad
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/empleado"
                    >
                        Empleados
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dtoemp"
                    >
                        Datos Empleados
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">                    
                    <button 
                        className="btn btn-outline-danger"
                        onClick={ handleLogout }
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Salir</span>
                    </button>
                </ul>
            </div>
        </nav>
    )
}