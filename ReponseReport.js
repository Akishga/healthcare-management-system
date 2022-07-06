import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
   import axios from 'axios';


class ReponseReport extends Component {
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

    axios.get("https://localhost:44374/Api/Admin/GetReponseReport")
     .then(res => { 
 this.setState({list:res.data});
 console.log(this.state.list)
 this.GetDoctid();
 })
}
   
//  componentDidUpdate(){
//   //this.docid();
  
//  }
 
 
  

  edit(value)
  {
  
    
    return function() {
     
      fetch('https://localhost:44374/Api/Admin/PutReponseReport', {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ID:value
        })
    }).then((Response) => Response.json())
        .then((result) => {
            if(result.Status=="Success")
                {
                  alert("Reponse Accept to Report download");
                  window.location.href = '/Mangement'
                }

        })
     
    }
   
}


render() {  
    
    return (  

    
<div>
  <h3>Response Report</h3>
             <br></br> 
  <div className="d-flex justify-content-start">

         
            <table className="table  table-striped">
                <thead>
                 <tr>
                 <th>PatientName UserId</th>
                    <th>
                    PatientName
                    </th>
                   
                    <th>
                    Phonenumber
                    </th>
                    
                   
                      <th>
                      AppoinmentDate
                      </th>
                    
                   
                    <th>Doctor Id</th>
                    <th>Technican Comments</th>
                    <th>Attachment filename</th>
                    <th>Options</th>
                 </tr>
                   
                </thead>
                <tbody>
                    {this.state.list.map(data =>
                        <tr key={data.ID}>
                           <td>{data.PID}</td>
                          <td>{data.PatientName}</td>
                            <td>{data.Phonenumber}</td>
                            <td>{data.AppoinmentDate}</td>
                            <td>{data.docid}</td>
                            <td>{data.Technican}</td>
                            <td>{data.technicanattach}</td>
                        <td>
                   <Button onClick={this.edit(data.ID)}
                  class="success" block>Reponse</Button>
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
  export default ReponseReport;