import React, { Component } from 'react';
import { Redirect,Route,Navigate } from 'react-router-dom';

import pic1 from "../Images/download.jpg"; 
 
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, 
         InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
        
class Login extends Component {
   
    constructor() {
        super();
      
       
        this.state = {
            UserName: '',
            Password: ''
        }
 
        this.Password = this.Password.bind(this);
        this.UserName = this.UserName.bind(this);
        this.login = this.login.bind(this);
        this.reg = this.reg.bind(this)
        this.uid = this.uid;
    }
 
    UserName(event) {
        this.setState({ UserName: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
 reg(event)
 {
    window.location.href = '/Registration'
 } 
    login(event) {
debugger;
        if (this.state.UserName=='') {
            alert('Enter UserName');
          } 
          else if (this.state.Password=='') {
            alert('Enter Password');
          } 
         else if(this.state.UserName =='M001')
          {
              window.location.href = '/Mangement'
           }
           else if(this.state.UserName =='T001')
           {
               window.location.href = '/Technician'
            }
           else if(this.state.UserName.startsWith('D'))
           {
            fetch('https://localhost:44374/Api/Admin/LoginDoctor', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: this.state.UserName,
                Password: this.state.Password,
                
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result.id);
              
                 if (result.Status == 'Invalid')
                  alert('Invalid User');
                 
                else
                {
                    localStorage.setItem("DocId",result.id );
                    window.location.href = '/Doctor'
                }


        
               
            })
              
            }
        else{
        fetch('https://localhost:44374/Api/login/LoginUser', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: this.state.UserName,
                Password: this.state.Password,
                
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result.id);
              
                 if (result.Status == 'Invalid')
                  alert('Invalid User');
                 
                else
                {
                    localStorage.setItem("UserId",result.id );
                window.location.href = '/Patient'
                }


        
               
            })
        }
    }
    
 
    render() {
        return (
            <div>

                 <div className="app flex-row align-items-center">
                
                <Container>
               
              
                    <Row className="justify-content-end">
                    <Col md="9" lg="100" xl="6" >
                    <div> 
                <img alt="Card image cap" class="card-img-top embed-responsive-item" src={pic1} /> 
                    </div>
                        </Col>
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <div class="row" 
                                            className="mb-2 pageheading">
                                                <div class="col-sm-12 btn btn-primary">
                                                    Login
                             </div>
                                            </div>
                                            <InputGroup className="mb-3">
                                                <Input type="text" 
                                                 onChange={this.UserName} 
                                                 placeholder="Enter UserName" />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="password" 
                                                onChange={this.Password} 
                                                placeholder="Enter Password" />
                                            </InputGroup>
                                            <Button onClick={this.login} 
                                            color="success" block>Login</Button>
<br></br>
<Button onClick= {this.reg}
                                            class="btn btn-light" block>Registration</Button>
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
 
export default Login;