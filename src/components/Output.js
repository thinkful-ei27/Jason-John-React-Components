import React from 'react'
import PropTypes from 'prop-types'

function Output(props) {
  return (
    <output
        name={props.name}
        htmlFor={props.for}
    ></output>
  )
}

Output.propTypes = {

}

export default Output

