
import React from 'react';

export default function Alerts(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div 
          className={`alert alert-${props.alert.type} alert-dismissible fade show`} 
          role="alert"
          style={{
            backgroundColor: props.alert.type === 'success' ? '#d4edda' : '#f8d7da',
            color: props.alert.type === 'success' ? '#155724' : '#721c24',
          }}
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
