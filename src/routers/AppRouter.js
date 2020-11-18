import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginScreen } from '../components/auth/LoginScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { RegEmpleadoScreen } from '../components/nacionalidad/RegEmpleadoScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { DatosEmpleadoScreen } from '../components/datosEmpleado/DatosEmpleadoScreen';
import { EmpleadoScreen } from '../components/empleado/EmpleadoScreen';
  

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch]);

    if ( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                            exact 
                            path="/login" 
                            component={ LoginScreen }     
                            isAuthenticated={ !!uid }                   
                    />

                    <PrivateRoute 
                            exact 
                            path="/nac" 
                            component={ HomeScreen } 
                            isAuthenticated={ !!uid }
                    />  

                    <PrivateRoute 
                            
                            path="/" 
                            component={ RegEmpleadoScreen } 
                            isAuthenticated={ !!uid }
                    />  
                    <PrivateRoute 
                            
                            path="/empleado" 
                            component={ EmpleadoScreen } 
                            isAuthenticated={ !!uid }
                    />  
                    <PrivateRoute 
                            
                            path="/dtoemp" 
                            component={ DatosEmpleadoScreen } 
                            isAuthenticated={ !!uid }
                    />  
                    
                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}
