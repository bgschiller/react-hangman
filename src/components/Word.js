import React, { Component } from 'react';

class Guy extends Component {
    render() {
        return (
            <div className="word">
                {
                    this.props.puzzle.split('').map(
                        (letter, index) =>
                            <span className="letter" key={index}>{letter}</span>
                    )
                }
            </div>
        )
    }
}

export default Guy;
