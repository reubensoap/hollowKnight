import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import mainText from '../hollowImages/mainText.png';
import { Navbar, Nav } from 'react-bootstrap';
import {LinkContainer } from 'react-router-bootstrap';
import iselda from '../hollowImages/iselda.png';
import collector from '../hollowImages/collector.png';
import hollowknight from '../hollowImages/hollowknight.png';
import hornet from '../hollowImages/hornet.png';

class Home extends Component {
    constructor(props){
        super(props);

    }

    renderAccessRow(){
        if(this.props.authen == true){
            return(
                <div className="banner-container">
                    
                </div>
            );
        } else {
            return(
                <div className="banner-container">
                    <LinkContainer to="/signup">
                        <Nav.Link><p className="banner-link">Sign up</p></Nav.Link>
                    </LinkContainer>
                </div>
            );
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="container-fluid home-banner">
                    <img src={mainText}/>
                    <p>Easiest Tracker in Hollow Nest</p>
                    {this.renderAccessRow()}
                </div>
                <div className="container-fluid home-content">
                    <div className="home-box">
                        <img src={iselda}/>
                        <div>
                            <h3>Get Started Fast</h3>
                            <p>No need to retrieve your email and wait for a confirmation. Plain and simple, use a user name and password of your choice
                                and get started. This web app is a companion to the great game Hollow Knight, don't want to
                                keep you waiting from gameplay.
                            </p>
                        </div>
                    </div>
                    <div className="home-box">
                        <div className="box-2">
                            <h3>Kepp Track and Collect</h3>
                            <p>Keep track of your defeats, charms and accomplishments with the progress tracker
                                and Grub list. Make your next visit to Hollow Nest, an easy one.
                            </p>
                        </div>
                        <img src={collector}/>
                    </div>
                    <div className="unboxed">
                        <h3>For tips on completing challanges please go to Hollow Knight Wiki</h3>
                        <img src={hollowknight}></img>
                    </div>
                    <div className="home-box">
                        <img src={hornet}/>
                        <div>
                            <h3>Tracker Will Update</h3>
                            <p>This tracker is long overdue, however it will be right on time with Hollow Knight: Silk Song.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    

}

export default Home;