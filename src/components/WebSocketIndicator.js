import React from 'react';

const WebSocketIndicator = ({ isConnected }) => {
  const indicatorStyle = {
    position: 'fixed',
    top: '10px',
    left: '10px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: isConnected ? '#2ecc71' : '#e74c3c',
    boxShadow: '0 0 4px rgba(0,0,0,0.2)',
    zIndex: 1000,
    transition: 'background-color 0.3s ease'
  };

  const tooltipStyle = {
    position: 'absolute',
    left: '20px',
    top: '-5px',
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    opacity: 0,
    transition: 'opacity 0.2s ease',
    pointerEvents: 'none'
  };

  const containerStyle = {
    position: 'relative',
    cursor: 'pointer',
    padding: '5px',
  };

  return (
    <div 
      style={containerStyle}
      onMouseEnter={(e) => e.currentTarget.querySelector('.tooltip').style.opacity = 1}
      onMouseLeave={(e) => e.currentTarget.querySelector('.tooltip').style.opacity = 0}
    >
      <div style={indicatorStyle} />
      <div className="tooltip" style={tooltipStyle}>
        WebSocket: {isConnected ? 'Connected' : 'Disconnected'}
      </div>
    </div>
  );
};

export default WebSocketIndicator;
