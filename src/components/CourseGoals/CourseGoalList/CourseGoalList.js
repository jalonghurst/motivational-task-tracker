import React from 'react';

import Task from '../CourseGoalItem/Task';
import './CourseGoalList.css';

const CourseGoalList = props => {
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

export default CourseGoalList;
