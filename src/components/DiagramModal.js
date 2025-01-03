import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const DiagramModal = ({ show, handleClose, onSave, initialData = {} }) => {
  const [diagramName, setDiagramName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialData) {
      setDiagramName(initialData.name || '');
      setDescription(initialData.description || '');
    }
  }, [initialData]);

  const handleSave = () => {
    const diagramData = {
      name: diagramName,
      description: description,
    };
    onSave(diagramData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {initialData.id ? 'Edit Diagram' : 'New Diagram'}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Diagram Name</Form.Label>
            <Form.Control
              type="text"
              value={diagramName}
              onChange={(e) => setDiagramName(e.target.value)}
              placeholder="Enter diagram name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button 
          variant="primary" 
          onClick={handleSave}
          disabled={!diagramName.trim()}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DiagramModal;
