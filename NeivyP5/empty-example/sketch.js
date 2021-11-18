let snowflakes = []; // array to hold snowflake objects
var fallspeed = 6;

function setup() {
  createCanvas(600, 600);
  fill(240);
  noStroke();
}

function draw() {
  background('brown');
  let t = frameCount / 100; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(fallspeed); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
  //head
  noStroke();
  fill("#F4F4F4");
  ellipse(300,190,150,150);
  //hat
  noStroke();
  fill("#080808");
  rect(220,50,150,80);
  fill("#ffff00");
  stroke("#ECB40A");
  strokeWeight(10);
  rect(285,90,25,30);
  //hatline
  stroke("#080808");
  line(width/2-100,height/4-20,width/4+240,height/4-20);
  //left eye
  stroke("#080808");
  strokeWeight(20);
  point(270,165,);
  //right eye
  stroke("#080808");
  strokeWeight(20);
  point(335,165);
  //nose
  noStroke();
  fill("#FF8A08");
  triangle(290,220,290,180,390,190);
  //mouth
  noFill();
  stroke(0);
  strokeWeight(10);
  arc(width/2+5, height/2-75, 70, 30, TWO_PI, PI);
  //body
  noStroke();
  fill("#F4F4F4");
  ellipse(300,340,180,180);
  //body2
  noStroke();
  fill("#F4F4F4");
  ellipse(300,480,250,250);
  //buttons
  stroke("#080808");
  strokeWeight(30);
  point(300,300,);
  stroke("#080808");
  strokeWeight(30);
  point(300,350,);
  //lefthand
  strokeWeight(15);
  stroke("#8E5101");
  line(width/2-150,height/2-100,width/4+80,height/2-10);//main arm
  line(width/2-145,height/2-140,width/2-150,height/2-105);//right finger
  line(width/2-190,height/2-100,width/2-150,height/2-100);//left finger
  //righthand
  strokeWeight(15);
  stroke("#8E5101");
  line(width/2+70,height/4+140,width/4+330,height/4+70);//main arm
  line(width/2+180,height/2-120,width/2+180,height/2-80);//top fringer
  line(width/2+230,height/2-80,width/4+330,height/2-80);//bottom finger
//textcomment
  textSize(30); //textsize
  noStroke();
  textFont("Times");
  text("Let it Snow!",10,30);
 }
 //mousePressed change fall speed
function mousePressed(){
  //change fallspeed
  fallspeed = fallspeed-2;
}
// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    strokeWeight(1);
    stroke("#FFFFFF");
    ellipse(this.posX, this.posY, this.size);
  };
}
