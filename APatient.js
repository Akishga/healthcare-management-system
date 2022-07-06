import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
class APatient extends Component {
  constructor() {
    super();
    this.state = {
      PatientName     :'',
      EmailId         :'',
      DoctorType      :'',
      Phonenumber     :'',
      Gender          :'',
      Age             :'',
      AppoinmentDate  :'',
      PID             :'',
      BloodGroup      :'', 
register:'' 
    
    }

    this.PatientName = this.PatientName.bind(this);
    this.EmailId = this.EmailId.bind(this);
    this.DoctorType = this.DoctorType.bind(this);
    this.Phonenumber = this.Phonenumber.bind(this);
    this.Gender = this.Gender.bind(this);
    this.Age = this.Age.bind(this);
    this.AppoinmentDate = this.AppoinmentDate.bind(this);
    this.PID             =localStorage.getItem("UserId");
    this.BloodGroup = this.BloodGroup.bind(this);
    this.register = this.register.bind(this);
  }

  PatientName(event) {
    this.setState({ PatientName: event.target.value })
  }
 
  DoctorType(event) {
    this.setState({ DoctorType: event.target.value })
  }
 
  Address(event) {
    this.setState({ Address: event.target.value })
  }
  Phonenumber(event) {
    this.setState({ Phonenumber: event.target.value })
  }
  Age(event) {
    this.setState({ Age: event.target.value })
  }

  EmailId(event) {
    this.setState({ EmailId: event.target.value })
  }
  Gender(event) {
    this.setState({ Gender: event.target.value })
  }
  BloodGroup(event) {
    this.setState({ BloodGroup: event.target.value })
  }
  
  AppoinmentDate(event) {
    this.setState({ AppoinmentDate:event.target.value})
  }
 
  register(event) {
    
   if((this.state.PatientName     =='')||
   (this.state.EmailId         =='')||
   (this.state.DoctorType      =='')||
   (this.state.Phonenumber     =='')||
   (this.state.Gender          =='')||
   (this.state.Age             =='')||
   (this.state.AppoinmentDate  =='')||
  
   (this.state.BloodGroup      ==''))
   {
    alert('Please Fill All Details');
   }
    else{
      debugger;
      console.log(this.state.appoinmentdate)
              fetch('https://localhost:44374/Api/Login/InsertARegister', {
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  
                  PatientName: this.state.PatientName,
                  EmailId     :this.state.EmailId,
                  DoctorType  :this.state.DoctorType,
                  Phonenumber :this.state.Phonenumber,
                  Gender      :this.state.Gender,
                  Age         :this.state.Age,
                  AppoinmentDate:this.state.AppoinmentDate,
                  PID           :this.PID,
                  BloodGroup    :this.state.BloodGroup
                  
                })
              }).then((Response) => Response.json())
                .then((Result) => {
                  
                    if(Result.Status=="Success")
                    {
                      alert("Appoinment Registered Sucessfully.Your Appointment no is "+Result.id);
                    window.location.href = '/Patient'
                    }
                })
              }
    
            }
  render() {
 
    return (
        <div>

<div className="d-flex justify-content-around">
    <Container>
        <Row className="justify-content-around">
            
            <Col md="9" lg="15" xl="40">
                <Card className="mx-8">
                    <CardBody className="p-8">
                        <Form>
                        <div class="row" 
                                            className="mb-2 pageheading">
                                                <div class="col-sm-12 btn btn-primary">
                                                   APPOINTMENT FORM
                             </div>
                                            </div>

                            <div className="col-md-45 eightDiv border rounded-left divborder">
                                <table className="table table-responsive tableUser">
                                    <thead></thead>
                                    <tbody>
     
                                            <tr><td><span className="text-muted">Patient Name</span></td> <td><InputGroup className="mb-5">
                                            <Input type="text"
                                              onChange={this.PatientName}/>
                                            </InputGroup>
                                            </td>
                                            
                                            <td><span className="text-muted">Email</span></td> <td><InputGroup className="mb-5">
                                            <Input type="text"
                                            onChange={this.EmailId}/>
                                            </InputGroup>
                                            </td>
                                            </tr>
                                            <tr>
                                            
                                            <td><span className="text-muted">Mobile Number</span></td> <td><InputGroup className="mb-5">
                                            <Input type="text"
                                           onChange={this.Phonenumber}/>
                                            </InputGroup>
                                            </td>
                                            <td><span className="text-muted">Age</span></td> <td><InputGroup className="mb-5">
                                            <Input type="text"
                                              onChange={this.Age}/>
                                            </InputGroup>
                                            </td>
                                            </tr>

                                        
                                            <tr><td><span className="text-muted">Gender</span></td> <td><InputGroup className="mb-5">
                                            <Input type="select"
                                            onChange={this.Gender}
                                            value={this.state.Gender}>
                                               <option value="">Select</option>
                                              <option value={"Female"}>Female</option>
                                              <option value={"Male"}>Male</option>
                                              </Input>
                                            </InputGroup>
                                            </td>
                                            
                                            <td><span className="text-muted">Blood Group</span></td> <td><InputGroup className="mb-5">
                                            <Input type="select"
                                            onChange={this.BloodGroup}
                                            value={this.state.BloodGroup}>
                                             <option value="">select </option>
                                              <option value={"O+"}>O+</option>
                                              <option value={"O-"}>O-</option>
                                              <option value= {"A+"}>A+</option>
                                              <option value={"A-"}>A-</option>
                                              <option value={"B+"}>B+</option>
                                              <option value={"B-"}>B-</option>
                                              <option value={"AB+"}>AB+</option>
                                              <option value={"AB-"}>AB-</option>

                                            </Input>
                                            
                                            
                                            </InputGroup>
                                            </td>
                                            </tr>
                                            <tr><td><span className="text-muted">Doctor Type</span></td> <td><InputGroup className="mb-5">
                                            <Input type="select"
                                            onChange={this.DoctorType}
                                            value={this.state.DoctorType}>
                                             <option value="">select </option>
                                              <option value={"Neurologist"}>Neurologist</option>
                                              <option value={"Cardiologist"}>Cardiologist</option>
                                              <option value= {"Pediatrision"}>Pediatrision</option>
                                              <option value={"General"}>General</option>
                                              

                                            </Input>
                                            
                                            
                                            </InputGroup>
                                            </td>
                                            
                                           <td><span className="text-muted">Appointment Date</span></td> <td><InputGroup className="mb-5">
                                         
                                         <Input type="date"
                                            onChange={this.AppoinmentDate}/>
                                         </InputGroup>
                                         </td>
                                         
   
                                         </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Button onClick={this.register}
                                color="success" block>REGISTER</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</div>
        
    </div>
    );
  }
}

export default APatient;


