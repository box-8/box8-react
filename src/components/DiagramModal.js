import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import config from '../config';

const DiagramModal = ({ 
  show, 
  handleClose, 
  onSave, 
  onDelete, 
  onRefresh,
  onEnhance,
  initialData = {} 
}) => {
  const [diagramName, setDiagramName] = useState('');
  const [description, setDescription] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (show && initialData) {
      // Enlever l'extension .json si présente
      const displayName = initialData.name ? initialData.name.replace(/\.json$/, '') : '';
      setDiagramName(displayName);
      setDescription(initialData.description || '');
    }
  }, [show, initialData]);

  const handleSave = () => {
    const diagramData = {
      name: diagramName,
      description: description,
    };
    onSave(diagramData);
    handleClose();
  };

  const handleDelete = async () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce diagramme ?')) {
      setIsDeleting(true);
      try {
        // S'assurer que le nom du fichier a l'extension .json
        const fileName = initialData.name.endsWith('.json') 
          ? initialData.name 
          : `${initialData.name}.json`;

        const response = await fetch(`${config.API_BASE_URL}/designer/delete-diagram/${fileName}`, {
          method: 'DELETE',
          credentials: 'include',
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.detail || 'Erreur lors de la suppression du diagramme');
        }

        onDelete && onDelete();
        handleClose();
      } catch (error) {
        console.error('Erreur:', error);
        alert(error.message);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {initialData.id ? 'Modifier le Diagramme' : 'Editer le Diagramme'}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nom du diagramme</Form.Label>
            <Form.Control
              type="text"
              value={diagramName}
              onChange={(e) => setDiagramName(e.target.value)}
              placeholder="Entrez le nom du diagramme"
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
              placeholder="Décrivez le but et le fonctionnement du diagramme"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Améliorer le diagramme</Form.Label>
            <div className="d-flex gap-2">
              <Form.Control
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Entrez votre message pour améliorer le diagramme..."
              />
              <Button
                variant="primary"
                onClick={() => {
                  onEnhance(chatInput);
                  setChatInput('');
                }}
              >
                <i className="bi bi-play"></i>
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        {initialData.name && (
          <>
            <Button 
              variant="danger" 
              onClick={handleDelete}
              disabled={isDeleting}
              className="me-auto"
            >
              {isDeleting ? 'Suppression...' : 'Supprimer'}
            </Button>
            <Button
              variant="success"
              onClick={onRefresh}
              title="Refresh Current Diagram"
              className="me-2"
            >
              <i className="bi bi-arrow-clockwise"></i> Refresh
            </Button>
          </>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Annuler
        </Button>
        <Button 
          variant="primary" 
          onClick={handleSave}
          disabled={!diagramName.trim()}
        >
          Enregistrer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DiagramModal;
