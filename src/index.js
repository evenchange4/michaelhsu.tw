import React from 'react';
import { render } from 'react-snapshot';
import App from './pages/App';
import registerServiceWorker from './utils/registerServiceWorker';
import autotrack from './utils/autotrack';
import './utils/style';

render(<App />, document.getElementById('root'));
registerServiceWorker();
autotrack(process.env.REACT_APP_GA_ID);
