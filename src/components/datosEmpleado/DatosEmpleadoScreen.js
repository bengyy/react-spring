import React, { Component } from 'react';
import { NavbarScreen } from '../ui/NavbarScreen';
import axios from "axios";
import Swal from 'sweetalert2';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import'./dtoEmpleado.css';

const baseURL = process.env.REACT_APP_API_URL;



export class DatosEmpleadoScreen extends Component {
state={
  data:[],
  empleados:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    idDatolaboral: '',
    strPuesto: '',
    strEmpresa: '',
    departamento: '',
    dteFechaEntreda: '',
    dceSueldoInicial: '',
    strTelefono: '',
    strDireccion: '',
    strJefeinmediato: '',
    dceSueldoFinal: '',
    dteFechaSalida: '',
    strMotivoSalida: '',
    strHerramienta: '',
    idEmpleado:{
        idEmpleado: 0,
    },
    tipoModal: ''  
  }
}

peticionGet=()=>{
  const token = localStorage.getItem('token') || '';
    const url = `${baseURL}/datoslaborales/get`;
        
    axios.get(url,{headers: {
      'Content-Type': 'application/json',      
      'Authorization':  'Bearer '+ token
     }} ).then(response=>{                        
        this.setState({data: response.data});
      }).catch(error=>{
        console.log(error.message);
      })

}

peticionGetEmpl=()=>{
  const token = localStorage.getItem('token') || '';
  const url = `${baseURL}/empleado/get`;
        
    axios.get(url,{headers: {
      'Content-Type': 'application/json',      
      'Authorization':  'Bearer '+ token
     }}).then(response=>{
        this.setState({empleados: response.data});
      }).catch(error=>{
        console.log(error.message);
      })
}

peticionPost=async()=>{
  const token = localStorage.getItem('token') || '';
    const url = `${baseURL}/datoslaborales/create`;

    if(!this.state.form.idEmpleado || this.state.form.idEmpleado < 1){
      Swal.fire('Error', 'Selecione un empleado', 'error');     
    }else if(!this.state.form.strPuesto || !this.state.form.strEmpresa || !this.state.form.departamento ){
      Swal.fire('Error', 'Agregué un puesto, apellido empresa o departamento', 'error');
    }else if (!this.state.form.dteFechaEntreda || !this.state.form.dceSueldoInicial || !this.state.form.strTelefono){
      Swal.fire('Error', 'Agregué sueldo inicial, telefono o fecha de entrada', 'error');
    } else if(!this.state.form.strDireccion || !this.state.form.strJefeinmediato || !this.state.form.dceSueldoFinal){
      Swal.fire('Error', 'Agregué direción, Jefe Inmediato o sueldo final ', 'error');
    } else if(!this.state.form.dteFechaSalida || !this.state.form.strMotivoSalida || !this.state.form.strHerramienta ){
      Swal.fire('Error', 'Agregué motivo de salida, herramienta o Fecha de salida', 'error');
    }

    const dto ={
            
        strPuesto: this.state.form.strPuesto,
        strEmpresa: this.state.form.strEmpresa,
        departamento: this.state.form.departamento,
        dteFechaEntreda: this.state.form.dteFechaEntreda,
        dceSueldoInicial: this.state.form.dceSueldoInicial,
        strTelefono: this.state.form.strTelefono,
        strDireccion: this.state.form.strDireccion,
        strJefeinmediato: this.state.form.strJefeinmediato,
        dceSueldoFinal: this.state.form.dceSueldoFinal,
        dteFechaSalida: this.state.form.dteFechaSalida,
        strMotivoSalida: this.state.form.strMotivoSalida,
        strHerramienta: this.state.form.strHerramienta,
        idEmpleado:{
            idEmpleado:  parseFloat(this.state.form.idEmpleado) 
        }
    
    }


 await axios.post(url,dto,{headers: {
  'Content-Type': 'application/json',      
  'Authorization':  'Bearer '+ token
 }} ).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
  
}

peticionPut=()=>{
  const token = localStorage.getItem('token') || '';
  const url = `${baseURL}/datoslaborales/update/`;

  if(!this.state.form.idEmpleado || this.state.form.idEmpleado < 1){
    Swal.fire('Error', 'Selecione un empleado', 'error');     
  }else if(!this.state.form.strPuesto || !this.state.form.strEmpresa || !this.state.form.departamento ){
    Swal.fire('Error', 'Agregué un puesto, apellido empresa o departamento', 'error');
  }else if (!this.state.form.dteFechaEntreda || !this.state.form.dceSueldoInicial || !this.state.form.strTelefono){
    Swal.fire('Error', 'Agregué sueldo inicial, telefono o fecha de entrada', 'error');
  } else if(!this.state.form.strDireccion || !this.state.form.strJefeinmediato || !this.state.form.dceSueldoFinal){
    Swal.fire('Error', 'Agregué direción, Jefe Inmediato o sueldo final ', 'error');
  } else if(!this.state.form.dteFechaSalida || !this.state.form.strMotivoSalida || !this.state.form.strHerramienta ){
    Swal.fire('Error', 'Agregué motivo de salida, herramienta o Fecha de salida', 'error');
  }

  const dto ={              
    strPuesto: this.state.form.strPuesto,
    strEmpresa: this.state.form.strEmpresa,
    departamento: this.state.form.departamento,
    dteFechaEntreda: this.state.form.dteFechaEntreda,
    dceSueldoInicial: this.state.form.dceSueldoInicial,
    strTelefono: this.state.form.strTelefono,
    strDireccion: this.state.form.strDireccion,
    strJefeinmediato: this.state.form.strJefeinmediato,
    dceSueldoFinal: this.state.form.dceSueldoFinal,
    dteFechaSalida: this.state.form.dteFechaSalida,
    strMotivoSalida: this.state.form.strMotivoSalida,
    strHerramienta: this.state.form.strHerramienta,
    idEmpleado:{
        idEmpleado:  parseFloat(this.state.form.idEmpleado.idEmpleado) 
    }

}
/*
console.log(this.state.form.idEmpleado.idEmpleado)
if(this.state.form.idEmpleado.idEmpleado > 0){
    
  dto.idEmpleado.idEmpleado = this.state.form.idEmpleado; 
}
*/
  axios.put(url+this.state.form.idDatolaboral, dto,{headers: {
    'Content-Type': 'application/json',      
    'Authorization':  'Bearer '+ token
   }} ).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
  
}

peticionDelete=(empresa)=>{
  const token = localStorage.getItem('token') || '';
    const url = `${baseURL}/datoslaborales/delete/`;

    const datoEliminar = "*se elimina el empleado: " +empresa.idEmpleado.strNombre + " " + empresa.idEmpleado.strAPaterno+ " " + empresa.idEmpleado.strAMaterno+
    " con el puesto "+ empresa.strPuesto+" en el departamento de " + empresa.departamento;
  Swal
    .fire({
        title: "Eliminar",
        type: 'warning',
        text: datoEliminar,
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            // Hicieron click en "Sí"
            axios.delete(url+empresa.idDatolaboral,{headers: {
              'Content-Type': 'application/json',      
              'Authorization':  'Bearer '+ token
             } }).then(response=>{
              this.setState({modalEliminar: false});
              this.peticionGet();
            })            
        } else {
            // Dijeron que no
            console.log("*NO se elimino*");
        }
    });
/*
  axios.delete(url+this.state.form.idDatolaboral,{headers: {
    'Content-Type': 'application/json',      
    'Authorization':  'Bearer '+ token
   }} ).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
  })
  */
}

modalInsertar=()=>{
  this.peticionGetEmpl();
  this.setState({modalInsertar: !this.state.modalInsertar});
}
//Encargado de editar
seleccionarEmpresa=(empresa)=>{
  
 // console.log(this.state.form.strEmpresa)
  this.setState({
    tipoModal: 'actualizar',
    form: {
      idDatolaboral: empresa.idDatolaboral,
      strPuesto: empresa.strPuesto,
      strEmpresa: empresa.strEmpresa,
      departamento: empresa.departamento,
      dteFechaEntreda: empresa.dteFechaEntreda,
      dceSueldoInicial: empresa.dceSueldoInicial,
      strTelefono: empresa.strTelefono,
      strDireccion: empresa.strDireccion,
      strJefeinmediato: empresa.strJefeinmediato,
      dceSueldoFinal: empresa.dceSueldoFinal,
      dteFechaSalida: empresa.dteFechaSalida,
      strMotivoSalida: empresa.strMotivoSalida,
      strHerramienta: empresa.strHerramienta,
      idEmpleado:{
          idEmpleado : empresa.idEmpleado.idEmpleado
      }
    }
  })
  if(!this.state.modalInsertar){

    setTimeout(function() {
        
      const strPuesto = document.getElementById('strPuesto');
      const strEmpresa = document.getElementById('strEmpresa');
      const departamento = document.getElementById('departamento');
      const dteFechaEntreda = document.getElementById('dteFechaEntreda');
      const dceSueldoInicial = document.getElementById('dceSueldoInicial');
      const strTelefono = document.getElementById('strTelefono');
      const strDireccion = document.getElementById('strDireccion');
      const strJefeinmediato = document.getElementById('strJefeinmediato');
      const dceSueldoFinal = document.getElementById('dceSueldoFinal');
      const dteFechaSalida = document.getElementById('dteFechaSalida');
      const strMotivoSalida = document.getElementById('strMotivoSalida');
      const strHerramienta = document.getElementById('strHerramienta');
      
      strEmpresa.readOnly = false;
      strPuesto.readOnly = false;
      departamento.readOnly = false;
      dteFechaEntreda.readOnly = false;
      dceSueldoInicial.readOnly = false;
      strTelefono.readOnly = false;
      strDireccion.readOnly = false;
      strJefeinmediato.readOnly = false;
      dceSueldoFinal.readOnly = false;
      dteFechaSalida.readOnly = false;
      strMotivoSalida.readOnly = false;
      strHerramienta.readOnly = false;
    }, 1000);    
  }
  
}

habilitarControles=() =>  {
  
  const strPuesto = document.getElementById('strPuesto');
  const strEmpresa = document.getElementById('strEmpresa');
  const departamento = document.getElementById('departamento');
  const dteFechaEntreda = document.getElementById('dteFechaEntreda');
  const dceSueldoInicial = document.getElementById('dceSueldoInicial');
  const strTelefono = document.getElementById('strTelefono');
  const strDireccion = document.getElementById('strDireccion');
  const strJefeinmediato = document.getElementById('strJefeinmediato');
  const dceSueldoFinal = document.getElementById('dceSueldoFinal');
  const dteFechaSalida = document.getElementById('dteFechaSalida');
  const strMotivoSalida = document.getElementById('strMotivoSalida');
  const strHerramienta = document.getElementById('strHerramienta');
  
  strEmpresa.readOnly = false;
  strPuesto.readOnly = false;
  departamento.readOnly = false;
  dteFechaEntreda.readOnly = false;
  dceSueldoInicial.readOnly = false;
  strTelefono.readOnly = false;
  strDireccion.readOnly = false;
  strJefeinmediato.readOnly = false;
  dceSueldoFinal.readOnly = false;
  dteFechaSalida.readOnly = false;
  strMotivoSalida.readOnly = false;
  strHerramienta.readOnly = false;
  


}

handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
 
if(this.state.form.tipoModal !== 'actualizar'){
  // && !this.state.form.strNombre      
  if(this.state.form.idEmpleado >= 1) {    
    this.habilitarControles();       
    //const btnReg = document.getElementById('btnReg');
    //btnReg.disabled = false;
  }
}
}


  componentDidMount() {
    this.peticionGet();
  } 

  render(){
    const {form}=this.state;
  return (
      <div>
    
    <div className="col-4 offset-4">
               <h1>Datos Empleado</h1>
              </div>
    <div className="App">
    
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Datos Empleado</button>
  <br /><br />
    <table className="table ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Puesto</th>
          <th>Departamento</th>
          <th>Jefe</th>
          <th>Empleado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(empresa=>{
          return(
            <tr key={empresa.idDatolaboral}>
          <td>{empresa.idDatolaboral}</td>
          <td>{empresa.strPuesto}</td>
          <td>{empresa.departamento}</td>
          <td>{empresa.strJefeinmediato}</td>
          <td>{empresa.idEmpleado.strNombre} {empresa.idEmpleado.strAPaterno} {empresa.idEmpleado.strAMaterno}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(empresa); this.modalInsertar()}}>
                    <i className="far fa-edit"></i>
                </button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.peticionDelete(empresa)}}>
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
                    <div>
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="idDatolaboral" id="idDatolaboral" readOnly onChange={this.handleChange} value={form?form.idDatolaboral: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre">Empleado</label>
                    
                    <select name="idEmpleado" id="idEmpleado" typeof="number" className="form-control" onChange={this.handleChange} value={form?form.idEmpleado.idEmpleado: ''}>
                      <option value="0">--- selecionar un empleado ---</option>
                      {this.state.empleados.map(elemento=>(
                        <option key={elemento.idEmpleado} value={elemento.idEmpleado}>{elemento.strNombre} {elemento.strAPaterno} {elemento.strAMaterno}</option>
                      ))}
                    </select>
                    <br />
                    <label htmlFor="nombre">Puesto</label>
                    <input className="form-control" type="text" name="strPuesto" id="strPuesto" readOnly onChange={this.handleChange} value={form?form.strPuesto: ''}/>
                    <br />
                    <label htmlFor="nombre">Empresa</label>
                    <input className="form-control" type="text" name="strEmpresa" id="strEmpresa" readOnly onChange={this.handleChange} value={form?form.strEmpresa: ''}/>
                    <br />
                    <label htmlFor="capital_bursatil">Departamento</label>
                    <input className="form-control" type="text" name="departamento" id="departamento" readOnly onChange={this.handleChange} value={form?form.departamento:''}/>
                    <br/>

                    <label htmlFor="capital_bursatil">Fecha entrada</label>
                    <input className="form-control" type="date" name="dteFechaEntreda" id="dteFechaEntreda" readOnly onChange={this.handleChange} value={form?form.dteFechaEntreda:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Sueldo Inicial</label>
                    <input className="form-control" type="number" name="dceSueldoInicial" id="dceSueldoInicial" readOnly onChange={this.handleChange} value={form?form.dceSueldoInicial:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Telefono</label>
                    <input className="form-control" type="text" name="strTelefono" id="strTelefono" readOnly onChange={this.handleChange} value={form?form.strTelefono:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Direción</label>
                    <input className="form-control" type="text" name="strDireccion" id="strDireccion" readOnly onChange={this.handleChange} value={form?form.strDireccion:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Jefe Inmediato</label>
                    <input className="form-control" type="text" name="strJefeinmediato" id="strJefeinmediato" readOnly onChange={this.handleChange} value={form?form.strJefeinmediato:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Sueldo Final</label>
                    <input className="form-control" type="number" name="dceSueldoFinal" id="dceSueldoFinal" readOnly onChange={this.handleChange} value={form?form.dceSueldoFinal:''}/>
                    <br/>


                    <label htmlFor="capital_bursatil">Fecha Salida</label>
                    <input className="form-control" type="date" name="dteFechaSalida" id="dteFechaSalida" readOnly onChange={this.handleChange} value={form?form.dteFechaSalida:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Motivo Salida</label>
                    <input className="form-control" type="text" name="strMotivoSalida" id="strMotivoSalida" readOnly onChange={this.handleChange} value={form?form.strMotivoSalida:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Herramienta</label>
                    <input className="form-control" type="text" name="strHerramienta" id="strHerramienta" readOnly onChange={this.handleChange} value={form?form.strHerramienta:''}/>
                    <br/>
                      </div>
                    
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal==='insertar'?
                    <button name="btnReg" id="btnReg" className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button name="btnUpt" id="btnUpt" className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la empresa {form && form.idEmpleado && form.strPuesto}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>


    </div>
  );
}
}
