import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AlertsList from './components/AlertsList';
import ReportsList from './components/ReportsList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/alerts" component={AlertsList} />
                <Route path="/reports" component={ReportsList} />
            </Switch>
        </Router>
    );
};

export default App;