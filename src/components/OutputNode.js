import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const OutputNode = () => {
  return (
    <div className="output-node">
      <Handle 
        type="target" 
        position={Position.Top} 
        isConnectable={true}
        style={{ 
          background: '#28a745',
          width: '8px',
          height: '8px',
          top: '-4px'
        }}
      />
      Output
    </div>
  );
};

export default memo(OutputNode);
