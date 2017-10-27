import $ from 'jquery';
import 'bootstrap/scss/bootstrap.scss';

import '../styles/main.scss';

import Unicorn from '../static/images/unicorn.svg';

import App from './modules/index'

window.onload = () => {
	const app = new App('#__app');
	console.info('window loaded: ', app.name, Unicorn);

	// let DOM = document.getElementById('__app')
	// DOM.innerHTML = "<h1>Hello World, I'm "+app.name+"</h1>"
};
