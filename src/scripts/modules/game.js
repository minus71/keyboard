import $ from 'jquery';
function pick(set){
    const n = set.length;
    const i = n * Math.random();
    return set[Math.floor(i)];
}
class Game{
    constructor(screen){
        this.gameScreen = screen;
        this.scoreElement = $('<div class="score"></div>');
        this.gameScreen.html(this.scoreElement);
        this.score=0;

        this.char_set=[];
        this.averageSpeed = 1/10000.0;
        this.genFactor = 1/5000.0;
        // this.startTime = new Date().getTime();
        this.fallingLetters=[];
        this.lastFrame= new Date().getTime();

        for(let i='a'.charCodeAt(0);i<='z'.charCodeAt(0);i++){
            this.char_set.push(String.fromCharCode(i));
        }

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
        }
    }

    hit(){
        this.score=this.score+1;
        this.scoreElement.text(this.score);
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
        if(!this.fallingLetters.length || Math.random()<this.genFactor * delta){
            const c = pick(this.char_set);
            const speed = this.averageSpeed * ( (Math.random()-0.5) / 4 + 1);
            const letter = new FallingLetter(c,speed,this.gameScreen);
            this.fallingLetters.push(letter);
        }
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