import React from 'react';
import { KanbanCard } from '.';

import './KanbanColumn.css';

interface IStage {
  name: string;
  tasks: ITask[];
}

interface ITask {
  summary: string;
}

interface IKanbanColumnProps {
  stage: IStage;
}

const KanbanColumn: React.FC<IKanbanColumnProps> = ({ stage }): JSX.Element => {
  const { name, tasks } = stage;
  return (
    <div className="kanban-column">
      {name}
      {tasks.map(task => (
        <KanbanCard task={task} />
      ))}
    </div>
  );
}

export default KanbanColumn;
