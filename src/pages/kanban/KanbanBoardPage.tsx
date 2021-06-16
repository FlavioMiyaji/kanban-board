import React, {
  useCallback,
  useState,
} from 'react';
import {
  TaskCreate,
  KanbanBoard,
} from './components';
import logo from '../../assets/logo.svg'

import './KanbanBoardPage.css';

interface IStage {
  name: string;
  tasks: ITask[];
}

interface ITask {
  summary: string;
  assigned?: string;
  type?: string;
}

const text = `Lorem ipsum dolor sit amet 
consectetur adipisicing elit. Fugiat qui 
distinctio culpa inventore. Vero ipsum 
quas nesciunt. Non, facilis ab.`;

const KanbanBoardPage: React.FC = (): JSX.Element => {
  const [stages, setStages] = useState<IStage[]>([{
    name: 'TODO',
    tasks: [{
      summary: text,
      assigned: 'Flavio',
      type: 'Development'
    }, {
      summary: text,
    }, {
      summary: text,
      assigned: 'Flavio',
      type: 'Planning'
    }]
  }, {
    name: 'Analyzing',
    tasks: [{ summary: text }]
  }, {
    name: 'Analyzed',
    tasks: [{ summary: text }]
  }, {
    name: 'Developing',
    tasks: [{ summary: text }, { summary: text }, { summary: text }, { summary: text }, { summary: text }]
  }, {
    name: 'Developed',
    tasks: []
  }, {
    name: 'Developed',
    tasks: []
  }, {
    name: 'Testing',
    tasks: []
  }, {
    name: 'Done',
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
        <img className="logo" src={logo} alt="logo" />
        <h1 className="project">Kanban board</h1>
      </header>
      <TaskCreate handleAddTask={handleAddTask} />
      <KanbanBoard stages={stages} />
    </div>
  );
}

export default KanbanBoardPage;
