// Iara Denise Grossutti https: //www.youtube.com/watch?v=o6MFG5BHR2Y
// Trinidad Lima https: //www.youtube.com/watch?v=j7s2rHW73Ls



//fondos
let fondos = [];
let pantalla = 0;
//avanzar
let flecha
  //narración
  let texto1= [
  "Aleksi Nygaard es un reconocido escritor de novelas detectivescas, está acostumbrado a resolver crímenes a través de las páginas de sus libros.",
  "Tras pasar su primera noche en el hotel Paradisus, despierta dispuesto a comenzar el día. Se prepara y sale de su habitación rumbo al comedor, donde espera disfrutar de un tranquilo desayuno antes de continuar con su cronograma para este fin de semana.",
];
let texto2= [
  "Mientras avanza por el pasillo del hotel, Aleksi sigue pensando en cómo aprovechar el resto de su estancia. El silencio de la mañana apenas se ve interrumpido por sus pasos, hasta que algo en el suelo al fondo del pasillo llama su atención. Intrigado continúa avanzando para distinguir de qué se trata."
];
let texto3= [
  "A unos metros, tendido en el suelo yace el cuerpo sin vida de una persona. Por un instante Aleksi se queda inmóvil, incapaz de apartar la mirada. Lo que parecía una mañana tranquila acaba de convertirse en una escena digna de sus propias novelas."
];
let texto4= [
  "Mientras espera la llegada de la policía, intenta mantener la calma y no alterar la escena del crimen.",
];
let texto5= [
  "Al poco tiempo, la policía llega al hotel y acordona la zona para comenzar la investigación. Los agentes examinan el cuerpo, recogen pruebas e interrogan al personal del establecimiento para reconstruir lo sucedido.",
  "En cuestión de minutos, el pasillo se convierte en una escena del crimen bajo su control."
];
let texto6= [
  "Aleksi decide buscar ayuda y regresa por el pasillo con la esperanza de encontrar a algún empleado del hotel. Sin embargo, no hay nadie a la vista. Ante la urgencia de la situación, decide dirigirse a otra zona del hotel.",
];
let texto7= [
  "Ya en el comedor encuentra a una persona que disfruta de un tranquilo desayuno. Se acerca rápidamente y le cuenta lo que acaba de descubrir en el pasillo. Tras escucharlo, la persona le asegura haber visto a un trabajador del hotel cerca de una de las habitaciones y decide acompañarlo hasta allí."
];
let texto8= [
  "Al llegar a la habitación, Aleksi descubre que no hay nadie dentro. Antes de que pueda reaccionar, escucha cómo la puerta se cierra a sus espaldas. Al darse vuelta, ve que la persona que lo acompañó ha sacado un cuchillo y lo observa en silencio. "
];
let texto9= [
  "Entra al ascensor y presiona el botón de la planta baja. Justo cuando las puertas terminan de cerrarse escucha voces de dos personas conversando en el pasillo que acaba de dejar, pero no logra distinguir con claridad lo que dicen."
];
let texto10= [
  "Al llegar a la recepción, Aleksi encuentra a un empleado del hotel y le cuenta rápidamente lo sucedido. El trabajador le explica que ya están al tanto de la situación y que la policía acaba de llegar al hotel y ya se encuentran en la escena del crimen. ",
  "De pronto ambos escuchan pasos apresurados que descienden por la escalera de servicio, situada junto al ascensor. El ruido rompe el silencio de la recepción y llama inmediatamente su atención."
];
let texto11= [
  "Por la escalera aparecen tres oficiales que, al llegar a la recepción, dirigen miradas sospechosas hacia Aleksi. Sin decir una palabra se acercan a él."
];
let linea = 0;
//personajes
let aleksi = [];
let policias;
let asesino = [];
let npc = [];
//sonido
let musica;
let puerta;
let pasos;
//creditos
let fondoCreditos;
let tiempoFondo = 0;
let pj = [];
let posXPersonaje = 50;
let velocidadPersonaje = 2;
let tiempoDetenidoInicio = 0;
let personajeDetenido = false;
let esperandoEnCentro = false;
let posYTexto = -50;
let velocidadTexto = 1;
let tiempoInicial;
let intervaloFrame = 150;

function preload() {
  //fondos
  for (let i = 0; i < 17; i++) {
    fondos[i] = loadImage("assets/fondo_"+i+".jpg");
  }
  //avanzar
  flecha = loadImage("assets/flecha.png");
  //personajes
  for (let j = 0; j< 3; j++) {
    aleksi[j] = loadImage("assets/aleksi_"+j+".png");
  }
  policias = loadImage("assets/policias.png");
  for (let k = 0; k< 2; k++) {
    asesino[k] = loadImage("assets/asesino_"+k+".png");
  }
  npc = loadImage("assets/npc.png");
  //creditos
  fondoCreditos = loadImage("assets/fondocreditos.png");
  for (let l = 0; l < 4; l++) {
    pj.push (loadImage("assets/pj_"+l+".png"));
  }
  //sonido

  musica = loadSound("assets/musica.mp3");
  puerta = new Audio("assets/puerta.mp3");
  pasos = new Audio("assets/pasos.mp3");
}

function setup() {
  createCanvas(800, 450);
}


function draw() {

  if (pantalla == 0) {
    image(fondos[0], 0, 0, width, height);
  }

  if (pantalla == 1) {
    image(fondos[1], 0, 0, width, height);
    image(aleksi[0], 510, 60, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 2) {
    image(fondos[2], 0, 0, width, height);
    image(aleksi[0], 510, 60, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 3) {
    image(fondos[3], 0, 0, width, height);
    image(aleksi[2], 510, 60, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 4) {
    image(fondos[4], 0, 0, width, height);
    image(aleksi[2], 510, 60, 350, 500);
    fill(50, 50, 50, 200);
    rect(200, 120, 400, 50);
    fill(255);
    textSize(16);
    text("Aleksi decide no acercarse más al cuerpo y llama inmediatamente a la policía.", 220, 130, 360, 50);

    fill(50, 50, 50, 200);
    rect(200, 200, 400, 50);
    fill(255);
    textSize(16);
    text("Aleksi decide buscar ayuda por su cuenta.", 220, 210, 360, 50);
  }
  if (pantalla == 5) {
    image(fondos[5], 0, 0, width, height);
    image(aleksi[2], 510, 60, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 6) {
    image(fondos[6], 0, 0, width, height);
    image(aleksi[1], 510, 60, 350, 500);
    image(policias, 30, 1, 490, 550);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 7) {
    image(fondos[7], 0, 0, width, height);
  }
  if (pantalla == 8) {
    image(fondos[8], 0, 0, width, height);
    image(aleksi[2], 510, 60, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 9) {
    image(fondos[9], 0, 0, width, height);
    image(aleksi[1], 510, 60, 350, 500);
    fill(50, 50, 50, 200);
    rect(200, 120, 400, 50);
    fill(255);
    textSize(16);
    text("Se dirige al comedor.", 220, 130, 360, 50);

    fill(50, 50, 50, 200);
    rect(200, 200, 400, 50);
    fill(255);
    textSize(16);
    text("Se dirige a la recepción.", 220, 210, 360, 50);
  }
  if (pantalla == 10) {
    image(fondos[10], 0, 0, width, height);
    image(aleksi[1], 510, 60, 350, 500);
    image(asesino[0], 30, 20, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 11) {
    image(fondos[11], 0, 0, width, height);
    image(aleksi[2], 510, 60, 350, 500);
    image(asesino[1], 30, 20, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 12) {
    image(fondos[12], 0, 0, width, height);
  }
  if (pantalla == 13) {
    image(fondos[13], 0, 0, width, height);
    image(aleksi[0], 510, 60, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 14) {
    image(fondos[14], 0, 0, width, height);
    image(aleksi[0], 510, 60, 350, 500);
    image(npc, 30, 20, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 15) {
    image(fondos[15], 0, 0, width, height);
    image(aleksi[2], 510, 60, 350, 500);
    image(policias, 1, 1, 490, 550);
    image(npc, 350, 20, 350, 500);
    cajaNarracion();
    narracion();
    image(flecha, 620, 384, 200, 100);
  }
  if (pantalla == 16) {
    image(fondos[16], 0, 0, width, height);
  }
  if (pantalla == 17) {
    dibujarCreditos();
  }
}

function mousePressed() {
  if (pantalla == 0) {
    //rect(602, 180, 166, 30)
    if (botonSeleccionado(602, 180, 166, 30)) {
      pantalla = 1;

      if (!musica.isPlaying()) {
        musica.loop();
      }
    }
    //rect(602, 220, 166, 30)
    if (botonSeleccionado(602, 220, 166, 30)) {
      pantalla = 17;

      tiempoInicial = millis();
      posXPersonaje = 50;
      posYTexto = -50;
      personajeDetenido = false;
      esperandoEnCentro = false;
    }
  } else if (pantalla == 1) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      if (linea==0) {
        linea = 1;
      } else {
        pantalla = 2;
        linea = 0;

        puerta.play();
      }
    }
  } else if (pantalla == 2) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 3;
      pasos.play();
    }
  } else if (pantalla == 3) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 4;
    }
  } else if (pantalla == 4) {
    if (botonSeleccionado(200, 120, 400, 50)) {
      pantalla = 5;
    }
    if (botonSeleccionado(200, 200, 400, 50))
      pantalla = 8;
  } else if (pantalla == 5) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 6;
      linea = 0;
    }
  } else if (pantalla == 6) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      if (linea==0) {
        linea = 1;
      } else {
        pantalla = 7;
      }
    }
  } else if (pantalla == 7) {
    if (botonSeleccionado(315, 305, 166, 40)) {
      pantalla = 0;
    }
  } else if (pantalla == 8) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 9;
    }
  } else if (pantalla == 9) {
    if (botonSeleccionado(200, 120, 400, 50)) {
      pantalla = 10;
    }
    if (botonSeleccionado(200, 200, 400, 50))
      pantalla = 13;
  } else if (pantalla == 10) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 11;
    }
  } else if (pantalla == 11) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 12;
    }
  } else if (pantalla == 12) {
    if (botonSeleccionado(315, 305, 166, 40)) {
      pantalla = 0;
    }
  } else if (pantalla == 13) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 14;
    }
  } else if (pantalla == 14) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      if (linea==0) {
        linea = 1;
      } else {
        pantalla = 15;
        linea = 0;
      }
    }
  } else if (pantalla == 15) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 16;
    }
  } else if (pantalla == 16) {
    if (botonSeleccionado(315, 305, 166, 40)) {
      pantalla = 0;
    }
  } else if (pantalla == 17) {
    if (botonSeleccionado(620, 384, 200, 100)) {
      pantalla = 0;
    }
  }
}
function botonSeleccionado(x, y, ancho, alto) {
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y +alto) {
    return true;
  } else {
    return false;
  }
}
function narracion() {
  fill(255);
  textSize(18);
  if (pantalla == 1) {
    text(texto1[linea], 70, 320, 660, 100);
  }
  if (pantalla == 2) {
    text(texto2[linea], 70, 320, 660, 100);
  }
  if (pantalla == 3) {
    text(texto3[linea], 70, 320, 660, 100);
  }
  if (pantalla == 5) {
    text(texto4[linea], 70, 320, 660, 100);
  }
  if (pantalla == 6) {
    text(texto5[linea], 70, 320, 660, 100);
  }
  if (pantalla == 8) {
    text(texto6[linea], 70, 320, 660, 100);
  }
  if (pantalla == 10) {
    text(texto7[linea], 70, 320, 660, 100);
  }
  if (pantalla == 11) {
    text(texto8[linea], 70, 320, 660, 100);
  }
  if (pantalla == 13) {
    text(texto9[linea], 70, 320, 660, 100);
  }
  if (pantalla == 14) {
    text(texto10[linea], 70, 320, 660, 100);
  }
  if (pantalla == 15) {
    text(texto11[linea], 70, 320, 660, 100);
  }
}

function cajaNarracion() {
  fill(0, 0, 0, 150);
  rect(50, 300, 700, 120);
}

function dibujarCreditos() {
  background(0);
  tiempoFondo++;
  let tiempoActual = millis() - tiempoInicial;
  if (tiempoActual >= 20000) {
    tiempoInicial = millis();
    tiempoFondo = 0;
    tiempoActual = 0;
  }
  //personaje
  if (!personajeDetenido) {
    if (posXPersonaje < 300) {
      posXPersonaje += velocidadPersonaje;
    } else {
      if (!esperandoEnCentro) {
        tiempoDetenidoInicio = millis();
        esperandoEnCentro = true;
      }
      let tiempoEnEspera = millis() - tiempoDetenidoInicio;
      if (tiempoEnEspera >= 7000) {
        personajeDetenido = true;
      }
    }
  } else {
    posXPersonaje += velocidadPersonaje;
  }
  //texto
  if (posYTexto < 500) {
    posYTexto += velocidadTexto;
  }
  //fondo
  let x = -(tiempoFondo * 1.5) % width;
  image(fondoCreditos, x, 0, width, height);
  image(fondoCreditos, x + width, 0, width, height);
  //personaje
  if (posXPersonaje < width + 100) {
    let frameResultado = floor((tiempoActual / intervaloFrame) % pj.length);
    let imgActual = pj[frameResultado];
    image (imgActual, posXPersonaje, 200, imgActual.width / 3, imgActual.height / 3);
  }
  //texto
  fill(255);
  textSize(32);
  textAlign(CENTER, TOP);
  text("CRÉDITOS", width / 2, posYTexto);
  textSize(20);
  text("Iara Denise Grossutti, Trinidad Lima ", width / 2, posYTexto + 60);

  image(flecha, 620, 384, 200, 100);
}
