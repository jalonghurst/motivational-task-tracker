import React from 'react'
import Button from '../../UI/Button/Button'
import '../TaskHeader/TaskHeader.css'

const TaskHeader = (props) => {
  return (
    <header>
        <h1>My Task Tracker</h1>
        <Button 
        color={props.onAddGoal ? '#09325c': 'green'} 
        text={props.onAddGoal ? 'Hide Form' : 'Add New Task'} 
        onClick={props.onAddGoal}/>
   </header>
  )
}

export default TaskHeader