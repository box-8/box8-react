import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LoadingModal from './LoadingModal';

const FloatingButtons = ({
  onAddAgent,
  onAddTask,
  onCreateCrewAI,
  onSaveDiagram,
  onLoadDiagram,
  onNewDiagram,
  onShowResponse,
  hasDiagram,
  currentDiagramName,
  hasResponse,
  isAuthenticated,
  isLoading
}) => {
  const handleCreateCrewAI = () => {
    onCreateCrewAI('');
  };

  return (
    <div className="floating-buttons">
      {isAuthenticated && (
        <Button
          variant="secondary"
          className="floating-button"
          onClick={onLoadDiagram}
          title="Load Diagram"
        >
          <i className="bi bi-folder2-open"></i>
        </Button>
      )}

      {/* Bouton New Diagram commenté car déplacé dans JsonFilesModal
      <Button
        variant="primary"
        className="floating-button"
        onClick={onNewDiagram}
        title="New Diagram"
      >
        <i className="bi bi-file-earmark-plus"></i>
      </Button>
      */}

      {hasDiagram && isAuthenticated && (
        <>
          <Button
            variant="info"
            className="floating-button"
            onClick={onSaveDiagram}
            title="Save Diagram"
          >
            <i className="bi bi-diagram-3"></i>
          </Button>

          <Button
            variant="success"
            className="floating-button"
            onClick={onShowResponse}
            title="Show Response"
            disabled={!hasResponse}
          >
            <i className="bi bi-chat-text"></i>
          </Button>

          <Button
            variant="primary"
            className="floating-button"
            onClick={onAddAgent}
            title="Add Agent"
          >
            <i className="bi bi-person-plus"></i>
          </Button>

          <Button
            variant="primary"
            className="floating-button"
            onClick={onAddTask}
            title="Add Task"
          >
            <i className="bi bi-list-task"></i>
          </Button>
          <Button
            variant="warning"
            className="floating-button"
            onClick={handleCreateCrewAI}
            title="Create CrewAI"
          >
            <i className="bi bi-play-circle"></i>
          </Button>
        </>
      )}
      <LoadingModal show={isLoading} />
    </div>
  );
};

export default FloatingButtons;
