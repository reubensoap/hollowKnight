import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row , Col, NavLink} from 'reactstrap';
import { Control, LocalForm, Errors, Required} from 'react-redux-form';
import { signup } from '../Utils/APIUtil';
import { Redirect } from 'react-router-dom';

const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length >= len);
const passConfirm = (valu) => (val) => (val) && (val === valu);

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            errorMessage: "",
            isModalOpen: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleSubmit(values) {
        if(values.password !== values.passwordConfirm){
            this.setState({
                errorMessage: "Password confirmation invalid, please try again"
            });
            this.toggleModal();
        } else {
            console.log(values);
            const loginrequest = Object.assign({}, values);
            signup(loginrequest)
            .then(response => {
                this.setState({ redirect: "/home" });
                console.log(response);
            })
            .catch(cds => {
                this.setState({
                    errorMessage: cds.message
                });
                this.toggleModal();
                console.log(cds.message);
            });
        }
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){

        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }

        return(
            <div className="container-fluid">
                
                <div className="form-page">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="form-inner">
                        <Row className="form-group">
                            <Label htmlFor="username" md={2}>Username</Label>
                            <Control.text model=".userName" type="text" id="userName" name="userName"
                                placeholder="User Name" 
                                className="form-control mx-3" 
                                validators={{
                                    required, minLength: minLength(6)
                                }}
                                    />
                            <Errors 
                                className="text-danger mx-3"
                                model=".userName"
                                show="touched"
                                    messages={{
                                    required: 'Required',
                                    minLength: "Must be 6 characters or more"
                                }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="password" md={2}>Password</Label>
                            <Control.text model=".password" type="password" id="password" name="password"
                                placeholder="Company Name" 
                                className="form-control mx-3" 
                                validators={{
                                    required, minLength: minLength(8)
                                }}
                                    />
                            <Errors 
                                className="text-danger mx-3"
                                model=".password"
                                show="touched"
                                    messages={{
                                    required: 'Required',
                                    minLength: 'Must be 8 characters or more'
                                }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="password" md={2}>Confirm Password</Label>
                            <Control.text model=".passwordConfirm" type="password" id="passwordConfirm" name="passwordConfirm"
                                placeholder="Company Name" 
                                className="form-control mx-3" 
                                validators={{
                                    required, minLength: minLength(8)
                                }}
                                    />
                            <Errors 
                                className="text-danger mx-3"
                                model=".password"
                                show="touched"
                                    messages={{
                                    required: 'Required',
                                    minLength: 'Must be 8 characters or more'
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
            </div>
        );

    }
}

export default Signup;