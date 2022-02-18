import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './TaskInput.module.css';

const TaskInput = props => {
  const [text, setText] = useState('');
  const [day, setDate] = useState('')
  const [reminder, setReminder] = useState(false)
  const [isValid, setIsValid] = useState(true);

  const taskInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setText(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (text.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(text, day, reminder);

    // FIX: setText not clearing field on sumbit 
    setText('')
    setDate('')
    setReminder(false)
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Name Task </label>
        <input
          type="text"
          placeholder='What do you want to achieve?'
          onChange={taskInputChangeHandler}
        />
        <label>Date & Time</label>
         <input
          type="text"
          value={day}
          placeholder='Add Date & Time'
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Mark as important?</label>
        <p>*Tip: You can double click on a task to mark/unmark as important</p>
         <input
          style={{ width: 'fit-content'}}
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      
      <Button className="submit" type="submit">Save Task</Button>
    </form>
  );
};

export default TaskInput;
