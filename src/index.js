import React from 'react';
import { render } from 'react-snapshot';
import App from './pages/App';
import 'normalize.css';
import './style.js';
import registerServiceWorker from './registerServiceWorker';
import autotrack from './autotrack';

render(<App />, document.getElementById('root'));
registerServiceWorker();
autotrack(process.env.REACT_APP_GA_ID);
