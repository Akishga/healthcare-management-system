import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
   import axios from 'axios';


class PatientDetailsToDoc extends Component {
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

  

  GetDoctid()
  {
      axios.get("https://localhost:44374/Api/Admin/GetDoctorid")
       .then(res => { 
   this.setState({dlist:res.data});
   console.log(this.state.dlist)
   })

  }

  componentDidMount() {

    axios.get("https://localhost:44374/Api/Admin/GetPatientToDoc1/"+localStorage.getItem("DocId"))
    
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
  <h1>Patient List</h1>
             <br></br> 
  <div className="d-flex justify-content-start">

  
                       
            
            <table className="table  table-striped">
                <thead>
                 <tr>
                    <th>
                    PID
                    </th>
                    <th>
                    PatientName
                    </th>
                   <th>
                    Appoinment Date
                    </th>
                    <th>
                    Gender
                    </th>
                    <th>
                    Blood Group
                    </th>
                    <th>
                    EmailId
                    </th>
                    <th>
                    Phonenumber
                    </th>
                    <th>
                    DoctorType
                    </th>
                    <th>
                    Description
                    </th>
                    <th>
                    Technican
                    </th>
                    
                 </tr>
                   
                </thead>
                <tbody>
                    {this.state.list.map(data =>
                        <tr key={data.ID}>
                            <td>{data.PID}</td>
                          <td>{data.PatientName}</td>
                           <td>{data.AppoinmentDate}</td>
                           <td>{data.Gender}</td>
                           <td>{data.BloodGroup}</td>
                            <td>{data.EmailId}</td>
                            <td>{data.Phonenumber}</td>
                            <td>{data.DoctorType}</td>
                            <td>{data.description}</td>
                            <td>{data.Technican}</td>
                   
                        </tr>
                        )}
                        
                </tbody>
            </table>
        </div>
                 
             
</div>
       
    )  
}  
  

}
  export default PatientDetailsToDoc;