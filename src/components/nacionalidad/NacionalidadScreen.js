import React from 'react';
import { NavbarScreen } from '../ui/NavbarScreen';
import { useDispatch, useSelector } from 'react-redux';
import './nacionalidad.css';
import { NacionalidadModal } from './NacionalidadModal';
import { uiOpenModal } from '../../actions/ui';




export const NacionalidadScreen = () => {

    const dispatch = useDispatch();
    const onDoubleClick = (e) => {
        // console.log(e);
        console.log("doble")
        dispatch( uiOpenModal() );
    }



    
   
    return (
        <div>
            <NavbarScreen />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2>fdvofvikdfmk</h2>

                        <div className="table-responsive-xl">
                            <table className="table blanca">
                                <thead className="bg-dark">
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Editar</th>
                                    <th scope="col">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-info">
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td                                     
                                    onDoubleClickEvent={ onDoubleClick }
                                    ><i   className="far fa-edit azul"></i></td>
                                    <td><i className="fas fa-trash-alt rojo"></i></td>
                                    </tr>                                
                                </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>

            <NacionalidadModal />
        </div>
    )
}
