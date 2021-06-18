import React from 'react';
import {
  FiArrowLeft,
  FiArrowRight,
  FiEdit,
  FiTrash2,
} from 'react-icons/fi';
import Assigned from './KanbanAssigned';

import './KanbanCard.css';

interface IUser {
  name: string;
  photo?: string;
}

interface ITask {
  summary: string;
  assigned?: IUser;
  type?: string;
}

enum EDirection {
  forth = '>',
  back = '<',
}

interface ICardProps {
  task: ITask;
  onMove: Function;
  first: boolean;
  last: boolean;
}

const Card: React.FC<ICardProps> = (props): JSX.Element => {
  const {
    task,
    onMove,
    first,
    last,
  } = props;
  const {
    summary,
    assigned,
    type,
  } = task;
  const handleNotReady = () => alert('Operation is not ready yet.');
  const handleAssigned = () => handleNotReady();
  const handleLeft = () => onMove({ task, direction: EDirection.back });
  const handleRight = () => onMove({ task, direction: EDirection.forth });
  const handleEdit = () => handleNotReady();
  return (
    <div className="kanban-card">
      {!!type && <p className="type">{type}</p>}
      <span className="title">{summary}</span>
      <Assigned user={assigned} onClick={handleAssigned} />
      {first ? (
        <FiTrash2 className="icon left" size={24} onClick={handleLeft} />
      ) : (
        <FiArrowLeft className="icon left" size={24} onClick={handleLeft} />
      )}
      {last ? (
        <FiTrash2 className="icon right" size={24} onClick={handleRight} />
      ) : (
        <FiArrowRight className="icon right" size={24} onClick={handleRight} />
      )}
      <FiEdit className="icon edit" size={24} onClick={handleEdit} />
    </div>
  );
}

export default Card;
