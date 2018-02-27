import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   // getName(lastName) {
   //    return "Eugen " + lastName;
   // }
   render() {
      //var myName = 'Eugen';
      var i = 5;
      var myStyle = {
         color: '#61DAFB',
         textDecoration: 'underline'
      };
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               {/*<h1 className="App-title"> Hello {this.getName()} </h1>*/}
               <h1 className="App-title">React.js</h1>
               <h2 style={myStyle} className="App-title"> Hello {i == 5 ? 'true' : 'false'} </h2>
            </header>
         </div>
      );
   }
}

export default App;
