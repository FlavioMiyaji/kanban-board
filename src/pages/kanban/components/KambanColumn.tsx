import React from 'react';

import './KambanColumn.css';

interface IStage {
  name: string;
  tasks: ITask[];
}

interface ITask {
  summary: string;
}

interface IKambanColumnProps {
  stage: IStage;
}

const KambanColumn: React.FC<IKambanColumnProps> = ({ stage }): JSX.Element => {
  const { name, tasks } = stage;
  return (
    <div className="kamban-column">
      {name}
      {tasks.map(task => (
        <div className="card">
          {task.summary}
        </div>
      ))}
    </div>
  );
}

export default KambanColumn;
