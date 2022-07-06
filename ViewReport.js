import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
    import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'; 

   import axios from 'axios';
class ViewReport extends Component {
  constructor() {
    super();
    
      
    this.state = {list:[],dlist:[],
      docid:'',
      edit:''
        }
         
       this.docid= this.docid.bind(this);
       this.edit = this.edit.bind(this); 
           
  }
  docid(event) {
    this.setState({docid:event.target.value});
    
  }

  

  componentDidMount() {

    axios.get("https://localhost:44374/Api/Admin/GetviewReport/"+localStorage.getItem("UserId"))
    
    .then(res => { 
this.setState({list:res.data});
console.log(this.state.list)
})
 
}
   
//  componentDidUpdate(){
//   //this.docid();
  
//  }
 edit(event)
 {
    alert("Download file")
 }



render() {  
    
    return (  

    
<div>
  <h3>View Report</h3>
             <br></br> 
  <div className="d-flex justify-content-start">

  
                       
            
            <table className="table  table-striped">
                <thead>
                 <tr>
                    <th>
                    Appointment Number
                    </th>
                    <th>
                    PatientName
                    </th>
                  
               
                <th>
                    Appoinment Date
                    </th>
                   <th>Download file</th>
              
                 </tr>
                   
                </thead>
                <tbody>
                    {this.state.list.map(data =>
                        <tr key={data.ID}>
                            <td>{data.ID}</td>
                          <td>{data.PatientName}</td>
                          
                          
                           <td>{data.AppoinmentDate}</td>
                          <td> <Link to={data.technicanattach} target="_blank" download>download</Link>
                            </td>
                        </tr>
                        )}
                        
                </tbody>
            </table>
        </div>
                 
             
</div>
       
    )  
}  
  

}
  export default ViewReport;