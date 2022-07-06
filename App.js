import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Registration  from './component/Registration';
import Patient  from './component/Patient';
import Mangement  from './component/Mangement';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login  from './component/login';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'; 
import DRegister from './component/DRegister'
import Doctor from './component/Doctor';
import DoctorList1 from './component/DoctorList1';
import PatientName from './component/PatientName';
import PatientList from './component/PatientList';
import Technician from './component/Technician';


function App() {
  return (
    <div className="App">
 <Home></Home>
 <div>
  <Router>
    <Routes>
 
  <Route path='/Registration' exact element={ <Registration/> } />   
  <Route path='/' exact element={ <Login/> } />   
  <Route path='/Login' exact element={ <Login/> } />   
  <Route path='/Patient' exact element={ <Patient/> } />  
  <Route path='/Mangement' exact element={ <Mangement/> } />  
  <Route path='/DRegister' exact element={ <DRegister/> } /> 
  <Route path='/Doctor' exact element={ <Doctor/> } /> 
  <Route path='/DoctorList1' exact element={ <DoctorList1/> } /> 
  <Route path='/PatientName' exact element={ <PatientName/> } /> 
  <Route path='/PatientList' exact element={ <PatientList/> } /> 
  <Route path='/Technician' exact element={ <Technician/> } /> 
  
  </Routes>
  </Router>
 </div>
    </div>
    
  );
}

export default App;
