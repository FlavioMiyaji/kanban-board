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
}

interface IKanbanCardProps {
  task: ITask;
}

const KanbanCard: React.FC<IKanbanCardProps> = ({ task }): JSX.Element => {
  const { summary } = task;
  return (
    <div className="kanban-card">
      <div className="type">Type</div>
      <span className="title">{summary}</span>
      <img src={logo} alt="" className="assigned-to"/>
      <FiArrowLeft className="icon left" size={24} />
      <FiArrowRight className="icon right" size={24} />
      <FiEdit className="icon edit" size={24} />
    </div>
  );
}

export default KanbanCard;
