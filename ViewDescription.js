import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
   import axios from 'axios';
class ViewDescription extends Component {
  constructor() {
    super();
    
      
    this.state = {list:[],dlist:[],
      docid:'',
      edit:''
        }
         
       this.docid= this.docid.bind(this);
        
           
  }
  docid(event) {
    this.setState({docid:event.target.value});
    
  }

  

  componentDidMount() {

    axios.get("https://localhost:44374/Api/Admin/GetViewDesc/"+localStorage.getItem("UserId"))
    
    .then(res => { 
this.setState({list:res.data});
console.log(this.state.list)
})
 
}
   
//  componentDidUpdate(){
//   //this.docid();
  
//  }
 



render() {  
    
    return (  

    
<div>
  <h3>View Description-Consultant view</h3>
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
                    EmailId
                    </th>
                <th>
                  Gender
                </th>
                <th>
                Age
                </th>
               
                <th>
                    Appoinment Date
                    </th>
                    <th>DoctorType</th>
                    <th>Doctor Name</th>
                    <th>
                    Description
                    </th>
              
                 </tr>
                   
                </thead>
                <tbody>
                    {this.state.list.map(data =>
                        <tr key={data.ID}>
                            <td>{data.ID}</td>
                          <td>{data.PatientName}</td>
                          
                           <td>{data.EmailId}</td>
                           <td>{data.Gender}</td>
                           <td>{data.Age}</td>
                           <td>{data.AppoinmentDate}</td>
                           <td>{data.DoctorType}</td>
                           <td>{data.docid}</td>
                            <td>{data.description}</td>
                            
                        </tr>
                        )}
                        
                </tbody>
            </table>
        </div>
                 
             
</div>
       
    )  
}  
  

}
  export default ViewDescription;