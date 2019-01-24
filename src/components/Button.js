import React from 'react';

export default function Button(props) {

  function handleClick(e) {
    e.preventDefault();
    props.onPush(e.target);
  }

  return(
    <div>
    {props.options.map(option => {
      return (
        <button key={option.type} 
        className={option.type}
        onClick={handleClick}>{option.name}</button>
      )
    })}
    </div>
  )
};