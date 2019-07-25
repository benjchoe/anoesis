// ugh.rip
// ben choe

let x, y;
let img;
let vel, pos;
let xspeed, yspeed;

var images = ['gif/00.gif', 'gif/01.gif', 'gif/02.gif', 'gif/03.gif', 'gif/04.gif', 'gif/05.gif', 'gif/06.gif', 'gif/07.gif', 'gif/08.gif', 'gif/09.gif', 'gif/10.gif', 'gif/11.gif', 'gif/12.gif', 'gif/13.gif', 'gif/14.gif', 'gif/15.gif', 'gif/16.gif', 'gif/17.gif', 'gif/18.gif', 'gif/19.gif'];
let randomImage;
let randomImageDos;

var blendMode1 = [];
var blendMode2 = [];
var blendMode3 = [];

function preload() {
  randomImage = random(images);
  img = createImg(randomImage);
}

function setup() {
  createCanvas(windowWidth, windowHeight); // window size
  pos = createVector(random(375), random(500)); //starting point
  vel = createVector(3,3); //velocity
  blendMode1 = [ADD, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, SCREEN, OVERLAY, BLEND, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN];
  blendMode2 = [ADD, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, SCREEN, OVERLAY, BLEND, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN];
  blendMode3 = [ADD, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, SCREEN, OVERLAY, BLEND, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN];
  blendMode(random(blendMode1));
  blendMode(random(blendMode2));
  blendMode(random(blendMode3));
  //pos.history = [];
  //xspeed = 1;
  //yspeed = 1;
  //x = random(width);
  //y = random(height);
}

function draw() {
  pos.x = pos.x + vel.x;
  pos.y = pos.y + vel.y;

  img.position(pos.x, pos.y); // initialize photo
  image(img, pos.x, pos.y); //tracing frames

  //if (pos.history % 29 == 0) {
  //  image(img, pos.x, pos.y);
  //}


  if (pos.x + img.width >= windowWidth) { // bounce x-axis
    vel.x = -vel.x;
    pos.x = windowWidth - img.width;
    blendMode(random(blendMode1));
    blendMode(random(blendMode2));
    blendMode(random(blendMode3));
  } else if (pos.x <= 0) {
    vel.x = -vel.x;
    pos.x = 0;
    blendMode(random(blendMode1));
    blendMode(random(blendMode2));
    blendMode(random(blendMode3));
  }

  if (pos.y + img.height >= windowHeight) { // bounce y-axis
    vel.y = -vel.y;
    pos.y = windowHeight - img.height;
    blendMode(random(blendMode1));
    blendMode(random(blendMode2));
    blendMode(random(blendMode3));
  } else if (pos.y <= 0) {
    vel.y = -vel.y;
    pos.y = 0;
    blendMode(random(blendMode1));
    blendMode(random(blendMode2));
    blendMode(random(blendMode3));
  }
}

function keyPressed(){
  removeElements();
  clear();
  randomImageDos = random(images);
  if (randomImageDos == randomImage) {
    randomImageDos = random(images);
  }
  img = createImg(randomImageDos);
  blendMode(random(blendMode1));
  blendMode(random(blendMode2));
  blendMode(random(blendMode3));
} 

function mouseClicked(){ // resets everything
  removeElements();
  //clear();
  randomImageDos = random(images);
  if (randomImageDos == randomImage) {
    randomImageDos = random(images);
  }
  img = createImg(randomImageDos);
  blendMode(random(blendMode1));
  blendMode(random(blendMode2));
  blendMode(random(blendMode3));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
