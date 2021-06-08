import React from 'react';

import './TaskForm.css';

const TaskForm: React.FC = (): JSX.Element => {
  return (
      <form action="" className="task">
        <label>
          <p>Assign to</p>
          <input />
        </label>
        <label>
          <p>Task</p>
          <input />
        </label>
        <label>
          <p>Description</p>
          <input />
        </label>
        <footer>
          <button>Clear</button>
          <button>Submit</button>
        </footer>
      </form>
  );
}

export default TaskForm;
