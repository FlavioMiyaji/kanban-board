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
        <p>Summary</p>
        <input />
      </label>
      <label>
        <p>Alias</p>
        <input />
      </label>
      <label>
        <p>Type</p>
        <input />
      </label>
      <label>
        <p>Version</p>
        <input />
      </label>
      <label>
        <p>Aproved</p>
        <input />
      </label>
      <label>
        <p>Review required</p>
        <input />
      </label>
      <footer>
        <button>Clear</button>
        <button type="submit">Submit</button>
      </footer>
    </form>
  );
}

export default TaskForm;
