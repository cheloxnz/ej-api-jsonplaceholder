import React from 'react';
import API from './api';


export default class PersonList extends React.Component {
    state = {
        name: '',
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        const response = await API.delete(`users/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}