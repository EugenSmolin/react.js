import React, { Component } from 'react';

class Developments extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			counter: 0
		}
	}

	handleClick() {
		this.setState({counter: ++this.state.counter})
	}

    render() {
		return (
		    <div>
		    	<Button handler={this.handleClick} />
		    	<TextCounter counter={this.state.counter} />
		    </div>
		);
    }
}

class Button extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.handler}> Click! </button>
			</div>				
		);
	}
}

class TextCounter extends Component {
	render() {
		return (
			<p>Counter - {this.props.counter}</p>
		);
	}
}

export default Developments;
