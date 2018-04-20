import React, { Component } from 'react';

class Menu extends Component {
  render() {
  	let menus = [
  		"Home",
  		"Service",
  		"About Us",
  		"Contacts"
  	]
  	return (
  		<div>
	  		{menus.map((value, index) => {
	  			return (
	  				<div key={index}>
	  					<Link label={value} />
	  				</div>
	  			);
	  		})}
	  	</div>
  	);
  }
}

class Link extends Component {
	render() {
		const url = "/" + this.props.label.toLowerCase().trim().replace(' ', '-');
		return (
			<div>
				<a href={url}>{this.props.label}</a>
			</div>
		);
	}
}

export default Menu;
