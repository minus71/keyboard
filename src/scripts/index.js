import $ from 'jquery';
import 'bootstrap/scss/bootstrap.scss';

import '../styles/main.scss';

import Logo from '../static/images/logo.svg';

import HitSound from '../static/audio/hit.wav';
import MissSound from '../static/audio/miss.wav';

import App from './modules/index'

window.onload = () => {
	const app = new App('#__app');
	console.info('window loaded: ', app.name, Logo);

	// let DOM = document.getElementById('__app')
	// DOM.innerHTML = "<h1>Hello World, I'm "+app.name+"</h1>"
};
