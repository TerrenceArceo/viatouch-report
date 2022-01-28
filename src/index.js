import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ReportContextProvider} from './context/reportContext'

ReactDOM.render(
    <Router>
        <ReportContextProvider>
            <App />
        </ReportContextProvider>
    </Router>, 
    document.getElementById('root')
);
