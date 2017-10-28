import $ from 'jquery';
function pick(set){
    const n = set.length;
    const i = n * Math.random();
    return set[Math.floor(i)];
}

const BASE_SET_ITALIAN= 'napolidiqualcheorafalanotiziadiunuomonelnapoletanorimastovittimadiungraveinc'+
                        'identesecondounaprimaricostruzionedeifattituttoaccadutoieripomeriggioallalte'+
                        'zzadiviaduomoadiacenzedelchioscoperemussoditoninoscardadettomappinaunuomodia'+
                        'nniresidentenelrionedonguanellaascampiaavevadecisodifareunviaggioallesterode'+
                        'stinazionenapolicentrocgcoschiameremoilprotagonistadiquestavicendaperchilsuo'+
                        'nomerealeportasfortunastavaguidandonormalmenteimmersonellaletturadelsuosmart'+
                        'phoneoggettodellasuaprimitivacuriositdaanalfabetafunzionaleuntrattatosuiluog'+
                        'hicomuniacaricodeinapoletaniintitolatooradivolarealtoncoppjammejamanoinonsia'+
                        'mocosavrebbeesclamatopivolteluomobevendolasuatazzulellaecafpreparatanellacaf'+
                        'fettieracustoditanellalettaparasoleladevonosmettereconquestipregiudizisuinap'+
                        'oletani'.split('');
   
const LEVELS = [
    {
        next: 10,
        min:1,
        freq: 5,
        eta: 10,
        hit: 1,
        miss: 2,
    },
    {
        next: 50,
        min:2,
        freq: 4,
        eta: 8,
        hit: 2,
        miss: 5,
    },
    {
        next: 200,
        min:2,
        freq: 3.7,
        eta: 6,
        hit: 5,
        miss: 10,
    },
    {
        next: 500,
        min:3,
        freq: 3.5,
        eta: 5,
        hit: 10,
        miss: 25,
    },
    {
        next: 100000,
        min:6,
        freq: 3,
        eta: 4,
        hit: 50,
        miss: 100,
    }

]

function now(){
    return new Date().getTime();
}
class Game{
    constructor(screen){
        this.gameScreen = screen;
        this.scoreWrapper = $('<div class="score">Score</div>');
        this.levelWrapper = $('<div class="level">Level</div>');

        this.scoreElement = $('<div class="score_value"></div>');
        this.levelElement = $('<div class="level_value"></div>');

        this.gameScreen.html(this.scoreWrapper);
        this.gameScreen.append(this.levelWrapper);
        
        this.scoreWrapper.append(this.scoreElement);
        this.levelWrapper.append(this.levelElement);



        this.score=0;
        this.level=0;
        this.lastEmission=0;
        this.levelElement.text(this.level);
        
        this.char_set=[];
        this.averageSpeed = 1/10000.0;
        this.genFactor = 1/5000.0;
        // this.startTime = new Date().getTime();
        this.fallingLetters=[];
        this.lastFrame= new Date().getTime();

        for(let i='a'.charCodeAt(0);i<='z'.charCodeAt(0);i++){
            this.char_set.push(String.fromCharCode(i));
        }

        this.char_set = [...this.char_set, ...BASE_SET_ITALIAN];


        $(document).keypress((evt)=>{
            const chr = String.fromCharCode(evt.which).toLowerCase();
            (()=>this.checkKey(chr))();
        });

        window.requestAnimationFrame((t)=>this.step(t));
    }

    checkKey(chr){
        const opt_letter = this.fallingLetters.find(l=>l.char==chr && !l.hitTime);
        if(opt_letter){
            opt_letter.hit();
            this.hit();
        } else {
            const {next,freq,eta,hit,miss,min} = LEVELS[this.level];
            
            this.score-=miss;
            this.scoreElement.text(this.score);
        }
    }

    hit(){
        const {next,freq,eta,hit,miss,min} = LEVELS[this.level];
        this.score=this.score+hit;
        this.scoreElement.text(this.score);
        // this.averageSpeed = this.averageSpeed * 1.001;
        // this.genFactor = this.genFactor * 1.03;
        if(this.score > next){
           this.level++; 
           this.levelElement.text(this.level);
        }
    }

    step(t){
        const delta = t-this.lastFrame;
        
        this.fallingLetters.forEach(l=>{
            l.move(delta);
        });

        this.checkStop();

        this.getLetter(delta);

        this.cleanUp();



        this.lastFrame = t;
        if(!this.stop){
            window.requestAnimationFrame((t)=>this.step(t));
        }
    }

    cleanUp(){
        this.fallingLetters = this.fallingLetters.filter(l=>!l.isDecayed());
    }
    checkStop(){
        this.fallingLetters.forEach(l=>{
            if(l.isOut()){
                this.stop=true;
                if(this.triggerEnd){
                    this.triggerEnd();
                }
            }
        });
    }


    getLetter(delta){
        const {next,freq,eta,hit,miss,min} = LEVELS[this.level];
        const t = now();
        const falling= (this.fallingLetters || []).filter(l=>!l.hitTime).length;

        
        if( falling < min || (t-this.lastEmission)/1000 > freq){    

            const c = pick(this.char_set);
            const randmoness = ( (Math.random()-0.5) / 4 + 1);
            const speed = 1/eta / 1000;



            const letter = new FallingLetter(c,speed,this.gameScreen);
            this.fallingLetters.push(letter);
            this.lastEmission = t;
        }
        

        /*
        if(!this.fallingLetters.length || Math.random()<this.genFactor * delta){
            const c = pick(this.char_set);
            const speed = this.averageSpeed * ( (Math.random()-0.5) / 4 + 1);
            const letter = new FallingLetter(c,speed,this.gameScreen);
            this.fallingLetters.push(letter);
        }
        */
    }

    on(evt, triggerEnd){
        switch(evt){
            case "end":{
                if(triggerEnd){
                    this.triggerEnd = triggerEnd;
                }
            }

        }
    }
    
}

class FallingLetter{
    constructor(chr,speed,screen){
        this.decay = 800;
        this.char=chr;
        this.speed=speed;
        this.screen=screen;
        this.hitTime;
        this.position={
            x:Math.random(),
            y:0
        }
        this.elm = $("<div class='letter' >"+chr+"</div>");
        this.move(0);
        this.screen.append(this.elm);
    }

    move(delta){
        if(!this.hitTime){
            let {x,y} = this.position;
            y = this.position.y = y + this.speed * delta;
            const px = x*100;
            const py = y*100;
            this.elm.attr("style",`top:${py}%;left:${px}%`);
        }
    }
    
    
    
    hit(){
        this.elm.addClass('_hit_letter');
        this.hitTime = new Date().getTime();
    }

    isOut(){
        if(this.position.y>0.95){
            this.elm.addClass('_out_letter');
            return true;
        }
        return false;
    }
    isDecayed(){
        const t = new Date().getTime()
        if(t-this.hitTime>this.decay){
            this.elm.remove();
            return true;
        }else{
            return false;
        }
    }
}


export default Game;