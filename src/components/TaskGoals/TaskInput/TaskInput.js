import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './TaskInput.module.css';

// const FormControl = styled.div
// `
//     margin: 0.5rem 0;
  
//     & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? 'red' : 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   `;


const TaskInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>My Task Tracker</label>
        <input
          type="text"
          placeholder='What do you want to achieve?'
          onChange={goalInputChangeHandler}
        />
        <label>Date & time</label>
         <input
          type="text"
          placeholder='Date & Time'
          onChange={goalInputChangeHandler}
        />
        <label>Set Priority?</label>
         <input
          type="checkbox"
          // value={reminder}
          onChange={goalInputChangeHandler}
        />
      </div>
      
      <Button type="submit">Save Task</Button>
    </form>
  );
};

export default TaskInput;
