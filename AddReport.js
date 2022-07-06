import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
   import axios from 'axios';
   import { post } from 'axios';  

class AddReport extends Component {
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

    axios.get("https://localhost:44374/Api/Admin/GetTechnican")
    
    .then(res => { 
this.setState({list:res.data});
console.log(this.state.list)
})
 
}
   
//  componentDidUpdate(){
//   //this.docid();
  
//  }
async submit(e,id) { 
   
  e.preventDefault(); 
    

  const url = `https://localhost:44374/Api/Uploadfiles/AddReport/`+id;    
  const formData = new FormData();    
  formData.append('body', this.state.file);    
  const config = {    
          headers: {    
                  'content-type': 'multipart/form-data',    
          },    
  };    
  return post(url, formData, config);   
  
}
reg()
{
   window.location.href = '/Technician'
}  
setFile(e) {    
  this.setState({ file: e.target.files[0] });    
}    



render() {  
    
    return (  

    
<div>
  <h3>Add Report</h3>
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
                    Doctor Id
                    </th>
                    <th>
                        Doctor Comments
                    </th>
                    <th>
                        Add report
                    </th>
                 </tr>
                   
                </thead>
                <tbody>
                    {this.state.list.map(data =>
                        <tr key={data.ID}>
                            <td>{data.PID}</td>
                          <td>{data.PatientName}</td>
                           <td>{data.AppoinmentDate}</td>
                            <td>{data.docid}</td>
                            <td>{data.Technican}</td>
                            <td>
                     

<Input type="file" onChange={e => this.setFile(e)} />    
                                      
                            </td>
                            <td>
                            <button className="btn btn-primary" type="submit" onClick={e => this.submit(e,data.ID,this.reg)}>Upload</button>
                            <button className="btn btn-primary" type="submit" onClick={this.reg}></button>
                            
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
  export default AddReport;