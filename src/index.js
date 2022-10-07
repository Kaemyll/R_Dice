import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'fontawesome';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
