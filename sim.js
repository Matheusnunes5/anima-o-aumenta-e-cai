var canvas = document.getElementById("jogo")
var contexto = canvas.getContext("2d")

const Bola ={
    x : 250,
    y : 250,
    r : 40,
    cor : "white",
    velo : 5
};

const keys ={}
window.addEventListener('keydown', e=> keys[e.key] = true);
window.addEventListener('keyup', e=> keys[e.key] = false);

function desenhar(Bola){
    contexto.clearRect(0,0, canvas.width, canvas.height);
    contexto.beginPath();
    contexto.arc(Bola.x, Bola.y, Bola.r, 0, Math.PI*2);
    contexto.fillStyle = Bola.cor;
    contexto.fill();
    contexto.closePath();
}

function animar(){
   
    if(keys['ArrowLeft']) Bola.x-= Bola.velo;
    if(keys['ArrowRight']) Bola.x+= Bola.r;
    if(keys['ArrowUp']) Bola.y-= Bola.r;
    if(keys['ArrowDown']) Bola.y+= Bola.r;
    if(keys['Enter']) Bola.r+=2;
     if(keys['Shift']) Bola.r-=2;
    if(keys['1']) Bola.cor ="green"
    if(keys['2']) Bola.cor ="yellow"
    if(keys['3']) Bola.cor ="black"
    if(keys['4']) Bola.cor ="orange"
    if(keys['5']) Bola.cor ="cyan"
    if(keys['6']) Bola.cor ="white"

    desenhar(Bola);
}

function loop(){
    animar();
    requestAnimationFrame(loop);
}

loop()
