import React from 'react';

const NewGuess = ({onGuess}) => {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return (
      <div className="new-guess">
          <select type="text" onChange={function(e) {
              onGuess(e.target.value)
            }} >
              <option>Pick A Letter</option>
              {
                letters.split('').map(
                    (letter) => {
                        return <option value={letter} key={letter}>{letter}</option>
                    }
                )
              }
          </select>
      </div>
  )
}

export default NewGuess;
