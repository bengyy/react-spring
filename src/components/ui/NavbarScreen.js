import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const NavbarScreen = () => {
    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
    }
    return (
        <div className="navbar navbar-dark bg-dark mb-4">        
            <span className="navbar-brand">
                { name }
            </span>
            <span className="navbar-brand">
                <a className="navbar-brand" href="/">
                    <i className="fas fa-home"></i></a>
            </span>
            <span className="navbar-brand">
            <a className="navbar-brand" href="/nac">Nacionalidad</a>
            </span>
            <span className="navbar-brand">
                <a className="navbar-brand" href="/empleado">Empleado</a>
            </span>
            <span className="navbar-brand">
                <a className="navbar-brand" href="/dtoemp">Datos Empleado</a>
            </span>
            <span className="navbar-brand">
                <a className="navbar-brand" href="/ncaion">Datos Empleado</a>
            </span>
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
                        to="/ncaion"
                    >
                        DTO
                    </NavLink>
                    
                </div>
            </div>
            <button 
                className="btn btn-outline-danger"
                onClick={ handleLogout }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>

        </div>
    )
}
