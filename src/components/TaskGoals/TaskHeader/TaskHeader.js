import React from 'react'
import Button from '../../UI/Button/Button'


const TaskHeader = (props) => {
  return (
    <header>
        <h1>My Task Tracker</h1>
        <Button onClick={props.onAddGoal}>Add Task</Button>
   </header>
  )
}

export default TaskHeader