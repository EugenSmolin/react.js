import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactList from './ContactList';

class App extends Component {
    render() {
        var myStyle = {
            color: '#61DAFB'
        };
        var container = {
            margin: '10px',
            padding: '10px',
            borderBottom: '1px solid #ccc'
        };
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">React.js</h1>
                    <h2 style={myStyle} className="App-title"> Lessons ITVDN </h2>
                </header>

                <div style={container}>

                    <ContactList />

                </div>
            </div>
        );
    }
}

export default App;
