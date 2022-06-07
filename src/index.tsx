import 'bulmaswatch/superhero/bulmaswatch.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('root element not found');
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);