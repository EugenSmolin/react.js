import React, { Component } from 'react';

const DigitalClock = function(props) {
   return <div>{props.time}</div>
}

class Clock extends Component {
   constructor(props) {
      super(props);
      this.state = {
         currentTime: (new Date()).toLocaleString()
      }
      this.clockLauncher()
   }

   // события компонентов
   // 1 группа
   // componentWillMount() {} -- выполняет событие до запуска компонента
   // componentDidMount() {} -- выполняет событие после запуска компонента
   // 2 группа
   // componentWillReceiveProps() {}
   // shouldComponentUpdate() {}
   // componentWillUpdate() {} -- выполняет событие сразу после оновления компонета
   // componentWillUpdate() {}
   // 3 группа
   // componentWillUnmount() {} -- выполняет событие когда компонент удален

   componentWillMount() {
      console.log('component will mount')
   }

   componentDidMount() {
      console.log('component was mounted')
   }

   clockLauncher() {
      setInterval(() => {
         console.log('current time');
         this.setState({
            currentTime: (new Date()).toLocaleString()
         })
      }, 1000)
   }

   render() {
      return (
         <DigitalClock time={this.state.currentTime} />
      );
   }
}

export default Clock;
