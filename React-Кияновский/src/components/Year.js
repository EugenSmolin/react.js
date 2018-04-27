import React, { Component } from 'react';

class Year extends Component {
	constructor(props) {
		super(props);
		this.onBtnClick = this.onBtnClick.bind(this);
	}
	onBtnClick(event) {
		return this.props.setYear(event.target.textContent)
	}

	render() {
		return (
			<div>
				<button onClick={this.onBtnClick}>1975</button>
				<button onClick={this.onBtnClick}>1990</button>
				<button onClick={this.onBtnClick}>2018</button>
				<p>This year has been chosen - {this.props.year}</p>
			</div>
		);
	}
}

export default Year;