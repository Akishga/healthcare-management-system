import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
   import axios from 'axios';


class PatientList extends Component {
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

    axios.get("https://localhost:44374/Api/Admin/PatientList")
     .then(res => { 
 this.setState({list:res.data});
 console.log(this.state.list)
 this.GetDoctid();
 })
}
   
//  componentDidUpdate(){
//   //this.docid();
  
//  }
log(event)
{
  window.location.href = '/Mangement'
}
 
  

  edit(value,value1)
  {
  
    
    return function() {
     
      fetch('https://localhost:44374/Api/Admin/PutDoctorid', {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ID:value1,
          docid:value
        })
    }).then((Response) => Response.json())
        .then((result) => {
            if(result.Status=="Success")
                {
                  alert("Forward Patient Details to Doctor ");
                  window.location.href = '/PatientList'
                }

        })
     
    }
   
}


render() {  
    
    return (  

    
<div>
  <h1>Make Appoinment</h1>
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
                    Email Id
                    </th>
                    <th>
                    DocterType
                    </th>
                    <th>
                    Phonenumber
                    </th>
                    
                    <th>
                    Gender
                    </th>
                    <th>
                    Age
                      </th>
                      <th>
                      AppoinmentDate
                      </th>
                    <th>
                      BloodGroup
                    </th>
                    <th>User Name</th>
                   
                    <th>Patient Details Forward To Doctor</th>
                 </tr>
                   
                </thead>
                <tbody>
                    {this.state.list.map(data =>
                        <tr key={data.ID}>
                          <td>{data.ID}</td>
                          <td>{data.PatientName}</td>
                            <td>{data.EmailId}</td>
                            <td>{data.DoctorType}</td>
                            <td>{data.Phonenumber}</td>
                            <td>{data.Gender}</td>
                            <td>{data.Age}</td>
                            <td>{data.AppoinmentDate}</td>
                            <td>{data.BloodGroup}</td>
                            <td>{data.PID}</td>
                          
                            <td>
                            <Input type="select"
                          onChange={this.docid}
                          
                         >
                          
                         <option value="">Select</option>
                                            
                    
                         {this.state.dlist.map(data =>
                                <option value={data}>{data}</option>
                              
                                )}  
                                              
                        </Input>
                            </td>
                        
                        <td>
                   <Button onClick={this.edit(this.state.docid,data.ID)}
                  class="success" block>Forward</Button>
                   </td>
                  
                   
                        </tr>
                        )}
                        
                </tbody>
            </table>
        </div>
        <div  className="mt-auto p-2 bd-highlight">
             <Button onClick={this.log} className="mb-3"
                  class="success" block>Back</Button>
              </div>        
             
</div>
       
    )  
}  
  

}
  export default PatientList;