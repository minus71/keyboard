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
		this.lastScoreElm = $('<span class="score_value"></span>');
		this.highScoreElm = $('<span class="score_value"></span>');
		


		this.lastScore = 0;
		this.highScore = localStorage.getItem('highscore') || 0;

		const _lastScoreElm = $('<span class="score last">Last</span>');
		const _highScoreElm = $('<span class="score high">High</span>');

		_lastScoreElm.append(this.lastScoreElm);
		_highScoreElm.append(this.highScoreElm);

		startButton.click(()=>this.startGame());
		
		this.menu.append(startButton);
		this.menu.append(_lastScoreElm);
		this.menu.append(_highScoreElm);
		this.root.append(this.gameScreen);
		this.root.append(this.menu);
		this.showScores();
	}
	
	startGame(){
		this.menu.addClass('hidden');
		this.gameScreen.removeClass('hidden');
		this.game = new Game(this.gameScreen);
		this.game.on('end',()=>{this.gameEnded()})
	}


	showScores(){
		this.lastScoreElm.text(this.lastScore);
		this.highScoreElm.text(this.highScore);
	}

	gameEnded(){
		this.menu.removeClass('hidden');
		const score = this.game.score;
		this.lastScore = score;
		this.highScore = Math.max(score,this.highScore);
		this.showScores();
	}
}
export default  App;
