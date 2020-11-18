import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
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
                        Empleado
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/empleado"
                    >
                        Datos Empleado
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Salir
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}