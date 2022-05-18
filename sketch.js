var mySound, song, analyzer;
var scr = 1;
var card = [];
var name = 0;
var center = 0;

var c1x = 300;
var c1y = 250;
var c1r = 85;
var c1g = 180;

var rx = 100;
var ry = 200;
var rw = 150;
var rh = 80;

var x = 100;
var y = 50;

let offsetX;
function preload() {
  card[0] = loadImage("CardA 1.png");
  card[1] = loadImage("CardB 1.png");
  card[2] = loadImage("CardC 1.png");
  card[3] = loadImage("Card.png");
  card[4] = loadImage("CardE 1.png");
  card[5] = loadImage("CardF 1.png");
  card[6] = loadImage("CardG 1.png");
  card[7] = loadImage("CardH 1.png");
  card[8] = loadImage("CardI 1.png");
  card[9] = loadImage("CardJ 1.png");
  card[10] = loadImage("CardK 1.png");
  card[11] = loadImage("CardL 1.png");
  card[12] = loadImage("CardM 1.png");
  card[13] = loadImage("CardN 1.png");
  card[14] = loadImage("CardO 1.png");
  card[15] = loadImage("CardP 1.png");
  card[16] = loadImage("CardQ 1.png");
  card[17] = loadImage("CardR 1.png");
  card[18] = loadImage("CardT 1.png");
  card[19] = loadImage("CardU 1.png");
  font1 = loadFont("KeeponTruckin.ttf");
  font2 = loadFont("aAbstractGroovy.ttf");
  font3 = loadFont("Water Park.ttf");

  base = loadImage("AEA.png");
  hand = loadImage("Hand4.png");
  back = loadImage("Back.png");
  checker = loadImage("BackG.png");
  End = loadImage("End1.png");
}

let welcomeDisplay = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  offsetX = (width - base.width) / 2;
}

function draw() {
  translate(offsetX, 0);

  if (scr == 1) {
    drawScreen1();
  } else if (scr == 2) {
    drawScreen2();
  } else if (scr == 3) {
    drawScreen3();
  } else if (scr == 4) {
    drawScreen4();
  }
}

function drawScreen1() {
  background(0);
  noCursor();
  image(base, 605, 600);

  fill(240, 248, 255, 0);
  ellipse(610, 540, c1r);

  if (overCircle(605, 600, c1r)) {
    frameRate(2000);
    fill(random(470), 200, random(450), 100);
    noStroke();
    ellipse(610, 605, c1r + 930);
  } else {
    fill(242, 242, 242, 0);
    noStroke();
    ellipse(605, 600, c1r, c1g);
  }

  // welcome text
  if (welcomeDisplay) {
    push();
    translate(-offsetX, 0);
    rectMode(CENTER);

    textAlign(CENTER, CENTER);
    fill(0);
    rect(0, 0, 4000, 4000);
    textSize(90);
    noStroke();
    fill(255);
    textFont(font2);
    text("Warning!!!", width / 2, height / 2 - 200);
    textFont(font1);
    textSize(60);
    text("The website contains flashlights \n\ that might make you feel uncomfortable", width / 2, height / 2);
    textFont(font3);
    text("Click the Screen to see your future", width / 2, height / 2+300);
    pop();
  }

  image(hand, mouseX, mouseY, 105, 120);
}

let backHomeX = 300;
let backHomeY = 740;
function drawScreen2() {
  cursor();
  image(checker, 605, 600, 1225, 1215);
  imageMode(CORNER);
  for (var b = -55; b <= 350; b = b + 40) {
    var cardY = 420;
    if (overRect(b + 415, cardY + 100, 40, 200)) {
      image(back, b + 385, cardY - 40, 150, 285);
    } else {
      image(back, b + 385, cardY, 150, 285);
    }
  }
  imageMode(CENTER);
}

function drawScreen3() {
  background(0);
  console.log(name);
  image(card[name], 605, 600, 1215, 1210);
}

function drawScreen4() {
  background(0);
  image(End, 605, 600, 1215, 1210);

  fill(255);
  textSize(90);
  text(" ", backHomeX, backHomeY);
}

function overCircle(x, y, radius) {
  if (dist(x, y, mouseX, mouseY) < radius) {
    return true;
  } else {
    return false;
  }
}

function overRect(x, y, w, h) {
  if (
    mouseX - offsetX > x &&
    mouseX - offsetX < x + w &&
    mouseY > y &&
    mouseY < y + h
  ) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  if (scr == 1) {
    if (welcomeDisplay) {
      // click welcome text
      if (
        mouseX + offsetX >= width * 0.375 &&
        mouseX + offsetX <= width * 0.625 &&
        mouseY >= height * 0.375 &&
        mouseY <= height * 0.625
      ) {
        welcomeDisplay = false;
      }
    } else {
      scr = 2;
    }
  } else if (scr == 2) {
    var rand = floor(random(card.length));
    name = rand;
    scr = 3;
  } else if (scr == 3) {
    scr = 4;
  } else if (scr == 4) {
    // click back home
    if (
      mouseX >= offsetX + backHomeX + 120 &&
      mouseX < offsetX + backHomeX + 500 &&
      mouseY >= backHomeY - 70 &&
      mouseY <= backHomeY
    ) {
      scr = 1;
      welcomeDisplay = true;
    }
  }
}
