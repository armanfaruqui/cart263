/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let defaultParameters = {
  canvasWidth: 800,
  canvasHeight: 600,
  bg: {
    r: 189,
    g: 183,
    b: 219
  }
}

let currentState = undefined // scenes can be: Intro, Intro Dialog, Intro Employee, Choosing Section

//load dialog scripts via JSON
let dialogsData = undefined;

//All fonts
let alienEncounterFont = undefined;
let atkinsonBold = undefined;
let atkinsonBoldItalic = undefined;
let atkinsonItalic = undefined;
let atkinsonRegular = undefined;

// intro scene variables
let mallEscalatorsImg = undefined;
let mallMezzanineImg = undefined;
let mallStoreFrontImg = undefined;

//dialog scenes + inside store variables
let employeeImg = undefined;
let insideStoreImg = undefined;


/**
Description of preload
*/
function preload() {
  //JSON data
  dialogsData = loadJSON(`assets/data/dialogues.json`)

  //all fonts
  alienEncounterFont = loadFont(`assets/fonts/SFAlienEncounters.ttf`);
  atkinsonBold = loadFont(`assets/fonts/Atkinson-Hyperlegible-Bold-102.ttf`);
  atkinsonBoldItalic = loadFont(`assets/fonts/Atkinson-Hyperlegible-BoldItalic-102.ttf`);
  atkinsonItalic = loadFont(`assets/fonts/Atkinson-Hyperlegible-Italic-102.ttf`);
  atkinsonRegular = loadFont(`assets/fonts/Atkinson-Hyperlegible-Regular-102.ttf`);

  //intro imgs
  mallEscalatorsImg = loadImage(`assets/images/mallEscalators.png`);
  mallMezzanineImg = loadImage(`assets/images/mallMezzanineView.png`);
  mallStoreFrontImg = loadImage(`assets/images/mallStoreFront.png`);

  //dialog scenes +inside Store variables
  employeeImg = loadImage(`assets/images/employee.png`);
  insideStoreImg = loadImage(`assets/images/insideStoreImg.png`)
}


/**
Description of setup
*/
function setup() {
  //create a canvas and set its default background color
  createCanvas(defaultParameters.canvasWidth, defaultParameters.canvasHeight);
  background(defaultParameters.bg.r, defaultParameters.bg.g, defaultParameters.bg.b)

  currentState = new IntroEmployee(); //can be Intro, IntroDialog, TransitionInsideStore, IntroEmployee
}


/**
Description of draw()
*/
function draw() {
  currentState.update();
}

function mousePressed() {
  currentState.mousePressed();
}