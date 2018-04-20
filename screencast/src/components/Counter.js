import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.handleClickMinus = this.handleClickMinus.bind(this);
		this.handleClickPlus = this.handleClickPlus.bind(this);
		this.state = {
			count: 0
		}
	}

	handleClickMinus() {
		//console.log('click');
		this.setState({
			count: this.state.count - 1
		})
	}

	handleClickPlus() {
		//console.log('click');
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		var styles = {
			paddingLeft: 10,
			paddingRight: 10
		};
		return (
			<div>
				<h1>Counter</h1>
				<button onClick={this.handleClickMinus}> - </button>
				<span style={styles}><strong>{this.state.count}</strong></span>
				<button onClick={this.handleClickPlus}> + </button>
			</div>
		);
	}
}

export default Counter;