import React from 'react';

const GuessBox = ({letter, status, onClick}) => {
  var disabled = status.indexOf('guessed') > -1
  return (
    <button className={"guess-box " + status}
      disabled={disabled}
      onClick={() => onClick(letter)}>
      { letter }
    </button>
  )
}

export default GuessBox;
