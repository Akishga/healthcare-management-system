import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
    import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'; 
    import APatient  from './APatient';
    import ViewDescription from './ViewDescription';
    import ViewReport from './ViewReport';
class Patient extends Component {
    constructor() {
        super();
        this.state={
            userid:'',
            reg:''  ,
            showresult:false,
            showresult1:false,
            showresult2:false,
        }
        this.userid= localStorage.getItem("UserId");
        console.log(localStorage.getItem("UserId"));
        this.showresult =  this.reg.bind(this);
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
        <h6>Patient {this.userid}</h6>
        <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
              <Button onClick= {this.reg}
               class="btn btn-light" block>AppointmentForm</Button>  
              </li>    
              <li className="nav-item">    
              <Button onClick= {this.reg1}
               class="btn btn-light" block>View Description</Button>  
              </li> 
              <li className="nav-item">    
              <Button onClick= {this.reg2}
               class="btn btn-light" block>View Report</Button>  
              </li>   
              <li className="nav-item">    
              <Button onClick= {this.log}
               class="btn btn-light" block>SignOut</Button>  
              </li>   
            </ul>    
          </div>  
          </nav>
          </div>
          {this.state.showresult ? <div>  <APatient/> </div> : ''}
          {this.state.showresult1 ? <div>  <ViewDescription/> </div> : ''}
          {this.state.showresult2 ? <div>  <ViewReport/> </div> : ''}
          
        
          </div>
         
                                           
    )
    }
}

export default Patient;