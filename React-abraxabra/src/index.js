import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import element from './Lesson';
//import registerServiceWorker from './registerServiceWorker';

// Lesson 1
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Eugen',
  lastName: 'Petrov'
};
const element = (
  <h1> Hello, {formatName(user)}! </h1>
);

// ============ //
/*function getGreeting(user) {
	if(user) {
		return <h1>Hello, {formatName(user)}!</h1>
	}
	return <h1>Hello, Stranger.</h1>
}*/

ReactDOM.render(
	element,
	document.getElementById('test')
);

//registerServiceWorker();
