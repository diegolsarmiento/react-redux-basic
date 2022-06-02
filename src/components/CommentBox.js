import React, { Component } from 'react';

class ComponentBox extends Component {

    title = 'Add comment';
    buttonText = 'Submit Comment';

    state = { comment: ''};

    handleChange = event => {
        this.setState({ comment: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        // TODO: submit action
        this.setState({comment: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} role="box">
                <h4>{this.title}</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>{this.buttonText}</button>
                </div>
            </form>
        )
    }
}

export default ComponentBox;