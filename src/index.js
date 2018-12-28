import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import Github from './components/Header/github'
import './styles.css'



ReactDOM.render(
	<div>
		<Github/>
		<App/>
	</div>,
	document.getElementById('root')
);

