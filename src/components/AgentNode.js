import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const AgentNode = ({ data }) => {
  const renderTooltip = (props) => (
    <Tooltip id={`agent-tooltip-${data.id}`} {...props}>
      <div className="text-start">
        <strong>Role:</strong> {data.role}<br/>
        <strong>Goal:</strong> {data.goal}<br/>
        {data.backstory && (
          <><strong>Backstory:</strong> {data.backstory}<br/></>
        )}
        {data.tools && (
          <><strong>Tools:</strong> {Array.isArray(data.tools) ? data.tools.join(', ') : data.tools}<br/></>
        )}
        {data.allowedActions && (
          <><strong>Allowed Actions:</strong> {Array.isArray(data.allowedActions) ? data.allowedActions.join(', ') : data.allowedActions}<br/></>
        )}
      </div>
    </Tooltip>
  );

  return (
    <div className="agent-node">
      <Handle type="target" position={Position.Top} />
      <OverlayTrigger
        placement="auto"
        delay={{ show: 200, hide: 100 }}
        overlay={renderTooltip}
      >
        <div className="agent-content">
          <h6>{data.role}</h6>
          <p>{data.goal}</p>
          <p>{data.backstory}</p>
        </div>
      </OverlayTrigger>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(AgentNode);
