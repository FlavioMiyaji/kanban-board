import React, {
  useCallback,
  useState,
} from 'react';
import {
  TaskCreate,
  KanbanBoard,
} from './components';

import './KanbanBoardPage.css';

interface IStage {
  name: string;
  tasks: ITask[];
}

interface ITask {
  summary: string;
}

const KanbanBoardPage: React.FC = (): JSX.Element => {
  const [stages, setStages] = useState<IStage[]>([{
    name: 'Teste',
    tasks: []
  }]);
  const handleAddTask = useCallback((summary: string) => {
    setStages((stages) => {
      const [first, ...rest] = stages;
      let { tasks } = first;
      tasks = [...tasks, { summary }];
      return [{
        ...first, tasks,
      }, ...rest];
    });
  }, []);
  return (
    <div className="kanban-board-container">
      <header>
        <div className="logo">LOGO HERE</div>
        <div className="project">Project name HERE</div>
      </header>
      <TaskCreate handleAddTask={handleAddTask} />
      <KanbanBoard stages={stages} />
    </div>
  );
}

export default KanbanBoardPage;
