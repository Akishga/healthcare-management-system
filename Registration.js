import React, { Component } from 'react';
import { Redirect,Route,Navigate } from 'react-router-dom';
import PatientName  from './PatientName';


 
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, 
         InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';
        
class Registration extends Component {
   
    constructor(props) {
        super(props); 
        this.state = {
          DOB         :'',
          Name        :'',
          EmailId     :'',
          Password    :'',
          CPassword   :'',
          Phonenumber :'',
          Gender      :''
      }

      this.DOB = this.DOB.bind(this);
      this.Name = this.Name.bind(this);
      this.EmailId = this.EmailId.bind(this);
      this.Password = this.Password.bind(this);
      this.CPassword = this.CPassword.bind(this);
      this.Phonenumber = this.Phonenumber.bind(this);
      this.Gender = this.Gender.bind(this);
      
      this.login = this.login.bind(this);

     
     
  }

  DOB(event) {
      this.setState({ DOB: event.target.value })
  }
  Name(event) {
      this.setState({ Name: event.target.value })
  }
  EmailId(event) {
      this.setState({ EmailId: event.target.value })
  }
  Password(event) {
      this.setState({ Password: event.target.value })
  }
  CPassword(event) {
      this.setState({ CPassword: event.target.value })
  }
  Gender(event) {
      this.setState({ Gender: event.target.value })
  }
  Phonenumber(event) {
      this.setState({ Phonenumber: event.target.value })
  }
  login(event) {
debugger;
if (
  (this.state.Name       =='')||
  (this.state.EmailId    =='')||
  (this.state.Password   =='')||
  (this.state.CPassword  =='')||
  (this.state.Phonenumber=='')||
  (this.state.Gender     =='')){
      alert('Please Enter All details');
}
else{
      fetch('https://localhost:44374/Api/login/InsertPRegister', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              DOB:this.state.DOB,       
              Name:this.state.Name,      
              EmailId:this.state.EmailId ,  
              Password:this.state.Password,  
              CPassword:this.state.CPassword ,
              Phonenumber:this.state.Phonenumber,
              Gender:this.state.Gender 
              
          })
      }).then((Response) => Response.json())
          .then((result) => {
              console.log(result.id);
              if(result.Status=="Success")
                  {
                    alert("Record Sucessfully saved.User Name is "+result.id);
                   
                  window.location.href = '/login'
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
                                Registeration Page
                            </div>
                        </div>
                        <InputGroup className="mb-3">
                            <Input type="text"
                                onChange={this.Name}
                                placeholder="Name" />
                        </InputGroup>
                        <Label className="d-flex justify-content-start" >DOB:</Label>
                        <InputGroup className="mb-5">

                            <Input type="date"
                                onChange={this.DOB} />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Input type="text"
                                onChange={this.EmailId}
                                placeholder="Email " />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <Input type="password"
                                onChange={this.Password}
                                placeholder="Password" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <Input type="password"
                                onChange={this.CPassword}
                                placeholder="Confirm Password" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Input type="text"
                                onChange={this.Phonenumber}
                                placeholder="Phone Number" />
                        </InputGroup>
                        <Label className="d-flex justify-content-start" >Gender</Label>
                        <InputGroup className="mb-5">
                       
                          
                            <Input type="select"
                                onChange={this.Gender}
                                value={this.state.Gender}>
                                <option value="">Select</option>
                                <option value={"Female"}>Female</option>
                                <option value={"Male"}>Male</option>
                            </Input>
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
 
export default Registration;