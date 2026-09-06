//fondo
let fondo = [];
let velocidades = [];
let tiempoFondo = 0;
//logo
let logo;

//personajes con una animación
let mickey = [];
let donald = [];
let goofy = [];

//personaje con estados
let sora = [];
let estadoSora = 0;

//tiempo y vel animación
let tiempoInicial;
let intervaloFrame = 150;

function preload() {
  //fondo
  for ( let i = 0; i < 3; i++) {
    fondo[i] = loadImage("assets/background_"+i+".png");
  }
  //logo
  logo = loadImage("assets/logo.png");
  //personajes con una animación
  for ( let i = 0; i < 7; i++) {
    mickey[i] = loadImage("assets/mickey_"+i+".png");
    donald[i] = loadImage("assets/donald_"+i+".png");
    goofy[i] = loadImage("assets/goofy_"+i+".png");
  }

  //personaje con estados
  sora[0] =[]; //caminando
  sora[1] =[]; //saltando 
  for ( let i = 0; i < 7; i++) {
    sora[0][i] = loadImage("assets/sora_"+i+".png");
  }
  for ( let i = 0; i < 7; i++) {
    sora[1][i] = loadImage("assets/sora_"+(i + 7)+".png");
  }
}

function setup() {
  createCanvas(800, 600);
  velocidades = [1.5, 3.0, 0.5];
  tiempoInicial = millis ();
}


function draw() {
  //fondo
  background(0);
  tiempoFondo++;
  let tiempoActual = millis() - tiempoInicial;
  
  //reinicio cada 15seg
  if (tiempoActual >= 15000){
    tiempoInicial = millis();
    tiempoFondo = 0;
    tiempoActual = 0;
  }

  dibujarFondo(fondo[0], velocidades[0]);
  dibujarFondo(fondo[2], velocidades[2]);
  dibujarFondo(fondo[1], velocidades[1]);
  
  //personajes con una animación
  dibujarPersonajeSimple (mickey, 100, 420, tiempoActual);
  dibujarPersonajeSimple (donald, 250, 420, tiempoActual);
  dibujarPersonajeSimple (goofy, 400, 420, tiempoActual);

  //personaje con estados
  dibujarSora (600, 420, tiempoActual);
  
  //logo
   dibujarLogo (tiempoActual);
}

//fondo
function dibujarFondo(img, vel) {
  let x = -(tiempoFondo * vel) % width;
  image(img, x, 0, width, height);
  image(img, x + width, 0, width, height);
}

//calcular frame actual
function frameActual ( totalFrames, tiempo) {
  return floor((tiempo / intervaloFrame) % totalFrames);
}

//personajes con una animación
function dibujarPersonajeSimple(framesArray, posX, posY, tiempo) {
  let frameResultado = frameActual (framesArray.length, tiempo);
  image( framesArray[frameResultado], posX, posY);
}

//personaje con estados
function dibujarSora( posX, posY, tiempo) {
  let duracionEstado = 2000;
  estadoSora = floor(tiempo/ duracionEstado) %2;
  let frameResultado = frameActual (sora[estadoSora].length, tiempo);
  switch (estadoSora) {
  case 0:
    image( sora[0][frameResultado], posX, posY);
    break;
  case 1:
    image( sora[1][frameResultado], posX, posY);
    break;
  }
  }
  
//Logo
 function dibujarLogo(tiempo){
  let anchoLogo = 400;
  let altoLogo = 220;
  let posX = width / 2 -anchoLogo / 2;
  let posY = map(tiempo, 0, 1500, -altoLogo, 20, true);
  image( logo, posX, posY, anchoLogo, altoLogo);
  }
