import React, { Component } from 'react';

var Timer = React.createClass ({
   getInitialState: function() {
      return {
         seconds: 0
      }
   },

   componentDidMount: function() {
      this.timer = setInterval(this.tick, 1000)
   },

   tick: function() {
      this.setState({
         seconds: this.state.seconds + 1
      })
   },

   componentWillMount: function() {
      clearInterval(this.timer)
   },

   render() {
      return (
         <div> Прошло {this.state.seconds} секунд </div>
      );
   }
});

export default Timer;
