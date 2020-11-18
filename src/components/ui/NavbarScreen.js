import React from 'react';
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
            <a className="navbar-brand" href="./nac">Nacionalidad.</a>
            </span>
            <span className="navbar-brand">
            <a className="navbar-brand" href="../nac">Nacionalidad..</a>
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
