import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'account.png'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'account.png'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'account.png'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'account.png'
    }
];

class Contact extends Component {
    render() {
        return <li className="contact"> 
            <img className="contact-image" src={this.props.image} width="50px" height="50px" />
            <div className="contact-info">
                <div className="contact-name"> {this.props.name} </div>
                <div className="contact-number"> {this.props.phone} </div>
            </div>
        </li>
    }
}

class ContactsList extends Component {
    getInitialState() {
        //return {
            displayedContacts: CONTACTS
        //};
    }

    handleSearch(event) {
        const searchQuery = event.target.value.toLowerCase();
        const displayedContacts = CONTACTS.filter(function(el) {
            const searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });
    }

    render() {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch} />
                <ul className="contact-list">
                    {
                        this.state.displayedContacts.map(function(el) {
                            return <Contact 
                                key={el.id} 
                                name={el.name}
                                phone={el.phoneNumber}
                                image={el.image} 
                            />;
                        })
                    }
                </ul>
            </div>  
        );
    }
}

export default ContactsList;