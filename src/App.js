import React, { useState, useCallback } from 'react';
import ReactFlow, { 
  Controls, 
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';
import AgentNode from './components/AgentNode';
import OutputNode from './components/OutputNode';
import CustomEdge from './components/CustomEdge';
import AgentModal from './components/AgentModal';
import TaskModal from './components/TaskModal';
import FloatingButtons from './components/FloatingButtons';

const nodeTypes = {
  agent: AgentNode,
  output: OutputNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const initialNodes = [
  { 
    id: 'output', 
    type: 'output',
    data: { 
      label: 'Output',
      role: 'Output',
      goal: 'output'
    }, 
    position: { x: 250, y: 250 },
    draggable: true,
    connectable: false,
  }
];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [showAgentModal, setShowAgentModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);

  const onConnect = useCallback((params) => {
    const edge = {
      ...params,
      type: 'custom',
      data: { description: 'New Task' }
    };
    setEdges((eds) => addEdge(edge, eds));
  }, [setEdges]);

  const onNodeDoubleClick = useCallback((event, node) => {
    // Ignore double-click on output node
    if (node.type === 'output') return;
    
    setSelectedNode(node);
    setShowAgentModal(true);
  }, []);

  const onEdgeDoubleClick = useCallback((event, edge) => {
    setSelectedEdge(edge);
    setShowTaskModal(true);
  }, []);

  const handleAddAgent = (agentData) => {
    const newNode = {
      id: agentData.key,
      type: 'agent',
      data: { 
        ...agentData,
        label: agentData.role 
      },
      position: { 
        x: Math.random() * 500, 
        y: Math.random() * 500 
      }
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const handleUpdateAgent = (agentData) => {
    setNodes((nds) => 
      nds.map((node) => 
        node.id === agentData.key 
          ? { ...node, data: { ...agentData, label: agentData.role } }
          : node
      )
    );
  };

  const handleDeleteAgent = (agentKey) => {
    setNodes((nds) => nds.filter((node) => node.id !== agentKey));
    setEdges((eds) => eds.filter((edge) => 
      edge.source !== agentKey && edge.target !== agentKey
    ));
  };

  const handleUpdateTask = useCallback((taskData) => {
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === taskData.id) {
          return {
            ...edge,
            data: {
              description: taskData.description,
              expectedOutput: taskData.expectedOutput,
              type: taskData.type
            }
          };
        }
        return edge;
      })
    );
  }, [setEdges]);

  const handleAddTask = useCallback((taskData) => {
    const newEdge = {
      id: taskData.id,
      source: taskData.from,
      target: taskData.to,
      type: 'custom',
      data: {
        description: taskData.description,
        expectedOutput: taskData.expectedOutput,
        type: taskData.type
      }
    };
    setEdges((eds) => [...eds, newEdge]);
  }, [setEdges]);

  const handleDeleteTask = (taskId) => {
    setEdges((eds) => eds.filter((edge) => edge.id !== taskId));
  };

  const handleCreateCrewAI = useCallback(() => {
    // Récupérer les données du diagramme
    const diagramData = {
      nodes: nodes.map(node => ({
        key: node.id,
        ...node.data
      })),
      links: edges.map(edge => ({
        from: edge.source,
        to: edge.target,
        ...edge.data
      }))
    };
    console.log(diagramData);
    // Envoyer la requête au serveur
    fetch('http://127.0.0.1:8000/chatapp/designer/launch_crewai/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': document.cookie.split('; ').find(row => row.startsWith('csrftoken'))?.split('=')[1],
      },
      body: JSON.stringify(diagramData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Gérer la réponse
      if (data.success) {
        alert('CrewAI Process created successfully!');
      } else {
        alert('Error creating CrewAI Process: ' + data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error creating CrewAI Process: ' + error.message);
    });
  }, [nodes, edges]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDoubleClick={onNodeDoubleClick}
        onEdgeDoubleClick={onEdgeDoubleClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

      <FloatingButtons
        onAddAgent={() => setShowAgentModal(true)}
        onAddTask={() => setShowTaskModal(true)}
        onCreateCrewAI={handleCreateCrewAI}
      />

      <AgentModal
        show={showAgentModal}
        onHide={() => {
          setShowAgentModal(false);
          setSelectedNode(null);
        }}
        onAdd={handleAddAgent}
        onUpdate={handleUpdateAgent}
        onDelete={handleDeleteAgent}
        selectedNode={selectedNode}
      />

      <TaskModal
        show={showTaskModal}
        onHide={() => {
          setShowTaskModal(false);
          setSelectedEdge(null);
        }}
        onAdd={handleAddTask}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
        selectedEdge={selectedEdge}
        nodes={nodes}
      />
    </div>
  );
}

export default App;
