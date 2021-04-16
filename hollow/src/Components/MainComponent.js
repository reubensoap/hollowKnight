import React, { Component } from 'react';
import Home from './HomeComponent';
import Dashboard from './DashboardComponent';
import Header from './HeaderComponent';
import Signup from './SignupComponent';
import Login from './LoginComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ACCESS_TOKEN } from '../Utils/APIUtil';
import { connect } from 'react-redux';
import { authentication, logout, fetchPlayer, addPlayer, removeAccount } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        accountHolder: state.playerStat
    }
}

const mapDispatchToProps = (dispatch) => ({
    authentication: (values) => {dispatch(authentication(values))},
    logout: (values) => {dispatch(logout(values))},
    fetchPlayer: () => {dispatch(fetchPlayer())},
    addPlayer: (values) => {dispatch(addPlayer(values))},
    removeAccount: () => {dispatch(removeAccount())}
});

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }

        this.handleLogout = this.handleLogout.bind(this);
        this.updateActive = this.updateActive.bind(this);
    }

    componentDidMount(){
        if(this.props.isAuthenticated == false){
            localStorage.removeItem(ACCESS_TOKEN);
        }
        if(localStorage.getItem(ACCESS_TOKEN)){
            this.props.fetchPlayer();
        }
        console.log(this.props.isAuthenticated);
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.props.logout(false);
        console.log("Removed Token");
    }

    updateActive(){
        const activeNew = !this.state.active;
        this.setState({
            active: activeNew
        });
    }

    render() {

        const HomePage = () => {
            return(
                <Home authen={this.props.isAuthenticated}/>
            );
        }

        const SignupPage = () => {
            return(
                <Signup authen={this.props.isAuthenticated}/>
            );
        }

        const LoginPage = () => {
            return(
                <Login authen={this.props.isAuthenticated} onLogin={this.props.authentication} onGetHolder={this.props.fetchPlayer}/>
            );
        }

        const DashboardPage = () => {
            return(
                <Dashboard authen={this.props.isAuthenticated} onGetHolder={this.props.fetchPlayer} onLogout={this.handleLogout}
                logout={this.props.logout} player={this.props.accountHolder} activeS={this.state.active} onUpdate={this.updateActive}/>
            );
        }



        return (
            <div className="App">
                <Header onLogin={this.props.authentication} onGetHolder={this.props.fetchPlayer} onLogout={this.handleLogout} authen={this.props.isAuthenticated}/>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/Dashboard" component={DashboardPage} />
                    <Route path="/signup" component={SignupPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));