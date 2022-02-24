import React from 'react'
import Button from '../../UI/Button/Button'
import TaskHeader from './TaskHeader/TaskHeader.css'

const TaskHeader = (props) => {
  return (
    <header>
        <h1>My Task Tracker</h1>
        <Button onClick={props.onAddGoal}>Add New Task</Button>
   </header>
  )
}

export default TaskHeader