import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
   import axios from 'axios';
class DoctorList extends Component {
  constructor() {
    super();
    
      
    this.state = {list:[],
      status:''
        }
      
        this.edit = this.edit.bind();
        this.refreshList = this.refreshList.bind();
       this.status = this.status.bind(this);

  }

  status(event){
    this.setState({status:event.target.value});
  }

  refreshList()
    {
      fetch('https://localhost:44374/Api/Admin/PutDoctorstatus', {
        method: 'get'
      }).then((Response) => Response.json())
          .then((result) => {
            this.setState({list:result});
console.log(this.state.list)
    })
  }

  edit(value,value1)
    {
      
    
      return function() {

        fetch('https://localhost:44374/Api/Admin/PutDoctorstatus', {
          method: 'put',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ID:value,
            status:value1       
          })
      }).then((Response) => Response.json())
          .then((result) => {
              if(result.Status=="Success")
                  {
                    alert("Doctor status changed");
                    window.location.href = '/Mangement'
                  }

          })
       
      }
     
  }

 


  componentDidMount() {

    

    axios.get("https://localhost:44374/Api/Admin/DoctorList")
     .then(res => { 
 this.setState({list:res.data});
 console.log(this.state.list)
 })
   
    
  }


render() {  
    
    return (  

    
<div>
  <h1>Doctor List</h1>
             <br></br> 
  <div className="d-flex justify-content-start">
            
            <table className="table  table-striped">
                <thead>
                 <tr>
                  <th>
                    Id
                  </th>
                    <th>
                    Doctor UserName
                    </th>
                    <th>
                        Doctor name
                    </th>
                    <th>
                    DocterType
                    </th>
                    <th>
                    ContactNo
                    </th>
                    <th>
                    EmailId
                    </th>
                    <th>
                    Gender
                    </th>
                    <th>
                    Password
                      </th>
                    <th>
                      status
                    </th>
                    <th>Options</th>
                 </tr>
                   
                </thead>
                <tbody>
                    {this.state.list.map(data =>
                        <tr key={data.ID}>
                          <td>{data.ID}</td>
                            <td>{data.DID}</td>
                            <td>{data.DocterName}</td>
                            <td>{data.DocterType}</td>
                            <td>{data.ContactNo}</td>
                            <td>{data.EmailId}</td>
                            <td>{data.Gender}</td>
                            <td>{data.password}</td>
                            <td>{data.status}</td>
                             <td><InputGroup className="mb-2">
                       
                          
                       <Input type="select"
                           onChange={this.status}
                           
                           >
                           <option value="">Select</option>
                           <option value={"Active"}>Active</option>
                           <option value={"InActive"}>InActive</option>
                       </Input> 
                   </InputGroup></td> 
                   <td>
                   <Button onClick={this.edit(data.ID,this.state.status)}
                  class="success" block>Active</Button>
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
  export default DoctorList;