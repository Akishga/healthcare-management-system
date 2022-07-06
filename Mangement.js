import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
    import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'; 
    import APatient  from './APatient';
import DRegister from './DRegister';
import DoctorList from './DoctorList';
import PatientList from './PatientList';
import PatientList1 from './PatientList1';
import ReponseReport from './ReponseReport';
class Management extends Component {
    constructor() {
        super();
        this.state={
            userid:'',
            reg:''  ,
            showresult:false,
            showresult1:false,
            showresult2:false,
            showresult3:false,
            showresult4:false,
        }
       
        this.reg = this.reg.bind(this);
        this.reg1 = this.reg1.bind(this);
        this.reg2 = this.reg2.bind(this);
        this.reg3 = this.reg3.bind(this);
        this.reg4 = this.reg4.bind(this);
    }
   reg(event){
    this.setState({showresult:true})
    this.setState({showresult1:false})
    this.setState({showresult2:false})
    this.setState({showresult3:false})
    this.setState({showresult4:false})
    
   }
   reg1(event){
    this.setState({showresult1:true})
    this.setState({showresult:false})
    this.setState({showresult2:false})
    this.setState({showresult3:false})
    this.setState({showresult4:false})
   }
   reg2(event){
    this.setState({showresult2:true})
    this.setState({showresult:false})
    this.setState({showresult1:false})
    this.setState({showresult3:false})
    this.setState({showresult4:false})
   }
   reg3(event){
    this.setState({showresult3:true})
    this.setState({showresult:false})
    this.setState({showresult1:false})
    this.setState({showresult2:false})
    this.setState({showresult4:false})
   }

   reg4(event){
    this.setState({showresult4:true})
    this.setState({showresult:false})
    this.setState({showresult1:false})
    this.setState({showresult2:false})
    this.setState({showresult3:false})
   }
   log(event)
    {
      window.location.href = '/login'
    }

    render(){ return(
       <div>
       
        <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
              <Button 
               class="btn btn-light" onClick={this.reg2} block>Make Appoinment</Button>  
              </li>  
              <li>  
               <Button 
               class="btn btn-light" onClick={this.reg4} block>Response Report</Button>  
              </li>  
              <li>  
               <Button 
               class="btn btn-light" onClick={this.reg3} block>Patient List</Button>  
              </li> 
              <li className="nav-item">    
              <Button 
               class="btn btn-light" onClick={this.reg} block>Add Doctor</Button>
               </li>
               <li className="nav-item">    
              <Button 
               class="btn btn-light" onClick={this.reg1} block>Doctor List</Button>
               </li>

               
              <li>  
              <Button onClick= {this.log}
               class="btn btn-light" block>SignOut</Button>  
              </li>          
            </ul>    
          </div>  
          </nav>
          </div>

          <div>
          {this.state.showresult ? <div><DRegister></DRegister></div> : ''}
          {this.state.showresult1 ? <div><DoctorList></DoctorList></div> : ''}
          {this.state.showresult2 ? <div><PatientList></PatientList></div> : ''}
        {this.state.showresult3 ? <div><PatientList1></PatientList1></div> : ''}
        {this.state.showresult4 ? <div><ReponseReport></ReponseReport></div> : ''}

          </div>
          </div>
         
                                           
    )
    }
}

export default Management;