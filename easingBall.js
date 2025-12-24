//-----------------------------------------------------------
//              Globales
//-----------------------------------------------------------
let windowWidthVal = 800;
let windowHeightVal = 600;

let colorBKG;
let colorBall;

let ballD;
let ballX = 100;
let ballY = 100;

let easingFactor = 0.15;

//-----------------------------------------------------------
//              Setup
//-----------------------------------------------------------
function setup() {
  createCanvas(windowWidthVal, windowHeightVal);
  pixelDensity(1);

  colorBKG = color(0);
  colorBall = color(255, 127, 0);

  ballD = 0.1 * height;
}

//-----------------------------------------------------------
//              Draw
//-----------------------------------------------------------
function draw() {
  if (mouseIsPressed) {
    background(colorBKG);
    ballX += (mouseX - ballX) * easingFactor;
    ballY += (mouseY - ballY) * easingFactor;
  }

  noStroke();
  fill(colorBall);
  circle(ballX, ballY, ballD);
}
