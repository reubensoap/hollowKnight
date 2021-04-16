import React, { Component } from 'react';
import Main from "./Components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import './App.css';
import { Navbar } from 'reactstrap';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="page-back">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
