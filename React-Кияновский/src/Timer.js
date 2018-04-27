import React, { Component } from 'react';
//import HL from './HL.png';

class TimerWrapper extends Component {
	constructor(props) {
		super(props);
		this.startTimer = this.startTimer.bind(this);
		this.state = {
			timeLeft: null,
			timer: null
		}
	}

	startTimer(timeLeft) {
		clearInterval(this.state.timer);
		let timer = setInterval(() => {
			var timeLeft = this.state.timeLeft - 1;
			if (timeLeft === 0) {
				clearInterval(timer);
			}
			this.setState({
				timeLeft: timeLeft
			})
		}, 1000);
		return this.setState({
			timeLeft: timeLeft,
			timer: timer 
		});
	}

	render() {
		return (
			<div>
				<h1>Timer</h1>
				<div>
					<Button time="5" startTimer={this.startTimer} />
					<Button time="10" startTimer={this.startTimer} />
					<Button time="15" startTimer={this.startTimer} />
				</div>
				<TimerDisplay timeLeft={this.state.timeLeft} />
				<div id="end"></div>
			</div>
		);
	}
}

class Button extends Component {
	handleStartTimer() {
		return (
			this.props.startTimer(this.props.time)
		);
	}
	render() {
		return (
			<button onClick={this.handleStartTimer.bind(this)}>
				{this.props.time} секунд.
			</button>
		);
	}
}

class TimerDisplay extends Component {
	render() {
		if (this.props.timeLeft === 0) {
			document.getElementById('end').innerHTML = 'END';
		}
		if (this.props.timeLeft === 0 || this.props.timeLeft === null) {
			return <div></div>
		}
		return <h3>Осталось времени: {this.props.timeLeft}</h3>
	}
}

export default TimerWrapper;