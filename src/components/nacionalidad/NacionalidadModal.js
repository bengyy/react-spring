import React, { useState } from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';


import { uiCloseModal } from '../../actions/ui';

import './nacionalidad.css';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root');

export const NacionalidadModal = () => {

    
    const { modalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        idNacionalidad: Number,
        strValor: ''
    }); 
    const [ strValorValid, setstrValorValid ] = useState(true);


    const { idNacionalidad, strValor} = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }


    const closeModal = ()=>{
        console.log("cerrado")
        dispatch( uiCloseModal() );
     }


    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        if ( strValor.trim().length < 2 ) {
            return setstrValorValid(false);
        }

   
        setstrValorValid(true);
        closeModal();
    }

    return (
        <Modal
        isOpen={ modalOpen }
        onRequestClose={closeModal}
        closeTimeoutMS= { 200 }
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={ handleSubmitForm } >

          
            <div className="form-group">
                <label> Nacionalidad </label>
                <input 
                    type="text" 
                    className={ `form-control ${ !strValorValid && 'is-invalid' } `}
                    placeholder="Nacionalidad"
                    name="strValor"
                    value= { strValor }
                    autoComplete="off"
                    onChange= {handleInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

           

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
      </Modal>
    )
}
