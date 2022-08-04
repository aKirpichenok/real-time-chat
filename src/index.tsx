import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'


const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    <h1>
        Hello World!
    </h1>
)