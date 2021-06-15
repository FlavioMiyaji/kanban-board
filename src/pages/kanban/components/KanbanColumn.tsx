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
      <h1>
        {name}
      </h1>
      <div className="items">
        {tasks.map(task => (
          <KanbanCard task={task} />
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;
