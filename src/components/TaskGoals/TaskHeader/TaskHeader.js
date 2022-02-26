import React from 'react'
import Button from '../../UI/Button/Button'
import '../TaskHeader/TaskHeader.css'

const TaskHeader = (props) => {
  return (
    <header>
        <h1>My Task Tracker</h1>
        <Button
        color={props.showAddGoal ? '#09325c': 'green'}
        text = {props.showAddGoal ? 'Hide Form' : 'Add New Task'}
        onClick={props.onAddGoal}></Button>
   </header>
  )
}

export default TaskHeader