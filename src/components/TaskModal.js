import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RELATIONSHIP_TYPES = [
  { text: "Collaborates with", value: "collaborates" },
  { text: "Supervises", value: "supervises" },
  { text: "Assists", value: "assists" },
  { text: "Delegates to", value: "delegates" }
];

const TaskModal = ({ show, onHide, onAdd, onUpdate, onDelete, selectedEdge, nodes }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    description: '',
    expectedOutput: '',
    type: ''
  });

  useEffect(() => {
    if (selectedEdge) {
      setFormData({
        from: selectedEdge.source,
        to: selectedEdge.target,
        description: selectedEdge.data?.description || '',
        expectedOutput: selectedEdge.data?.expectedOutput || '',
        type: selectedEdge.data?.type || ''
      });
    } else {
      setFormData({
        from: '',
        to: '',
        description: '',
        expectedOutput: '',
        type: ''
      });
    }
  }, [selectedEdge, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const taskData = {
      ...formData,
      id: selectedEdge ? selectedEdge.id : `${formData.from}-${formData.to}`
    };

    if (selectedEdge) { 
      onUpdate(taskData);
    } else {
      onAdd(taskData);
    }

    onHide();
    // Reset form
    setFormData({
      from: '',
      to: '',
      description: '',
      expectedOutput: '',
      type: ''
    });
  };

  const handleDelete = () => {
    onDelete(selectedEdge.id);
    onHide();
  };

  const handleSwap = () => {
    setFormData({
      ...formData,
      from: formData.to,
      to: formData.from
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{selectedEdge ? 'Edit Task' : 'Add Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <div className="mb-3 d-flex align-items-center gap-2">
            <Form.Group className="flex-grow-1">
              <Form.Label>From Agent</Form.Label>
              <Form.Select
                value={formData.from}
                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                required
                disabled={selectedEdge}
              >
                <option value="">Select agent...</option>
                {nodes
                  .filter((node) => node.type !== 'output')
                  .map((node) => (
                    <option key={node.id} value={node.id}>
                      {node.data.role}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
            <div className="d-flex align-items-end" style={{ paddingBottom: '5px' }}>
              <Button
                variant="outline-secondary"
                onClick={handleSwap}
                title="Swap agents"
                disabled={selectedEdge}
              >
                ↔
              </Button>
            </div>
            <Form.Group className="flex-grow-1">
              <Form.Label>To Agent</Form.Label>
              <Form.Select
                value={formData.to}
                onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                required
                disabled={selectedEdge}
              >
                <option value="">Select agent...</option>
                {nodes.map((node) => (
                  <option key={node.id} value={node.id}>
                    {node.data.role}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Expected Output</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.expectedOutput}
              onChange={(e) => setFormData({ ...formData, expectedOutput: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Relationship Type</Form.Label>
            <Form.Select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option value="">Select type...</option>
              {RELATIONSHIP_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.text}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="d-flex gap-2">
            <Button type="submit" variant="primary">
              {selectedEdge ? 'Update' : 'Add'} Task
            </Button>
            {selectedEdge && (
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            )}
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskModal;
