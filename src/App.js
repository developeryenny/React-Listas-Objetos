import React,{Component} from 'react';
import empleados from './data/empleados.json'
import logo from './logo.svg';
import './App.css';

class EmpItem extends Component{
  render(){
    const {emp, id}=this.props
    return(
      <li>
        <p>Id: {id}</p>
        <p><strong>Nombre: </strong>{emp.nombre}</p>
        <p><strong>Apellido:</strong>{emp.apellido}</p>
        <p><strong>Salario:</strong>{emp.salario}</p>
        <p><strong>Departamento:</strong>{emp.departamento}</p>
      </li>
    )
  }
}

class App extends Component {
  render() {
    return (
    <div className="App">
      <h4>Trabajando con listas con objetos</h4>
      <ul>
        {
          empleados.map (emp=>{
           return <EmpItem id={emp.id} emp={emp}/>
          })
        }
      </ul>
    </div>
  
  );
}
}

export default App;
