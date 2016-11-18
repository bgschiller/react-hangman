import React, { Component } from 'react';
import _ from 'underscore';
class Guy extends Component {
    render() {
        var {guesses, word_so_far} = this.props
        var possibleElements = [
            (<div className="head" key="head" />),
            (<div className="body" key="body" />),
            (<div className="left-arm" key="left-arm" />),
            (<div className="right-arm" key="right-arm" />),
            (<div className="left-leg" key="left-leg" />),
            (<div className="right-leg" key="right-leg" />)
        ]
        var diff = _.difference(guesses, word_so_far)
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
