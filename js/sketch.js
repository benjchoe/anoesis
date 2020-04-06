// ugh.rip
// ben choe

let x, y;
let img;
let vel, pos;
let xspeed, yspeed;

var images = ['gif/00.gif', 'gif/01.gif', 'gif/02.gif', 'gif/03.gif', 'gif/04.gif', 'gif/05.gif', 'gif/06.gif', 'gif/07.gif', 'gif/08.gif', 'gif/09.gif', 'gif/10.gif', 'gif/11.gif', 'gif/12.gif', 'gif/13.gif', 'gif/14.gif', 'gif/15.gif', 'gif/16.gif', 'gif/17.gif', 'gif/18.gif', 'gif/19.gif', 'gif/20.gif', 'gif/21.gif', 'gif/22.gif', 'gif/23.gif', 'gif/24.gif', 'gif/25.gif', 'gif/26.gif', 'gif/27.gif', 'gif/28.gif', 'gif/29.gif', 'gif/30.gif', 'gif/31.gif', 'gif/32.gif', 'gif/33.gif', 'gif/34.gif', 'gif/35.gif', 'gif/36.gif', 'gif/37.gif', 'gif/38.gif', 'gif/39.gif', 'gif/40.gif', 'gif/41.gif', 'gif/42.gif', 'gif/43.gif', 'gif/44.gif', 'gif/45.gif', 'gif/46.gif', 'gif/47.gif', 'gif/48.gif', 'gif/49.gif', 'gif/50.gif', 'gif/51.gif', 'gif/52.gif', 'gif/53.gif', 'gif/54.gif', 'gif/55.gif', 'gif/56.gif', 'gif/57.gif', 'gif/58.gif'];
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
  var canvas = createCanvas(windowWidth, windowHeight);
  pos = createVector(random(300), random(500)); //starting point
  vel = createVector(4,4); //velocity
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
  initialize();
  //if (pos.history % 29 == 0) {
  //  image(img, pos.x, pos.y);
  //}
}

function initialize() {
  img.position(pos.x, pos.y); // initialize photo --\
  resize();
  if(img.width>401){
    setTimeout(bounceY,500);
  }  else if (img.width>=0 || img.width<=180){
    image(img, pos.x, pos.y); //tracing frames
    bounceX();
    bounceY();
    }
}

function bounceX() {
  if (pos.x >= windowWidth - img.width) { // bounce x-axis
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
}

function bounceY() {
  if (pos.y >= windowHeight - img.height) { // bounce y-axis
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

function resize() {
  img.style('max-width','400px');
  imgW = img.width;
  imgH = img.height;
}

function newImg() {
  randomImageDos = random(images);
  img = createImg(randomImageDos);
  initialize();
}

function keyPressed(){
  removeElements();
  clear();
  newImg();
  blendMode(random(blendMode1));
  blendMode(random(blendMode2));
  blendMode(random(blendMode3));
}

function mouseClicked(){ // resets everything
    removeElements();
    //clear();
    newImg();
    blendMode(random(blendMode1));
    blendMode(random(blendMode2));
    blendMode(random(blendMode3));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
