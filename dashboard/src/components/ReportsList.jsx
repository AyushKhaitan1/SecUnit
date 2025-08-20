import React from 'react';

const ReportsList = ({ reports }) => {
    return (
        <div>
            <h2>User Reports</h2>
            <ul>
                {reports.map((report, index) => (
                    <li key={index}>
                        <strong>{report.title}</strong>: {report.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportsList;