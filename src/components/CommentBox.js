import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class ComponentBox extends Component {

    title = 'Add comment';
    buttonText = 'Submit Comment';

    state = { comment: ''};

    handleChange = (event) => {
        this.setState({ comment: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} role="box">
                    <h4>{this.title}</h4>
                    <textarea aria-label="text-comment" onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>{this.buttonText}</button>
                    </div>
                </form>
                <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

export default connect(null, actions)(ComponentBox);