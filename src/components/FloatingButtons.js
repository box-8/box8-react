import React from 'react';
import { Button } from 'react-bootstrap';

const FloatingButtons = ({ onAddAgent, onAddTask, onCreateCrewAI }) => {
  return (
    <div className="floating-buttons">
      <Button
        variant="primary"
        className="floating-button"
        onClick={onAddAgent}
        title="Add Agent"
      >
        <i className="bi bi-person-plus"></i>
      </Button>
      <Button
        variant="success"
        className="floating-button"
        onClick={onAddTask}
        title="Add Task"
      >
        <i className="bi bi-link"></i>
      </Button>
      <Button
        variant="warning"
        className="floating-button"
        onClick={onCreateCrewAI}
        title="Create CrewAI Process"
      >
        <i className="bi bi-play-fill"></i>
      </Button>
    </div>
  );
};

export default FloatingButtons;
