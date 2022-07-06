import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
    import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'; 
    import APatient  from './APatient';
    import PatientDetailsToDoc from './PatientDetailsToDoc';
    import WriteDes from './WriteDes';
    import ViewReport from './ViewReport';
class Doctor extends Component {
    constructor() {
        super();
        this.state={
            Docid:'',
            reg:''  ,
            showresult:false,
            showresult1:false,
            showresult2:false,
        }
        this.DocId= localStorage.getItem("DocId");
        console.log(localStorage.getItem("UserId"));
        this.reg = this.reg.bind(this);
        this.reg1 = this.reg1.bind(this);
        this.reg2 = this.reg2.bind(this);
        this.log = this.log.bind(this);
        
    }
    reg(event){
        this.setState({showresult:true})
        this.setState({showresult1:false})
        this.setState({showresult2:false})
  
      }
      reg1(event){
        this.setState({showresult1:true})
        this.setState({showresult:false})
        this.setState({showresult2:false})
      }
      reg2(event){
        this.setState({showresult2:true})
        this.setState({showresult1:false})
        this.setState({showresult:false})
      }
    log(event)
    {
      window.location.href = '/login'
    }
    render(){ return(
       <div>
        <h6>Doctor {this.DocId}</h6>
        <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
              <Button onClick= {this.reg}
               class="btn btn-light" block>PatientList</Button>  
              </li>    
              <li className="nav-item">    
              <Button onClick= {this.reg1}
               class="btn btn-light" block>Write Description</Button>  
              </li> 
              
              <li className="nav-item">    
              <Button onClick= {this.log}
               class="btn btn-light" block>SignOut</Button>  
              </li>   
            </ul>    
          </div>  
          </nav>
          </div>
    
     {this.state.showresult ? <div>   <PatientDetailsToDoc/> </div> : ''}
          {this.state.showresult1 ? <div> <WriteDes/> </div> : ''}
          {this.state.showresult2 ? <div>  <ViewReport/> </div> : ''}
          
        
          </div>
         
                                           
    )
    }
}

export default Doctor;