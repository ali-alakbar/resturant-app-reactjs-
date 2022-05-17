import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Card = (props) => {
  return (
    <div className='card-content'>
      <FontAwesomeIcon icon={props.icon} className="icon" />
      <h2 className="title">{props.title}</h2>
      <p className="content"> {props.content} </p>
    </div>
  );
}

export default Card