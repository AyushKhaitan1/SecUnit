import React from 'react';
import AlertsList from '../components/AlertsList';
import ReportsList from '../components/ReportsList';

const Dashboard = () => {
    return (
        <div>
            <h1>Campus Safety Dashboard</h1>
            <h2>Alerts</h2>
            <AlertsList />
            <h2>Reports</h2>
            <ReportsList />
        </div>
    );
};

export default Dashboard;