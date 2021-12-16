import React from 'react';

import Task from '../Task/Task';
import './TaskList.css';

const TaskList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <Task
          key={goal.id}
          id={goal.id}
          reminder={goal.reminder}
          onDelete={props.onDeleteItem}
          onToggle={props.onToggle}
        >
          {goal.text}
        </Task>
      ))}
    </ul>
  );
};

export default TaskList;
