import React, { useState } from 'react';

import TaskList from './components/CourseGoals/TaskList/TaskList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [tasks, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1', reminder: true},
    { text: 'Add your first task!', id: 'g2', reminder: false }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString(), reminder: false });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };
  
  const toggleReminder = (id) => {
    setCourseGoals(
      tasks.map((goal) =>
      goal.id === id  ? {...goal, reminder:
      !goal.reminder} : goal
      )
    )
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (tasks.length > 0) {
    content = (
      <TaskList 
        items={tasks} 
        onDeleteItem={deleteItemHandler} 
        onToggle={toggleReminder} 
      />
    );
  }

  return (
    <div  className="container"> 
    <div className="task-container"></div>
      <div className="task-container">
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <TaskList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
      
      </div>
     <span style={{color: "gray", textAlign: "center", paddingTop: "3%", paddingBottom: "1%", fontSize: "0.9rem"}}>Copyright ⓒ 2021 Jacqueline Longhurst. All Rights Reserved.</span>
    </div>
  );
};

export default App;
