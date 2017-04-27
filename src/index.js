import React from 'react';
import { render } from 'react-snapshot';
import App from './pages/App';
import 'normalize.css';
import './style.js';

render(<App />, document.getElementById('root'));
