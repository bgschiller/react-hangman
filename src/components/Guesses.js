import React, { Component } from 'react';

class Guesses extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Previous Guesses</div>
                <div className="panel-body">
                    {
                        this.props.guesses.map(
                            (letter, index) =>
                                <h1 className="guess" key={index}>{letter}</h1>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Guesses;
