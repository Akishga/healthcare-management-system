import React,{Component} from "react";
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import AddReport from "./AddReport";
import Fileupload from "./FileUpload";

class Technician extends Component
{
    constructor(){
    super();
    this.state={
        name:'React',
        data:null
    };
    }
    log(event)
    {
      window.location.href = '/login'
    }
    render(){
        return(
            <div>
              <h3>Technican</h3>
                <div className="d-flex justify-content-end">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
         
              <li>  
              <Button onClick= {this.log} className='d-flex justify-content-end'
               class="btn btn-light" block>SignOut</Button>  
              </li>          
            </ul>    
          </div>  
          </nav>
          </div>
          <div>
        
         <AddReport></AddReport> 
      {/*   <Fileupload></Fileupload> */}
            </div>
            </div> 
        )
        
    }
}

export default Technician;



