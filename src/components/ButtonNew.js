import React from 'react'
import PropTypes from 'prop-types'

function ButtonNew(props) {
  return (
    <button
        className={props.type == 'primary' ? 'btn btn-primary' : 'btn btn-secondary'}
        onClick={props.action}
    >
        {props.title}
    </button>
  );
}

// ButtonNew.propTypes = {

// }

export default ButtonNew

