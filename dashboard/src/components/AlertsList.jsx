import React from 'react';

const AlertsList = ({ alerts }) => {
    return (
        <div>
            <h2>Alerts</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>
                        <strong>{alert.type}</strong>: {alert.message} - {new Date(alert.timestamp).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlertsList;