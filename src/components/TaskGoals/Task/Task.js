import React from 'react';
import {GiCrossMark, GiCheckMark} from 'react-icons/gi'

import './Task.css';

const Task = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li 
      className={`goal-item ${props.reminder ? 'reminder' : ''}`} 
      onDoubleClick={() => props.onToggle(props.id)}>
        {props.children} 
        <GiCrossMark style={{alignSelf: 'center'}} onClick={deleteHandler}/>
        <GiCheckMark style={{alignSelf: 'center'}}/>
    </li>
  );
};

export default Task;
