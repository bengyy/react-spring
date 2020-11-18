import React from 'react'
import { NavbarScreen } from '../ui/NavbarScreen';
import './home.css';

export const HomeScreen = () => {
    return (
        <div>
            
            <div className="container">
                <div className="row centrado">
                    <h2>Este proyecto fue desarrollado por Benito José Martínez Osornio. 
                        <a href="https://drive.google.com/drive/folders/1EKCrzNbJonTAbUPAaJM7l8Hq2Mf9iQAr?usp=sharing"> Documentación</a>
                    </h2>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src="https://www.webcodein.com/wp-content/uploads/2019/11/Spring-Boot-MVC-2.png" width="100%" height="200px"/>
                        <label className="justi">
                        Una API de transferencia de estado representacional (REST), o API de RESTful,
                         es una interfaz de programación de aplicaciones que se ajusta a los límites de 
                         la arquitectura REST.

                        Una API o interfaz de programación de aplicaciones es un conjunto de definiciones
                         y protocolos que se usa para diseñar e integrar el software de aplicaciones.
                         Suele considerarse como el contrato entre un proveedor de información y un usuario,
                         donde se establece el contenido que se requiere del consumidor (la llamada) y el 
                         que necesita el productor (la respuesta). Por ejemplo, una API de servicio 
                         meteorológico podría solicitar que el usuario escribiera un código postal y que el 
                         productor diera una respuesta en dos partes: la primera sería la temperatura máxima
                         y la segunda, la mínima.  
                        </label>
                    </div>
                    <div className="col-4">                    
                    <img src="https://miro.medium.com/max/3840/1*7kkOuLrdX4pCMm-CIemEZw.png" width="100%" height="200px"/>
                        <label className="centrado">
                            Para la elaboración de este proyecto se uilizo MySQL como Base de Datos, para comunicar 
                            la Base de Datos con la aplicacion web se elaboro un Api Rest con Spring Boot con autentificaión
                            JWT para mantenes segura nuestra informaión. Por el lado del Front End se desarrollo la solución
                            en React.
                        </label>
                    </div>
                    <div className="col-4">
                        <img src="https://betabeers.com/uploads/blog/20170420_React_logo_wordmark.png" width="100%" height="200px"/>
                        <label className="justi">
                        React es una biblioteca Javascript de código abierto diseñada para crear interfaces de 
                        usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. 
                        Es mantenido por Facebook y la comunidad de software libre. Han participado en el proyecto 
                        más de mil desarrolladores diferentes.
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
