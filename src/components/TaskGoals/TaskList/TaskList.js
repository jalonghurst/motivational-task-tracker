import React from 'react';

import Task from '../Task/Task';
import './TaskList.css';

const TaskList = props => {
  return (
    <ul className="goal-list">
      <p>*Tip: Double click on a task to mark as important</p>
      {props.items.map(goal => (
        <Task
          key={goal.id}
          id={goal.id}
          reminder={goal.reminder}
          onDelete={props.onDeleteItem}
          onToggle={props.onToggle}
        >
          <span>{goal.text}</span>
          <p>{goal.date}</p>
        </Task>
      ))}
    </ul>
  );
};

export default TaskList;
