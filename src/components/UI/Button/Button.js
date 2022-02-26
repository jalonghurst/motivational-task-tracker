import React from 'react';
import styles from './Button.module.css';
// import PropTypes from 'prop-types'

const Button = props => {
  return (
    <button 
    type={props.type} 
    style={{ color: props.color}}
    className={styles.button} 
    onClick={props.onClick}>
      {props.children}
      {props.text}
    </button>
  );
};

// Button.defaultProps = {
//   color: 'steelblue',
// }

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string,
//   onClick: PropTypes.func,
// }



export default Button;
