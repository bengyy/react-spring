import React, { Component } from 'react';
import { NavbarScreen } from '../ui/NavbarScreen';
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './regNAcionalida.css';

const baseURL = process.env.REACT_APP_API_URL;

export class RegEmpleadoScreen extends Component{

    state={
        data:[],
        modalInsertar: false,
        modalEliminar: false,
        form:{
            idNacionalidad: '',
            strValor: '',
            tipoModal: ''
          }
    }

   

    
    peticionGet=()=>{
        const url = `${baseURL}/nacionalidad/get`;
        
        axios.get(url).then(response=>{
            this.setState({data: response.data});
          }).catch(error=>{
            console.log(error.message);
          })
    }
                
    
    peticionPost=async()=>{
      const token = localStorage.getItem('token') || '';
      const url = `${baseURL}/nacionalidad/create`;
      
      delete this.state.form.idNacionalidad;
      
     await axios.post(url,this.state.form,{headers: {
      'Content-Type': 'application/json',      
      'Authorization':  'Bearer '+ token
     } }).then(response=>{
        this.modalInsertar();
        this.peticionGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
        
    peticionPut=()=>{
      console.log('actualizar')
      const token = localStorage.getItem('token') || '';      
      const url = `${baseURL}/nacionalidad/update/`;
      console.log(url+this.state.form.idNacionalidad)
      axios.put(url+this.state.form.idNacionalidad, this.state.form,{headers: {
        'Content-Type': 'application/json',      
        'Authorization':  'Bearer '+ token
       } }).then(response=>{
          this.modalInsertar();
          this.peticionGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
        
    peticionDelete=()=>{
      
      const token = localStorage.getItem('token') || '';
      const url = `${baseURL}/nacionalidad/delete/`;
      console.log(url+this.state.form.idNacionalidad)
      axios.delete(url+this.state.form.idNacionalidad,{headers: {
        'Content-Type': 'application/json',      
        'Authorization':  'Bearer '+ token
      } }).then(response=>{
      this.setState({modalEliminar: false});
      this.peticionGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
        
    modalInsertar=()=>{
      this.setState({modalInsertar: !this.state.modalInsertar});
    }
        
    seleccionarEmpresa=(empresa)=>{
      this.setState({
        tipoModal: 'actualizar',
        form: {
          idNacionalidad: empresa.idNacionalidad,
          strValor: empresa.strValor
        }
      })
      
      console.log(this.state.form.tipoModal)
      console.log(this.state.modalInsertar)
      console.log(this.state.modalEliminar)
    }
        
        handleChange=async e=>{
        e.persist();
        await this.setState({
          form:{
            ...this.state.form,
            [e.target.name]: e.target.value
          }
        });        
        }
        
          componentDidMount() {
            this.peticionGet();
          }
          
        
          render(){
            const {form}=this.state;
          return (
            <div className="App">              
              <div className="col-4 offset-4">
               <h1>Nacionalidad</h1>
              </div>
              <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar </button>
              <br /><br />
                <table className="table ">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map(empresa=>{
                      return(
                        <tr key={empresa.idNacionalidad}>
                      <td>{empresa.idNacionalidad}</td>
                      <td>{empresa.strValor}</td>
                      
                      <td>
                            <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(empresa); this.modalInsertar()}}>
                                <i className="far fa-edit "></i>
                            </button>
                            {"   "}
                            <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(empresa); this.setState({modalEliminar: true})}}>
                                <i className="fas fa-trash-alt"></i>
                            </button>
                            </td>
                      </tr>
                      )
                    })}
                  </tbody>
                </table>
            
            
            
              <Modal isOpen={this.state.modalInsertar}>
                            <ModalHeader style={{display: 'block'}}>
                              <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                            </ModalHeader>
                            <ModalBody>
                              <div className="form-group">
                                <label htmlFor="id">ID</label>
                                <input className="form-control" type="text" name="idNacionalidad" id="idNacionalidad" readOnly onChange={this.handleChange} value={form?form.idNacionalidad: this.state.data.length+1}/>
                                <br />
                                <label htmlFor="nombre">Nombre</label>
                                <input className="form-control" type="text" name="strValor" id="strValor" onChange={this.handleChange} value={form?form.strValor: ''}/>
                                <br />
                              
                              </div>
                            </ModalBody>
            
                            <ModalFooter>
                              {this.state.tipoModal==='insertar'?
                                <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                                Insertar
                              </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                                Actualizar
                              </button>
              }
                                <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                            </ModalFooter>
                      </Modal>
            
            
              <Modal isOpen={this.state.modalEliminar}>
                        <ModalBody>
                          Estás seguro que deseas eliminar a la nacionalidad {form && form.strValor}
                        </ModalBody>
                        <ModalFooter>
                          <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
                          <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
                        </ModalFooter>
                      </Modal>
          </div>
        );
    }  
}



