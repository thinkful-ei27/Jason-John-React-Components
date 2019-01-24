import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input';

function DataList(props) {
  return (
      <div className="form-group">
        <label htmlFor={props.name}>
            {props.title}
        </label>
        <Input 
            list={props.list}
            onChange={props.handleChange}
            value={props.value}
            name={props.textName}
        />
        <datalist
            id={props.name}
            name={props.name}
            value={props.value}
        >
            {props.options.map(option => {
                return (
                    <option 
                        key={option}
                        value={option}
                        label={option}
                    >
                        {option}
                    </option>
                );
            })}
        </datalist>
      </div>
  )
}

// DataList.propTypes = {

// }

export default DataList

