import React, { Component } from 'react';

class NewGuess extends Component {
    handleChange(e) {
        var value = e.target.value;
        alert(value);
    }
    render() {
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return (
            <div className="new-guess">
                <select type="text" onChange={this.handleChange} >
                    <option>Pick A Letter</option>
                    {
                        letters.split('').map(
                            (letter) => {
                                console.log(letter);
                                return <option value={letter} key={letter}>{letter}</option>
                            }
                        )
                    }
                </select>
            </div>
        )
    }
}

export default NewGuess;
