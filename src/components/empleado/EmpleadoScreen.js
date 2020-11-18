import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { NavbarScreen } from '../ui/NavbarScreen';
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './empleado.css';




const baseURL = process.env.REACT_APP_API_URL;


export class EmpleadoScreen extends Component {

 

state={
  data:[],
  nacionalidades:[],
  btnReg: false,
  modalInsertar: false,
  modalEliminar: false,  
  form:{
    idEmpleado: Number,
    strNombre: '',
    strAPaterno: '',
    strAMaterno: '',
    dteFechaNaci: '',
    intEdad: Number,
    strSexo: '',
    dceEstatura: Number,
    dcePeso: Number,
    strAlergia: '',
    strRfc: '',
    strCurp: '',
    strNss: '',
    idNacionalidad: {
      idNacionalidad: 0,
      strValor: ' ',
    },
    tipoSangre: '',
    Nacionalidad: '',
    tipoModal: ''             
  }
}

//options = this.state.nacionalidades;
peticionGetNac=()=>{
  const url = `${baseURL}/nacionalidad/get`;  
  axios.get(url).then(response=>{   
      this.setState({nacionalidades: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
}

peticionGet=()=>{
  const token = localStorage.getItem('token') || '';
    const url = `${baseURL}/empleado/get`;
        
    axios.get(url,{headers: {
      'Content-Type': 'application/json',      
      'Authorization':  'Bearer '+ token
     }} ).then(response=>{                 
        this.setState({data: response.data});        
      }).catch(error=>{
        console.log(error.message);
      })

}

peticionPost=async()=>{
  
  const token = localStorage.getItem('token') || '';
  const url = `${baseURL}/empleado/create/`;

  if(!this.state.form.idNacionalidad || this.state.form.idNacionalidad < 1){
    Swal.fire('Error', 'Selecione una nacionalidad', 'error');     
  }else if(!this.state.form.strAMaterno || !this.state.form.strNombre || !this.state.form.strAPaterno ){
    Swal.fire('Error', 'Agregué un Nombre, apellido paterno o materno', 'error');
  }else if (!this.state.form.dteFechaNaci || !this.state.form.intEdad || !this.state.form.strSexo){
    Swal.fire('Error', 'Agregué Edad, sexo o fecha de nacimiento', 'error');
  } else if(!this.state.form.dceEstatura || !this.state.form.dcePeso || !this.state.form.strAlergia){
    Swal.fire('Error', 'Agregué estatura, peso o alergía ', 'error');
  } else if(!this.state.form.strRfc || !this.state.form.strCurp || !this.state.form.strNss || !this.state.form.tipoSangre
  ){
    Swal.fire('Error', 'Agregué RFC, CURP, NSS o Tipo de sangre', 'error');
  }
   const ob= {
      idEmpleado: this.state.form.idEmpleado,          
      strNombre: this.state.form.strNombre,
      strAPaterno: this.state.form.strAPaterno,
      strAMaterno: this.state.form.strAMaterno,
      dteFechaNaci: this.state.form.dteFechaNaci,
      intEdad: this.state.form.intEdad,
      strSexo: this.state.form.strSexo,
      dceEstatura: this.state.form.dceEstatura,
      dcePeso: this.state.form.dcePeso,
      strAlergia: this.state.form.strAlergia,
      strRfc: this.state.form.strRfc,
      strCurp: this.state.form.strCurp,
      strNss: this.state.form.strNss,
      idNacionalidad: {
        idNacionalidad: parseFloat(this.state.form.idNacionalidad),
        strValor: ''
    },      
      tipoSangre: this.state.form.tipoSangre
    }
  
  delete this.state.form.idEmpleado;
  delete ob.idEmpleado;
  delete ob.Nacionalidad;

  
 await axios.post(url,ob,{headers: {
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
  const url = `${baseURL}/empleado/update/`;
  
  if(!this.state.form.idNacionalidad || this.state.form.idNacionalidad < 1){
    Swal.fire('Error', 'Selecione una nacionalidad', 'error');     
  }else if(!this.state.form.strAMaterno || !this.state.form.strNombre || !this.state.form.strAPaterno ){
    Swal.fire('Error', 'Agregué un Nombre, apellido paterno o materno', 'error');
  }else if (!this.state.form.dteFechaNaci || !this.state.form.intEdad || !this.state.form.strSexo){
    Swal.fire('Error', 'Agregué Edad, sexo o fecha de nacimiento', 'error');
  } else if(!this.state.form.dceEstatura || !this.state.form.dcePeso || !this.state.form.strAlergia){
    Swal.fire('Error', 'Agregué estatura, peso o alergía ', 'error');
  } else if(!this.state.form.strRfc || !this.state.form.strCurp || !this.state.form.strNss || !this.state.form.tipoSangre){
    Swal.fire('Error', 'Agregué RFC, CURP, NSS o Tipo de sangre', 'error');
  }
  
  const ob= {    
    idEmpleado: this.state.form.idEmpleado,          
    strNombre: this.state.form.strNombre,
    strAPaterno: this.state.form.strAPaterno,
    strAMaterno: this.state.form.strAMaterno,
    dteFechaNaci: this.state.form.dteFechaNaci,
    intEdad: this.state.form.intEdad,
    strSexo: this.state.form.strSexo,
    dceEstatura: this.state.form.dceEstatura,
    dcePeso: this.state.form.dcePeso,
    strAlergia: this.state.form.strAlergia,
    strRfc: this.state.form.strRfc,
    strCurp: this.state.form.strCurp,
    strNss: this.state.form.strNss,
    idNacionalidad: {
      idNacionalidad:  parseFloat(this.state.form.idNacionalidad.idNacionalidad),
      strValor: ''
  },      
    tipoSangre: this.state.form.tipoSangre
  }
  if(this.state.form.idNacionalidad > 0){
    
    ob.idNacionalidad.idNacionalidad = this.state.form.idNacionalidad; 
  }
  
  delete ob.idEmpleado;
  delete ob.Nacionalidad;  

  axios.put(url+this.state.form.idEmpleado, ob,{headers: {
    'Content-Type': 'application/json',      
    'Authorization':  'Bearer '+ token
   } }).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
  
}

peticionDelete=(empresa)=>{
  const token = localStorage.getItem('token') || '';
  const url = `${baseURL}/empleado/delete/`;
  

  const datoEliminar = "*se elimina el empleado: " +empresa.strNombre + " " + empresa.strAPaterno+ " " + empresa.strAMaterno+"*";
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
          console.log(url+empresa.idEmpleado)
            // Hicieron click en "Sí"
            
            axios.delete(url+empresa.idEmpleado,{headers: {
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
  axios.delete(url+this.state.form.idEmpleado,{headers: {
    'Content-Type': 'application/json',      
    'Authorization':  'Bearer '+ token
   } }).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
  })
  */
}

modalInsertar=()=>{
  this.peticionGetNac();  
  this.setState({modalInsertar: !this.state.modalInsertar});    
}
///Editar Aqui
seleccionarEmpresa=(empresa)=>{

  console.log(empresa)
  this.setState({
    tipoModal: 'actualizar',        
    form: {
      idEmpleado: empresa.idEmpleado,          
      strNombre: empresa.strNombre,
      strAPaterno: empresa.strAPaterno,
      strAMaterno: empresa.strAMaterno,
      dteFechaNaci: empresa.dteFechaNaci,
      intEdad: empresa.intEdad,
      strSexo: empresa.strSexo,
      dceEstatura: empresa.dceEstatura,
      dcePeso: empresa.dcePeso,
      strAlergia: empresa.strAlergia,
      strRfc: empresa.strRfc,
      strCurp: empresa.strCurp,
      strNss: empresa.strNss,
      idNacionalidad: {
        idNacionalidad: empresa.idNacionalidad.idNacionalidad,
        strValor: '',      
      },     
      tipoSangre: empresa.tipoSangre
    }     
  })  

  if(!this.state.modalInsertar){

    setTimeout(function() {
      const strNombre = document.getElementById('strNombre');
    const strAPaterno = document.getElementById('strAPaterno');
    const strAMaterno = document.getElementById('strAMaterno');
    const dteFechaNaci = document.getElementById('dteFechaNaci');
    const intEdad = document.getElementById('intEdad');
    const strSexo = document.getElementById('strSexo');
    const dceEstatura = document.getElementById('dceEstatura');
    const dcePeso = document.getElementById('dcePeso');
    const strAlergia = document.getElementById('strAlergia');
    const strRfc = document.getElementById('strRfc');
    const strCurp = document.getElementById('strCurp');
    const strNss = document.getElementById('strNss');
    const tipoSangre = document.getElementById('tipoSangre');

    strNombre.readOnly = false;
    strAPaterno.readOnly = false;
    strAMaterno.readOnly = false;
    dteFechaNaci.readOnly = false;
    intEdad.readOnly = false;
    strSexo.readOnly = false;
    dceEstatura.readOnly = false;
    dcePeso.readOnly = false;
    strAlergia.readOnly = false;
    strRfc.readOnly = false;
    strCurp.readOnly = false;
    strNss.readOnly = false;
    tipoSangre.readOnly = false;
    }, 1000);    
  }   
}

habilitarControles=() =>  {

    const strNombre = document.getElementById('strNombre');
    const strAPaterno = document.getElementById('strAPaterno');
    const strAMaterno = document.getElementById('strAMaterno');
    const dteFechaNaci = document.getElementById('dteFechaNaci');
    const intEdad = document.getElementById('intEdad');
    const strSexo = document.getElementById('strSexo');
    const dceEstatura = document.getElementById('dceEstatura');
    const dcePeso = document.getElementById('dcePeso');
    const strAlergia = document.getElementById('strAlergia');
    const strRfc = document.getElementById('strRfc');
    const strCurp = document.getElementById('strCurp');
    const strNss = document.getElementById('strNss');
    const tipoSangre = document.getElementById('tipoSangre');

    strNombre.readOnly = false;
    strAPaterno.readOnly = false;
    strAMaterno.readOnly = false;
    dteFechaNaci.readOnly = false;
    intEdad.readOnly = false;
    strSexo.readOnly = false;
    dceEstatura.readOnly = false;
    dcePeso.readOnly = false;
    strAlergia.readOnly = false;
    strRfc.readOnly = false;
    strCurp.readOnly = false;
    strNss.readOnly = false;
    tipoSangre.readOnly = false;
    

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
    if(this.state.form.idNacionalidad >= 1) {    
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
    <div className="App">
        <NavbarScreen />
    
        <div className="col-4 offset-4">
                  <h1>Empleado</h1>
                
        </div>
        <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Empleado</button>
        <br /><br />
        <div className="table-responsive-sm">
          <table className="table ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>RFC</th>
                <th>CURP</th>
                <th>Nacionalidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>

            {this.state.data.map(empresa=>{
              return(
                <tr key={empresa.idEmpleado}>
              <td>{empresa.idEmpleado}</td>
              <td>{empresa.strNombre} {empresa.strAPaterno} {empresa.strAMaterno}</td>
              <td>{empresa.strRfc}</td>
              <td>{empresa.strCurp}</td>
              <td>{empresa.idNacionalidad.strValor} </td>
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
        </div>



    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <div>
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="idEmpleado" id="idEmpleado" readOnly onChange={this.handleChange} value={form?form.idEmpleado: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre11">Nacionalidad</label>
                    <select name="idNacionalidad" id="idNacionalidad" typeof="number" className="form-control" onChange={this.handleChange} value={form?form.idNacionalidad.idNacionalidad: ''}>
                      <option value="0">--- selecionar una nacionalidad ---</option>
                      {this.state.nacionalidades.map(elemento=>(
                        <option key={elemento.idNacionalidad} value={elemento.idNacionalidad}>{elemento.strValor}</option>
                      ))}
                    </select>
                    <br />
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="strNombre" id="strNombre" readOnly onChange={this.handleChange} value={form?form.strNombre: ''}/>
                    <br />

                    <label htmlFor="nombre1">APaterno</label>
                    <input className="form-control" type="text" name="strAPaterno" id="strAPaterno" readOnly onChange={this.handleChange} value={form?form.strAPaterno: ''}/>
                    <br />
                    <label htmlFor="nombre2">AMaterno</label>
                    <input className="form-control" type="text" name="strAMaterno" id="strAMaterno" readOnly onChange={this.handleChange} value={form?form.strAMaterno: ''}/>
                    <br />
                    <label htmlFor="nombre3">Fecha Nac</label>
                    <input className="form-control" type="date" name="dteFechaNaci" id="dteFechaNaci" readOnly onChange={this.handleChange} value={form?form.dteFechaNaci: ''}/>
                    <br />
                    <label htmlFor="nombre3">Edad</label>
                    <input className="form-control" type="number" name="intEdad" id="intEdad" readOnly onChange={this.handleChange} value={form?form.intEdad: ''}/>
                    <br />
                    <label htmlFor="nombre4">Sexo</label>
                    <input className="form-control" type="text" name="strSexo" id="strSexo" readOnly onChange={this.handleChange} value={form?form.strSexo: ''}/>
                    <br />
                    <label htmlFor="nombre5">Estatura</label>
                    <input className="form-control" type="number" name="dceEstatura" id="dceEstatura" readOnly onChange={this.handleChange} value={form?form.dceEstatura: ''}/>
                    <br />
                    <label htmlFor="nombre6">Peso</label>
                    <input className="form-control" type="number" name="dcePeso" id="dcePeso" readOnly onChange={this.handleChange} value={form?form.dcePeso: ''}/>
                    <br />

                    <label htmlFor="nombre7">Alergia</label>
                    <input className="form-control" type="text" name="strAlergia" id="strAlergia" readOnly onChange={this.handleChange} value={form?form.strAlergia: ''}/>
                    <br />
                    <label htmlFor="nombre8">NSS</label>
                    <input className="form-control" type="text" name="strNss" id="strNss" readOnly onChange={this.handleChange} value={form?form.strNss: ''}/>
                    <br />
                    <label htmlFor="nombre9">TipoSangre</label>
                    <input className="form-control" type="text" name="tipoSangre" id="tipoSangre" readOnly onChange={this.handleChange} value={form?form.tipoSangre: ''}/>
                    <br />


                    <label htmlFor="nombre0">RFC</label>
                    <input className="form-control" type="text" name="strRfc" id="strRfc" readOnly onChange={this.handleChange} value={form?form.strRfc: ''}/>
                    <br />
                    <label htmlFor="capital_bursatil">CURP</label>
                    <input className="form-control" type="text" name="strCurp" id="strCurp" readOnly onChange={this.handleChange} value={form?form.strCurp:''}/>
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
               Estás seguro que deseas eliminar a la empresa {form && form.strNombre}
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

