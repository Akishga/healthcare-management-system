import React, { Component } from 'react';
import { Redirect,Route,Navigate } from 'react-router-dom';


 
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, 
         InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';
        
class DRegister extends Component {
   
    constructor() {
        super(); this.state = {
            DocterName:'',
            DocterType:'',
            ContactNo :'',
            EmailId   :'',
            Gender    :'',
            password  :'',
            login:''
      }

this.DocterName = this.DocterName.bind(this);
this.DocterType = this.DocterType.bind(this);
this.ContactNo = this.ContactNo.bind(this);
this.EmailId =this.EmailId.bind(this);
this.Gender = this.Gender.bind(this);
this.password = this.password.bind(this);
this.login = this.login.bind(this);
     
  }

  DocterName(event) {
      this.setState({ DocterName: event.target.value })
  }
  DocterType(event) {
      this.setState({ DocterType: event.target.value })
  }
  ContactNo(event) {
      this.setState({ ContactNo: event.target.value })
  }
  EmailId(event) {
      this.setState({ EmailId: event.target.value })
  }
  
  Gender(event) {
      this.setState({ Gender: event.target.value })
  }
  password(event) {
      this.setState({ password: event.target.value })
  }
  login(event) {
debugger;
if (
    (this.state.DocterName=='')||
    (this.state.DocterType=='')||
    (this.state.ContactNo =='')||
    (this.state.EmailId   =='')||
    (this.state.Gender    =='')||
    (this.state.password  =='')){
      alert('Please Enter All details');
}
else{
      fetch('https://localhost:44374/Api/Admin/InsertDoctor', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            DocterName: this.state.DocterName,
            DocterType: this.state.DocterType,
            ContactNo: this.state.ContactNo,
            EmailId: this.state.EmailId,
            Gender: this.state.Gender,
            password: this.state.password  
              
          })
      }).then((Response) => Response.json())
          .then((result) => {
              console.log(result.id);
              if(result.Status=="Success")
                  {
                    alert("Record Sucessfully saved.User Name is "+result.id);
                  window.location.href = '/Mangement'
                  }
              
      
             
          })
      
      
        } 
       
    }
    
 
    render() {
        return (
            <div>

                 <div className="d-flex justify-content-center">
                
                 <Container>

<Row className="justify-content-around">

    <Col md="9" lg="7" xl="6">
        <CardGroup>
            <Card className="p-2">
                <CardBody>
                    <Form>
                        <div class="row"
                            className="mb-2 pageheading">
                            <div class="col-sm-12 btn btn-primary">
                                Add Doctor
                            </div>
                        </div>
                        <Label className="d-flex justify-content-start" >DoctorType</Label>
                        <InputGroup>
                       
                        <Input type="select"
                        onChange={this.DocterType}
                        value ={this.state.DocterType}
                      >
                            <option value="">select </option>
                             <option value={"Neurologist"}>Neurologist</option>
                             <option value={"Cardiologist"}>Cardiologist</option>
                             <option value= {"Pediatrision"}>Pediatrision</option>
                             <option value={"General"}>General</option>
                                              
                        </Input>
                        </InputGroup>
                        
                        <Label className="d-flex justify-content-start" >Doctor Name</Label>
                        <InputGroup className="mb-3">
                       
                            <Input type="text"
                               onChange={this.DocterName}
                                placeholder="Doctor Name" />
                        </InputGroup>
                        <Label className="d-flex justify-content-start" >Gender</Label>
                        <InputGroup className="mb-3">
                       
                            <Input type="select"
                            onChange={this.Gender}
                            value ={this.state.Gender}
                               >
                                <option value="">Select</option>
                                <option value={"Female"}>Female</option>
                                <option value={"Male"}>Male</option>
                            </Input>
                        </InputGroup>
                        <Label className="d-flex justify-content-start" >Contact Number</Label>
                        <InputGroup className="mb-3">
                     
                            <Input type="text"
                               onChange={this.ContactNo}
                                placeholder="Contact Number" />
                        </InputGroup>
                        <Label className="d-flex justify-content-start" >Email Id</Label>
                        <InputGroup className="mb-3">
                      
                            <Input type="text"
                               onChange={this.EmailId}
                                placeholder="Email " />
                        </InputGroup>
                        <Label className="d-flex justify-content-start" >Password</Label>
                        <InputGroup className="mb-4">
                            <Input type="password"
                                onChange={this.password}
                                placeholder="Password" />
                        </InputGroup>
                    
                        <Button onClick={this.login}
                            color="success" block>SIGN UP</Button>

                        <div>

                        </div>
                    </Form>
                </CardBody>
            </Card>
        </CardGroup>
    </Col>
</Row>
</Container>
            </div>
            </div>
           
        );
    }
}
 
export default DRegister;