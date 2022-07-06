import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
   import axios from 'axios';


class WriteDes extends Component {
  constructor() {
    super();
    
      
    this.state = {list:[],dlist:[],
      
      edit:'',
      desc:'',
      tech:''
        }
         
        this.desc = this.desc.bind(this);
        this.tech =this.tech.bind(this);
  }
  desc(event) {
    this.setState({ desc: event.target.value })
}
tech(event) {
    this.setState({ tech: event.target.value })
}

  componentDidMount() {

    axios.get("https://localhost:44374/Api/Admin/GetPatientToDoc/"+localStorage.getItem("DocId"))
    
    .then(res => { 
this.setState({list:res.data});
console.log(this.state.list)
})
 
}
   
//  componentDidUpdate(){
//   //this.docid();
  
//  }
 
 
  

  edit(value,value1,value2)
  {
  
    
    return function() {
     
      fetch('https://localhost:44374/Api/Admin/PutDescription', {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ID:value,
          description:value1,
          Technican:value2
        })
    }).then((Response) => Response.json())
        .then((result) => {
            if(result.Status=="Success")
                {
                  alert("Added Successfully ");
                  window.location.href = '/Doctor'
                }

        })
     
    }
   
}


render() {  
    
    return (  

    
<div>
  <h1>Write Description</h1>
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
                    Description
                    </th>
                    <th>
                   Technican
                    </th>
                    <th>Description</th> 
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
                            <td>
                            <Input type="textarea" onChange={this.desc}>
                          </Input>
                            </td>
                            <td>
                            <Input type="textarea" onChange={this.tech}>
                          </Input>
                            </td>
                        <td>
                   <Button onClick={this.edit(data.ID,this.state.desc,this.state.tech)}
                  class="success" block>Submit</Button>
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
  export default WriteDes;