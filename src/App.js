import React, { useState } from 'react';

import TaskList from './components/TaskGoals/TaskList/TaskList';
import TaskInput from './components/TaskGoals/TaskInput/TaskInput';
import TaskHeader from './components/TaskGoals/TaskHeader/TaskHeader';
import './App.css';
import InspirationalQuotes from './components/InspirationalQuotes/InspirationalQuotes';

const App = () => {
  const [showTaskForm, setShowTaskForm] = useState(true)
  const [tasks, setTasks] = useState([
    { text: 'Do all exercises!', id: 'g1', date: 'Due on 25th Feburary 2022', reminder: true},
    { text: 'Add your first task!', id: 'g2', date: 'Due on 16th March 2022', reminder: false }
  ]);

  const addGoalHandler = (enteredText, enteredDay, reminder) => {
    setTasks(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, date: enteredDay, id: Math.random().toString(), reminder: reminder});
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setTasks(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };
  
  const toggleReminder = (id) => {
    setTasks(
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
        taskCount={tasks}
        items={tasks} 
        onDeleteItem={deleteItemHandler} 
        onToggle={toggleReminder} 
      />
    );
  }

  return (
    <div  className="container"> 
    {/* Pomodoro Section */}
    <div className="card">
      <section id="goal-form">
        <InspirationalQuotes/>
        </section>
      </div>
    {/* Task List Section */}
      <div className="card">
      <section id="goal-form">
        <TaskHeader 
        onAddGoal={() => setShowTaskForm(!showTaskForm)}
        showAddGoal =  {showTaskForm}/>
        {showTaskForm && <TaskInput onAddGoal={addGoalHandler} />}
      </section>
      <section id="goals">
        {content}  
      </section>
      </div>
    {/* <span className="footer" style={{color: "gray", textAlign: "center", paddingTop: "3%", paddingBottom: "1%", fontSize: "0.9rem"}}>Copyright ⓒ 2022 Jacqueline Longhurst. All Rights Reserved.</span> */}
    </div>
  );
};

export default App;
