import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import config from '../config';

const JsonFilesModal = ({ 
  show, 
  handleClose, 
  onFileSelect,
  onImportDiagram,
  onNewDiagram,
  reactFlowInstance,
  hasCurrentDiagram 
}) => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Memoize fetchOptions
  const fetchOptions = useMemo(() => ({
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }), []);

  const loadFiles = useCallback(() => {
    fetch(`${config.API_BASE_URL}/designer/list-json-files`, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFiles(data);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Erreur lors du chargement des fichiers');
      });
  }, [fetchOptions]);

  useEffect(() => {
    if (show) {
      loadFiles();
    }
  }, [show, loadFiles]);

  const handleFileClick = (filename) => {
    setSelectedFile(filename);
    // Charger le contenu du fichier sélectionné
    fetch(`${config.API_BASE_URL}/designer/get-diagram/${filename}`, fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFileContent(data);
      })
      .catch(error => console.error('Error loading file content:', error));
  };

  const handleFileDoubleClick = (filename) => {
    handleFileClick(filename);
    // Attendre que le contenu soit chargé avant de fermer le modal
    fetch(`${config.API_BASE_URL}/designer/get-diagram/${filename}`, fetchOptions)
      .then(response => response.json())
      .then(data => {
        onFileSelect(data, filename);
        handleClose();
        // Ajout du fitView après un court délai pour laisser le temps au diagramme de se charger
        setTimeout(() => {
          if (reactFlowInstance?.fitView) {
            reactFlowInstance.fitView({ padding: 0.2 });
          }
        }, 100);
      })
      .catch(error => console.error('Error loading file content:', error));
  };

  const handleLoadDiagram = () => {
    if (fileContent) {
      console.log(fileContent);
      onFileSelect(fileContent, selectedFile);
      handleClose();
      // Ajout du fitView après un court délai pour laisser le temps au diagramme de se charger
      setTimeout(() => {
        if (reactFlowInstance?.fitView) {
          reactFlowInstance.fitView({ padding: 0.2 });
        }
      }, 100);
    }
  };

  const handleImportDiagram = () => {
    if (fileContent) {
      console.log('Importing diagram:', fileContent);
      onImportDiagram(fileContent, selectedFile);
      handleClose();
      // Ajout du fitView après un court délai pour laisser le temps au diagramme de se charger
      setTimeout(() => {
        if (reactFlowInstance?.fitView) {
          reactFlowInstance.fitView({ padding: 0.2 });
        }
      }, 100);
    }
  };

  const handleDelete = async () => {
    if (!selectedFile) return;

    if (window.confirm(`Êtes-vous sûr de vouloir supprimer le diagramme "${selectedFile}" ?`)) {
      setIsDeleting(true);
      try {
        const response = await fetch(`${config.API_BASE_URL}/designer/delete-diagram/${selectedFile}`, {
          method: 'DELETE',
          credentials: 'include',
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.detail || 'Erreur lors de la suppression du diagramme');
        }

        // Réinitialiser la sélection et recharger la liste
        setSelectedFile(null);
        setFileContent(null);
        loadFiles();
      } catch (error) {
        console.error('Erreur:', error);
        alert(error.message);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Vérifier que c'est un fichier JSON
    if (!file.name.endsWith('.json')) {
      alert('Veuillez sélectionner un fichier JSON');
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${config.API_BASE_URL}/designer/upload-diagram`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'upload');
      }

      const data = await response.json();
      alert('Diagramme uploadé avec succès');
      loadFiles(); // Recharger la liste des fichiers
    } catch (error) {
      console.error('Error:', error);
      alert('Erreur lors de l\'upload du fichier');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Gestionnaire de diagrammes</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: 'calc(90vh - 200px)', overflow: 'hidden' }}>
        <div className="mb-3 d-flex justify-content-between">
          <Button variant="primary" onClick={() => {
            onNewDiagram();
            handleClose();
          }}>
            Nouveau
          </Button>
          <div>
            <input
              type="file"
              accept=".json"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
              id="json-file-upload"
            />
            <Button 
              variant="outline-primary" 
              onClick={() => document.getElementById('json-file-upload').click()}
              disabled={isUploading}
            >
              {isUploading ? 'Upload en cours...' : 'Uploader un diagramme'}
            </Button>
          </div>
        </div>
        <div className="row" style={{ height: '100%' }}>
          <div className="col-md-6" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="m-0">Available Diagrams</h5>
            </div>
            <ListGroup 
              style={{ 
                flexGrow: 1,
                overflowY: 'auto',
                maxHeight: 'calc(90vh - 300px)',
                border: '1px solid rgba(0,0,0,.125)',
                borderRadius: '0.375rem',
                marginBottom: '10px'
              }}
            >
              {files.map((file, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  active={selectedFile === file}
                  onClick={() => handleFileClick(file)}
                  onDoubleClick={() => handleFileDoubleClick(file)}
                  style={{ cursor: 'pointer' }}
                >
                  {file}
                </ListGroup.Item>
              ))}
              {files.length === 0 && (
                <ListGroup.Item className="text-center text-muted">
                  Aucun diagramme disponible
                </ListGroup.Item>
              )}
            </ListGroup>
          </div>
          <div className="col-md-6" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h5>Preview</h5>
            <div style={{ 
              flexGrow: 1,
              overflowY: 'auto',
              maxHeight: 'calc(90vh - 280px)',
              backgroundColor: '#f8f9fa',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid rgba(0,0,0,.125)',
              marginBottom: '10px'
            }}>
              {fileContent && (
                <pre style={{ 
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word'
                }}>
                  {JSON.stringify(fileContent, null, 2)}
                </pre>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {selectedFile && (
          <Button 
            variant="danger" 
            onClick={handleDelete}
            disabled={isDeleting}
            className="me-auto"
          >
            {isDeleting ? 'Suppression...' : 'Supprimer le diagramme'}
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="success"
          onClick={handleImportDiagram}
          disabled={!selectedFile || !hasCurrentDiagram}
          className="me-2"
          title={!hasCurrentDiagram ? "Vous devez d'abord charger un diagramme avant de pouvoir en importer un" : ""}
        >
          Importer 
        </Button>
        <Button
          variant="primary"
          onClick={handleLoadDiagram}
          disabled={!selectedFile}
        >
          Charger 
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JsonFilesModal;
