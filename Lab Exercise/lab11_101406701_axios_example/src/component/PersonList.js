import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div>
                <div className="user-list">User List</div>
                {this.state.persons.map(person => (
                    <div className="user-card" key={person.login.uuid}>
                        <div className="user-details">
                            <img
                                src={person.picture.large}
                                alt={`${person.name.first} ${person.name.last}`}
                                width="100"
                                height="100"
                            />
                            <div className="user-info">
                                <h2>{person.name.first} {person.name.last}</h2>
                                <p><strong>User Name:</strong> {person.login.username}</p>
                                <p><strong>Email:</strong> {person.email}</p>
                                <p><strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</p>
                                <p><strong>Register Date:</strong> {new Date(person.registered.date).toLocaleString()}</p>
                                <p><strong>Phone:</strong> {person.phone}</p>
                                <button className="details-button">Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    
}

export default PersonList;
