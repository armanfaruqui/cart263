"use strict";

/*****************

Activity 04 : bubble popper
Sarah Hontoy-Major

This is activity 04: bubble popper
******************/

let video = undefined;
let handpose = undefined;
let predictions = [];
let bubble = undefined;

let popSound = undefined;
let bubblePopped = 0

// preload()
// Description of preload
function preload() {
  popSound = loadSound(`assets/sounds/comedy_bubble_pop_001.mp3`)
}


// setup()
// Description of setup
function setup() {
  createCanvas(640, 480);

  //access user's webcame and then hides the new html element
  video = createCapture(VIDEO);
  video.hide();

  //Load handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log(`model loaded`);
  });

  //Listen for predictions
  handpose.on(`predict`, function(results) {
    // console.log(results);
    predictions = results;
  });

  //our bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  }
}


// draw()
// Description of draw()
function draw() {
  background(0);

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    //draw pin
    push()
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    //draw the red base of pin
    push()
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();

    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;
      bubblePopped++
      if (!popSound.isPlaying()) {
        popSound.play();
      }
    }
  }

  //Move the bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }



  //display Score
  push()
  textStyle(BOLD)
  textFont(`courier`)
  textSize(750)
  textAlign(CENTER)
  fill(0, 255, 0, 50)
  text(bubblePopped, width / 2, height)
  pop()

  push();
  fill(0, 255, 0);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();


}