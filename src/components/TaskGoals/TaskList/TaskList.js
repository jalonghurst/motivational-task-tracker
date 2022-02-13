import React from 'react';

import Task from '../Task/Task';
import './TaskList.css';

const TaskList = props => {
  return (
    <ul className="goal-list">
      <span>Tasks left to complete = {props.taskCount.length}</span>
      {props.items.map(goal => (
        <Task
          key={goal.id}
          id={goal.id}
          reminder={goal.reminder}
          onDelete={props.onDeleteItem}
          onToggle={props.onToggle}
        >
          <p>{goal.text}</p>
          <p>{goal.date}</p>
        </Task>
      ))}
    </ul>
  );
};

export default TaskList;
