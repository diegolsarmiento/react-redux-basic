import React, { Component } from 'react';

class ComponentBox extends Component {

    title = 'Add comment';
    buttonText = 'Submit Comment';

    render() {
        return (
            <form>
                <h4>{this.title}</h4>
                <textarea />
                <div>
                    <button>{this.buttonText}</button>
                </div>
            </form>
        )
    }
}

export default ComponentBox;