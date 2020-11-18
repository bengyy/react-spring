import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DatosEmpleadoScreen } from '../components/datosEmpleado/DatosEmpleadoScreen'
import { EmpleadoScreen } from '../components/empleado/EmpleadoScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { NacionalidadScreen } from '../components/nacionalidad/NacionalidadScreen';
import { RegEmpleadoScreen } from '../components/nacionalidad/RegEmpleadoScreen'
import { NavbarScreen } from '../components/ui/NavbarScreen';
import { Navbar } from '../components/ui/Navbar';

export const HomeRouter = () => {
    return (
        <>
        <Navbar />

        <div className="container mt-2">
            <Switch>
                <Route exact path="/home" component={ HomeScreen } />
                <Route exact path="/nac" component={ RegEmpleadoScreen } />
                <Route exact path="/empleado" component={ EmpleadoScreen } />
                <Route exact path="/dtoemp" component={ DatosEmpleadoScreen } />
                <Route exact path="/ncaion" component={ NacionalidadScreen } />
                

                <Redirect to="/" />
            </Switch>
        </div>


    </>
    )
}
