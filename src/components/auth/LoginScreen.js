import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, dispatch } from 'react-redux';

import './Login.css';
import { startLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'benito',
        lPassword: '12345'
    });

    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();        
        dispatch( startLogin( lEmail, lPassword ) );
    }
    

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-4 offset-md-4 login-form-1 ">
                <h3>Login</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={ lEmail }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={ lPassword }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btn btn-primary form-control"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
     )
}
