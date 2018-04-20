import React, { Component } from 'react';

class Forms extends Component {
	// select
	constructor(props) {
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			selectedValue: "angular"
		}
		this.helper()
	}

	helper() {
		setInterval(() => {
			console.log(this.state.selectedValue);
		}, 1000)
	}

	handleSelect(event) {
		this.setState({selectedValue: event.target.value})
	}

	handleSubmit() {
		alert("Current data is submitted: " + this.state.selectedValue);
		// отправляет данные выбраного элемента из select 
	}

    render() {
		return (
			<form>
				<select
					value={this.state.selectedValue}
					onChange={this.handleSelect}
				>
					<option value="angular">Angular</option>
					<option value="react">React</option>
					<option value="ember">Ember</option>					
				</select>
				<input type="button" value="submit" onClick={this.handleSubmit} />
		    </form>
		);
    }
}

// ===========================

class Forms extends Component {
	// textarea
	constructor(props) {
		super(props);
		this.handleText = this.handleText.bind(this);
		this.state = {
			text: "type here"
		}
		this.helper()
	}

	helper() {
		setInterval(() => {
			console.log(this.state.text);
		}, 1000)
	}

	handleText(event) {
		this.setState({text: event.target.value})
	}

    render() {
		return (
			<form>
				<textarea value={this.state.text} onChange={this.handleText}></textarea>
		    </form>
		);
    }
}

// =========================

class Forms extends Component {
	// checkbox || radio button
	constructor(props) {
		super(props);
		this.handleCheckbox = this.handleCheckbox.bind(this);
		this.state = {
			checkboxGroup: {
				angular: false,
				react: true,
				ember: false
			}
		}
		this.helper()
	}

	helper() {
		setInterval(() => {
			console.log(this.state.checkboxGroup);
		}, 1000)
	}

	handleCheckbox(event) {
		let object = Object.assign(this.state.checkboxGroup);
		object[event.target.value] = event.target.checked;
		this.setState({checkboxGroup: object})
	}

	// handleChange(event) {
	// 	console.log(event.target.value);
	// }

    render() {
		return (
			<div>
				<form>
			    	<input 
			    		type="checkbox"
			    		value="angular"
			    		checked={this.state.checkboxGroup.angular}
			    		onChange={this.handleCheckbox} 
			    	/>
			    	<input 
			    		type="checkbox"
			    		value="react"
			    		checked={this.state.checkboxGroup.react}
			    		onChange={this.handleCheckbox} 
			    	/>
			    	<input 
			    		type="checkbox"
			    		value="ember"
			    		checked={this.state.checkboxGroup.ember}
			    		onChange={this.handleCheckbox} 
			    	/>
			    </form>
			</div>
		);
    }
}


export default Forms;
