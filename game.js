
var game = document.getElementById("game")   
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
let t=0;




alert("Click to start the game")
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
x=setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        t=t+(counter-1);
        localStorage.setItem('TScore',t);
        let TScor=localStorage.getItem('TScore');
        // alert("Game over. Score: "+(counter-1));

        let restart = confirm("Do u want to Restart Or Go to the Home Page");

        if (restart){
            console.log("hi")
        }

        else{
            console.log("bye")
            window.open("main.html","_self")
        }

        character.style.top = 100 + "px";
        counter=0;
    }
    if(counter==-1){
        t+=1;
    }
    localStorage.setItem('Score',counter-1);
    let x = localStorage.getItem('Score');
    document.getElementById("score").innerHTML=`<h5>Your Total Score is ${t}`
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}
