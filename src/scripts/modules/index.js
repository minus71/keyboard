import Game from './game';
import $ from 'jquery';
class App {
	constructor(ref){
		this.root = $(ref);
		this.name = 'Fantastic ES6 Application';
		console.log('Initialize app.');

		this.gameScreen = $('<div class="gameScreen"/>');
		
		this.menu=$('<div class="menu"/>');
		const startButton = $('<button class="btn">Start</button>');
		
		startButton.click(()=>this.startGame());
		
		this.menu.append(startButton);
		this.root.append(this.menu);
		this.root.append(this.gameScreen);
	}
	
	startGame(){
		this.menu.addClass('hidden');
		this.gameScreen.removeClass('hidden');
		this.game = new Game(this.gameScreen);


	}
}
export default  App;
