import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const AgentNode = ({ data }) => {
  return (
    <div className="agent-node">
      <Handle type="target" position={Position.Top} />
      <div className="agent-content">
        <h6>{data.role}</h6>
        <p>{data.goal}</p>
        <p>{data.backstory}</p>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(AgentNode);
