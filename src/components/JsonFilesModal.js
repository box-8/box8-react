import React, { useState, useEffect } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

const JsonFilesModal = ({ show, handleClose, onFileSelect }) => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);

  const fetchOptions = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    if (show) {
      // Charger la liste des fichiers quand le modal s'ouvre
      fetch('http://localhost:8000/chatapp/designer/json-files/', fetchOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setFiles(data || []);
        })
        .catch(error => console.error('Error loading files:', error));
    }
  }, [show]);

  const handleFileClick = (filename) => {
    setSelectedFile(filename);
    // Charger le contenu du fichier sélectionné
    fetch(`http://localhost:8000/chatapp/designer/json-files/${filename}`, fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFileContent(data);
      })
      .catch(error => console.error('Error loading file content:', error));
  };

  const handleLoadDiagram = () => {
    if (fileContent) {
      console.log(fileContent);
      onFileSelect(fileContent);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Load Diagram</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <h5>Available Diagrams</h5>
            <ListGroup>
              {files.map((file, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  active={selectedFile === file}
                  onClick={() => handleFileClick(file)}
                >
                  {file}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="col-md-6">
            <h5>Preview</h5>
            {fileContent && (
              <pre style={{ maxHeight: '300px', overflow: 'auto' }}>
                {JSON.stringify(fileContent, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleLoadDiagram}
          disabled={!fileContent}
        >
          Load Diagram
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JsonFilesModal;
