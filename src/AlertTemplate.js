import React from 'react';
import SuccessIcon from './icons/SuccessIcon';
import InfoIcon from './icons/InfoIcon';
import ErrorIcon from './icons/ErrorIcon';
import CloseIcon from './icons/CloseIcon';


const alertStyle = {
    backgroundColor: '#fff',
    color: '#009688',
    padding: '10px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
    fontFamily: 'Arial',
    width: '300px',
    boxSizing: 'border-box'
  }
  
  const buttonStyle = {
    marginLeft: '20px',
    border: 'none',
    backgroundColor: '#009688',
    cursor: 'pointer',
    color: '#FFFFFF'
  }
  
  
  const AlertTemplate = ({ message, options, style, close }) => {
   
    return (
      <div style={{ ...alertStyle, ...style }}>
        {options.type === 'info' && <InfoIcon />}
        {options.type === 'success' && <SuccessIcon /> }
        {options.type === 'error' && <ErrorIcon />}
        <span style={{ flex: 1 }}>{message}</span>
        <button onClick={close} style={buttonStyle}>
          <CloseIcon />
        </button>
      </div>
    )
  }
  
export default AlertTemplate  