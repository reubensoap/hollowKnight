import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row , Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors, Required} from 'react-redux-form';
import { login, ACCESS_TOKEN } from '../Utils/APIUtil';
import { Navbar, Nav } from 'react-bootstrap';
import {LinkContainer } from 'react-router-bootstrap';

const required = (val) => val && val.length;

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggle: false
        }

        this.toggleHandler = this.toggleHandler.bind(this);
    }

    toggleHandler(){
        this.setState({
            toggle: !this.state.toggle
        });
    }

    renderAccessNav(){
        if(this.props.authen == false){
            return(
                <Nav className="page-navbar">
                    <LinkContainer to="/Login">
                        <Nav.Link><p className="link-text">Login</p></Nav.Link>
                    </LinkContainer>
                </Nav>    
            );
        } else {
            return(
                <Nav className="page-navbar">
                    <LinkContainer to="/Dashboard">
                        <Nav.Link><p className="link-text">Dashboard</p></Nav.Link>
                    </LinkContainer>
                    <button className="banner-link" onClick={this.props.onLogout}>Logout</button>
                </Nav>
            );
        }
    }

    renderAccessNavM(){
        if(this.props.authen == false){
            return(
                <div className="page-navbar-m">
                    <LinkContainer to="/Login" onClick={this.toggleHandler}>
                        <Nav.Link><p className="link-text">Login</p></Nav.Link>
                    </LinkContainer>
                </div>    
            );
        } else {
            return(
                <div className="page-navbar-m">
                    <LinkContainer to="/Dashboard" onClick={this.toggleHandler}>
                        <Nav.Link><p className="link-text">Dashboard</p></Nav.Link>
                    </LinkContainer>
                    <div className="spacer"></div>
                    <button className="pop-button" onClick={this.props.onLogout}>Logout</button>
                </div>
            );
        }
    }

    renderMobileHeader() {
        if (this.state.toggle == false) {
            return(
                <div className="p-2 page-header-m">
                    
                </div>
            );
        } else {
            return(
                <div className="page-header-m-2">
                    <div className="pop-in-header">
                        <LinkContainer to="/home" onClick={this.toggleHandler}>
                            <Navbar.Brand><p className="header-text">Hollow Checklist</p></Navbar.Brand>
                        </LinkContainer>
                        <div className="spacer"></div>
                        {this.renderAccessNavM()}
                    </div>
                </div>
            );
        }
        
    }

    render() {
        return (
            <React.Fragment>
            <div class="container-fluid headerWhole">
                <div className="p-2 page-header">
                    <Navbar className="page-navbar">
                        <LinkContainer to="/home">
                            <Navbar.Brand><p className="header-text">Hollow Checklist</p></Navbar.Brand>
                        </LinkContainer>
                        {this.renderAccessNav()}
                    </Navbar>
                </div>
            </div>
            {this.renderMobileHeader()}
            <div class=" headerWhole-m">
                <div className="mobile-button-wrapper p-2">
                    <button className="mobile-button" onClick={this.toggleHandler}>Extend</button>
                </div>
            </div>
            
            </React.Fragment>
        );
    }
} 

export default Header;