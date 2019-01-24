import React from 'react';

export default function AboutYou(props){

  return(
    <div className="about-you">
    <label>About You</label><br />
    <textarea rows="5"
    columns="50" placeholder="just a little something..."
    value={props.value}
    onChange={props.handleChange}></textarea>
    </div>
  );
}