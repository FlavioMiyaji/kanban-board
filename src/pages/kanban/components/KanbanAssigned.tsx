import React from 'react';
import logo from '../../../assets/logo.svg';
import avatar from '../../../assets/user-avatar.jpeg';

import './KanbanAssigned.css';

interface IUser {
  name: string;
  photo?: string;
}

interface IAssignedProps {
  user?: IUser;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Assigned: React.FC<IAssignedProps> = ({ user, onClick }): JSX.Element => {
  let content = (<img src={logo} alt="" />);
  if (user) {
    const { name, photo } = user;
    if (photo) {
      content = (<img src={avatar} alt="" />);
    } else if (name) {
      content = (<span>{name.substring(0, 1)}</span>);
    }
  }
  return (
    <div className="assigned-to" onClick={onClick}>
      {content}
    </div>
  )
}

export default Assigned;
