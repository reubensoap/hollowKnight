import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row , Col, NavLink} from 'reactstrap';
import { Control, LocalForm, Errors, Required} from 'react-redux-form';
import { Redirect } from 'react-router-dom';

import { login, ACCESS_TOKEN } from '../Utils/APIUtil'

const required = (val) => val && val.length;

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            errorMessage: ""
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        console.log(values);
        const loginRequest = Object.assign({}, values);
        console.log(loginRequest);
        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.jwt);
            console.log(response.jwt);
            this.props.onLogin(true);
            this.props.onGetHolder();
        })
        
        .catch( cds => {
            this.setState({
                errorMessage: cds.message
            });
            this.toggleModal();
            console.log(cds.message);
        });
    }

    render(){

        if(this.props.authen == true){
            return(
                <Redirect to="/home"/>
            );
        }

        return(
            <div className="container-fluid">
                
                <div className="form-page">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="username" md={2}>Username</Label>
                            <Control.text model=".username" type="text" id="username" name="username"
                                placeholder="User name" 
                                className="form-control mx-3" 
                                validators={{
                                    required
                                }}
                                    />
                            <Errors 
                                className="text-danger mx-3"
                                model=".username"
                                show="touched"
                                    messages={{
                                    required: 'Required',
                                }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="password" md={2}>Password</Label>
                            <Control.text model=".password" type="password" id="password" name="password"
                                placeholder="Company Name" 
                                className="form-control mx-3" 
                                validators={{
                                    required
                                }}
                                    />
                            <Errors 
                                className="text-danger mx-3"
                                model=".password"
                                show="touched"
                                    messages={{
                                    required: 'Required',
                                }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Col >
                                <Button type="submit" className="dash-btn">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="modal-head">Something went wrong</ModalHeader>
                    <ModalBody>
                        <LocalForm>
                            <div className="modal-row">
                                <p>{this.state.errorMessage}</p>
                            </div>
                            <div className="modal-row">
                                <Button onClick={this.toggleModal}>Try again</Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );

    }
}

export default Login;