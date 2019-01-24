import React from 'react'
//import PropTypes from 'prop-types'

function Checkbox(props) {
  return (
    <div className="form-group">
        <label htmlFor={props.name} className="form-label">
            {props.title}
        </label>
        <div className="checkbox">
            {props.options.map(option => {
              return (
                <label key={option} className="checkbox-inline">
                  <input
                    id={props.name}
                    name={props.name}
                    onChange={props.handleChange}
                    value={option}
                    checked={props.selectedOptions.indexOf(option) > -1}
                    type="checkbox"
                  />
                  {option}
                </label>
              )
            })}
        </div>      
    </div>
  )
}

// Checkbox.propTypes = {

// }

export default Checkbox

