let yBolinha = 200;
let xBolinha =300;
let diametro = 20;
let raio =diametro/2;
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

let xRaquete = 10;
let yRaquete = 200;
let raqueteComprimento = 10;
let raqueteAltura = 100; 

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

let meuspontos = 0;
let pontosadversario = 0;

function setup() {
  createCanvas(600, 400);

}

function draw() {
   background(220);
   
 bolinha();
 // colisaoMinhaRaqueteBiblioteca();
 colisao();
 minhaRaquete();
 mostraRaquete(xRaquete,yRaquete);
 mostraRaquete(xRaqueteOponente,yRaqueteOponente);
 movimentaRaqueteOponente();
 placar();
}

function bolinha(){
    
  fill("white");
  circle(xBolinha,yBolinha,diametro);
  
   xBolinha += velocidadexBolinha;
   yBolinha += velocidadeyBolinha;
   
  if(xBolinha + raio > width || xBolinha - raio <0){
    velocidadexBolinha *= -1;
  }
  if(yBolinha + raio > height ||yBolinha - raio<0){
    velocidadeyBolinha *= -1;
  }
}

 function minhaRaquete(){
//rect(xminhaRaquete,yminhaRaquete,raqueteComprimento,raqueteAltura)
 if(keyIsDown(UP_ARROW)){
   yRaquete -= 10;
 }
  if(keyIsDown(DOWN_ARROW)){
   yRaquete += 10;
  }
 }

function colisao(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
  }
   if(xBolinha + raio > xRaqueteOponente - raqueteComprimento && yBolinha - raio < yRaqueteOponente + raqueteAltura && yBolinha + raio > yRaqueteOponente){
    velocidadexBolinha *= -1;
 }
}

/*function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}*/

function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura);
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente -      raqueteComprimento/2-30;
  yRaqueteOponente += velocidadeYOponente;
}

function placar(){
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(pontosadversario,170,25);
  
  if(xBolinha <= raqueteComprimento){
    pontosadversario++;
  }
  
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(380, 10, 40, 20);
    fill(255);
    text(meuspontos, 400, 25);

  if(xBolinha>=width){
    meuspontos++;
  }
  
}

//function colisaoMinhaRaqueteBiblioteca() {
  //  collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
//}
