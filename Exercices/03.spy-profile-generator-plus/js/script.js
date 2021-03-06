"use strict";

/*****************
Sarah Hontoy-Major
Exercice 3 : spy profil generator

Let's you create a new profile or use an already existing profile (only 1) if you know your password.
******************/

//Set the profile object with the spy's information
let spyProfile = {
  name: `REDACTED`,
  alias: `REDACTED`,
  undercoverJob: `REDACTED`,
  secretWeapon: `REDACTED`,
  password: `REDACTED`
};

//All the JSON data needed to create the profile
let tarotData = undefined;
let objectData = undefined;
let instrumentData = undefined;
let descriptionData = undefined;
let jobData = undefined;

//Set possible states
let state = `homepage` // can be homepage or profile

// Set variables for the homepage buttons
let generateProfileString = `Create new profile`
let button1X = undefined;
let button1Y = undefined;
let buttonSizeX = 400;
let buttonSizeY = 100;

let existingProfileString = `I have a password`
let button2X = undefined;
let button2Y = undefined;

// preload()
// Description of preload
function preload() {
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  descriptionData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/descriptions.json`);
  jobData = loadJSON(`data/occupations.json`) // excerpts taken from https://github.com/dariusk/corpora/blob/master/data/humans/occupations.json
}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  //set x and y position of homepage button based on canvas
  button1X = width / 2;
  button1Y = height / 3
  button2X = width / 2
  button2Y = height / 3 * 2
}


// draw()
// Description of draw()
function draw() {
  background(0);
  checkState();
  // displayProfile();
}

//Check State, whether homepage or profile and go to the appropriate function
function checkState() {
  if (state === `homepage`) {
    homepage();
  } else if (state === `profile`) {
    displayProfile()
  }
}

//Displays two buttons : create a new profile or use the password for an already existing profile
function homepage() {
  background(0)

  //generate profile button
  push()
  rectMode(CENTER);
  noStroke();
  fill(0, 255, 0);
  rect(button1X, button1Y, buttonSizeX, buttonSizeY);
  rect(button2X, button2Y, buttonSizeX, buttonSizeY);


  textAlign(CENTER)
  textSize(20);
  textFont(`courier`);
  textStyle(BOLD);
  fill(0);
  text(generateProfileString, button1X, button1Y);
  text(existingProfileString, button2X, button2Y);
  pop();
}

// On the homepage, will be sent to the appropriate function if you click on button 1 or button 2
function mousePressed() {
  if (state === `homepage` &&
    mouseX < button1X + buttonSizeX &&
    mouseX > button1X - buttonSizeX &&
    mouseY < button1Y + buttonSizeY &&
    mouseY > button1Y - buttonSizeY) {
    generateSpyProfile()
  } else if (
    state = `homepage` &&
    mouseX < button2X + buttonSizeX &&
    mouseX > button2X - buttonSizeX &&
    mouseY < button2Y + buttonSizeY &&
    mouseY > button2Y - buttonSizeY) {
    promptPassword()
  }
}

// Will generate a new profile using your name.
function generateSpyProfile() {
  spyProfile.name = prompt(`Ay agent. What is your name?`)
  spyProfile.alias = `The ${random(descriptionData.descriptions)} ${random(instrumentData.instruments)}`;
  spyProfile.undercoverJob = random(jobData.occupations)
  spyProfile.secretWeapon = random(objectData.objects);

  let card = random(tarotData.tarot_interpretations)
  spyProfile.password = random(card.keywords);

  localStorage.setItem(`spy-profile-data-plus`, JSON.stringify(spyProfile));

  state = `profile`;
}

//Will ask your password from an already existing profile. If you get it wrong, responsiveVoice will give feedback.
function promptPassword() {
  let data = JSON.parse(localStorage.getItem(`spy-profile-data-plus`));
  if (data !== null) {
    let password = prompt(`Gimme the goddamn password`)
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.undercoverJob = data.undercoverJob
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;

      state = `profile`
    } else {
      responsiveVoice.speak(`That's not even close`)
    }
  } else {
    homepage();
  }
}


//display profile with information.
function displayProfile() {
  let profile = `** SPY PROFILE **
Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
undercover Occupation : ${spyProfile.undercoverJob}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}`;

  push()
  textSize(32);
  textFont(`Courier, monospace`)
  textStyle(BOLD);
  textAlign(LEFT, TOP)
  fill(0, 255, 0);
  text(profile, 200, 200)
  pop()
}