import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {App} from './components/App';
import './index.scss'


const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    <div className="wrapper">
        <div className="_container">
            <App />
        </div>
    </div>
        
)