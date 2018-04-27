import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import TimerWrapper from '../Timer';

import User from '../components/User';
import Year from '../components/Year';
import setYearAction from '../action/ActionYear';

import { connect } from 'react-redux';

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
               <div>
                  <img src={logo} className="App-logo left" alt="logo" />
                  <img src={logo} className="App-logo" alt="logo" />
                  <img src={logo} className="App-logo right" alt="logo" />
               </div>
               <h1 className="App-title">React.js</h1>
               <h2 style={myStyle} className="App-title"> Lessons - Кияновский </h2>
            </header>

            <div style={container}>
               {/*<h3> Timer </h3>*/}
               <TimerWrapper />
            </div>

            <div style={container}>
               {/*<h2>React - {this.props.user}</h2>
               <h2>Name - {this.props.name}</h2>
               <hr/>*/}
               <User user={this.props.user} name={this.props.name} />
               <Year year={this.props.year} setYear={this.props.setYearFunction} />
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      user: state.userInfo.user,
      name: state.userInfo.name,
      year: state.userInfo.year
   }
}

function mapDispatchToProps(dispatch) {
   return {
      setYearFunction: year => {
         dispatch(setYearAction(year))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
