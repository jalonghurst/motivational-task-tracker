import React from 'react';
import {GiCrossMark} from 'react-icons/gi'

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" >
      {props.children} <GiCrossMark onClick={deleteHandler}/>
    </li>
  );
};

export default CourseGoalItem;
