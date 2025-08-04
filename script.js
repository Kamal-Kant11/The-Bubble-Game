var timer = 30;
var score = 0;
var hit;

function makeBubble(){
    var number="";
for(i=0; i<160;i++){
    var rand = Math.floor(Math.random()*10);
    number += `<div class="bubble">${rand}</div>`
}

var btm = document.querySelector('.pbtm');
btm.innerHTML = number;
}

function getNewHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector('#hit').innerHTML = hit;
}

function runTimer(){
    var time = setInterval(function(){
        if( timer > 0){
        timer--;
        document.querySelector("#timer").innerHTML=timer;
        }
        else{
            clearInterval(time);
            var top = document.querySelector('.ptop');
            top.innerHTML = `<h1> Final Score is: ${score}`;
            top.style.color = 'white';
            top.style.fontWeight = "3"
            var pbtm = document.querySelector('.pbtm');
            pbtm.innerHTML= '<h1> Game Over </h1>' ;
            pbtm.style.color = 'red';
        }
    },1000);
}

function scoreInc(){
    score +=10;
    document.querySelector("#score").innerHTML = score;
}

document.querySelector(".pbtm").addEventListener('click',function (dets){
    var clickedNum = (Number(dets.target.innerHTML));
    if(clickedNum === hit){
        scoreInc();
        makeBubble();
        getNewHit();
    }
})



makeBubble();
getNewHit();
runTimer();
