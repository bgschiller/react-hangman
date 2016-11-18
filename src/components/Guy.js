import React, { Component } from 'react';
import _ from 'underscore';
class Guy extends Component {
    render() {
        var {guessed_letters, puzzle} = this.props
        var possibleElements = [
            (<div className="head" key="head" />),
            (<div className="body" key="body" />),
            (<div className="left-arm" key="left-arm" />),
            (<div className="right-arm" key="right-arm" />),
            (<div className="left-leg" key="left-leg" />),
            (<div className="right-leg" key="right-leg" />)
        ]
        var diff = _.difference(guessed_letters, puzzle.split(''))
        return (
            <div className="Guy">
                <div className="pole-v" />
                <div className="pole-h" />
                <div className="noose" />
                {_.first(possibleElements, diff.length)}
            </div>
        )
    }
}

export default Guy;
