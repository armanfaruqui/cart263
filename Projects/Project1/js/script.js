"use strict";

/*****************
Who wants to be Raymond Holt? - Project 1
Sarah Hontoy-Major

This is my project 1, who wants to be Raymond Holt? the televised questionnaire show.
******************/

//Declare variables

let currentState = undefined;


// preload()
// Description of preload
function preload() {

}


// setup()
// Description of setup
function setup() {
  createCanvas(900, 600)

  currentState = new Lvl();
}


// draw()
// Description of draw()
function draw() {
  background(0);
  currentState.update();
}