var rno=0;
var score=0;

function totalball(){
    var balls= "";
    for(var i=1 ; i<=133; i++){
        var rn=Math.floor(Math.random()*10)
        balls+= `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#content").innerHTML=balls;
}
totalball()



function runtimer(){
    var timer = 60;
    var interval= setInterval(function (){
        if (timer > 0){
            timer--;
            document.querySelector("#timing").textContent=timer;
        }
        else{
            clearInterval(interval);
            document.querySelector("#content").innerHTML="<h1>GAME OVER...</h1>";
        }
    },1000);
}
runtimer()


function newhit(){
    rno= Math.floor(Math.random()*10);
    document.querySelector("#hiting").textContent=rno;
}
newhit()

function incscore(){
    score+=10;
    document.querySelector("#scoreing").textContent=score;
}

function descscore(){
    score-=5;
    document.querySelector("#scoreing").textContent=score;
}

document.querySelector("#content").addEventListener("click",function (bnum){
    var clickedbub= Number(bnum.target.textContent)
    if (clickedbub == rno){
        incscore();
        newhit();
        totalball();
    }
    else{
        descscore();
    }
})







