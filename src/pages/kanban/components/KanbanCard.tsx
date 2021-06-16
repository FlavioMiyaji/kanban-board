import React from 'react';
import {
  FiArrowLeft,
  FiArrowRight,
  FiEdit,
} from 'react-icons/fi';
import logo from '../../../assets/logo.svg';

import './KanbanCard.css';

interface ITask {
  summary: string;
  assigned?: string;
  type?: string;
}

interface IKanbanCardProps {
  task: ITask;
}

const KanbanCard: React.FC<IKanbanCardProps> = ({ task }): JSX.Element => {
  const {
    summary,
    assigned,
    type,
  } = task;
  const handleNotReady = () => alert('Operation is not ready yet.');
  const handleAssigned = () => handleNotReady();
  const handleLeft = () => handleNotReady();
  const handleRight = () => handleNotReady();
  const handleEdit = () => handleNotReady();
  return (
    <div className="kanban-card">
      {!!type && <p className="type">{type}</p>}
      <span className="title">{summary}</span>
      <div className="assigned-to" onClick={handleAssigned}>
        {!assigned ? (
          <img src={logo} alt="" />
        ) : (
          <span>{assigned.substring(0, 1)}</span>
        )}
      </div>
      <FiArrowLeft className="icon left" size={24} onClick={handleLeft} />
      <FiArrowRight className="icon right" size={24} onClick={handleRight} />
      <FiEdit className="icon edit" size={24} onClick={handleEdit} />
    </div>
  );
}

export default KanbanCard;
