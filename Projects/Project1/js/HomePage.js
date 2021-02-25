class Homepage {

  constructor() {
    //image that is displayed;
    this.titleImg = titleImg0;

    //title Images to randomly choose from
    this.titleImg0 = titleImg0;
    this.titleImg1 = titleImg1;
    this.titleImg2 = titleImg2;

    //Position and Size of title img
    this.titleImgX = width / 2
    this.titleImgY = height / 2
    this.titleWidth = 900;
    this.titleHeight = 600;

    //Flickering speed between img
    this.titleFlickerSpeed = 10;

    ////Raymond Holt pictures
    //Pointing Raymond Holt = RHImg0;
    this.RHImg0 = titleRHImg0;
    this.RHImg0Width = 214;
    this.RHImg0Height = 403;
    this.RHImg0PositionX = width / 5 * 2.9;
    this.RHImg0PositionY = height + this.RHImg0Height;
    //RHImg0 movement
    this.RHImg0FinalPositionX = width / 5 * 3;
    this.RHImg0FinalPositionY = height - this.RHImg0Height / 2 + 10;
    this.RHImg0velocity = 4;

    //Two left pictures = RHImg1;
    this.RHImg1 = titleRHImg1;
    this.RHImg1Width = 442;
    this.RHImg1Height = 351;
    this.RHImg1PositionX = 0 - this.RHImg1Width / 2;
    this.RHImg1PositionY = height - this.RHImg1Height / 2 + 30;
    //RHImg0 movement
    this.RHImg1FinalPositionX = width / 5 * 1.8;
    this.RHImg1FinalPositionY = height - this.RHImg1Height / 2 + 30;
    this.RHImg1velocity = 5;

    //t-shirt wearing Raymond = RHImg2;
    this.RHImg2 = titleRHImg2;
    this.RHImg2Width = 310;
    this.RHImg2Height = 376;
    this.RHImg2PositionX = width + this.RHImg2Width / 2;
    this.RHImg2PositionY = height - this.RHImg2Height / 2 + 20;
    //RHImg0 movement
    this.RHImg2FinalPositionX = width / 5 * 3.6;
    this.RHImg2FinalPositionY = height - this.RHImg2Height / 2 + 20;
    this.RHImg2velocity = -5;

    ////instructions
    //Timed appearance
    this.instructionsCurrentTimer = 0;
    this.instructionsAppearanceTime = 2;

    //Instruction string variables
    this.instructionsString = `Instructions`;
    this.instructionsFont = adamGorryLights;
    this.instructionsPositionX = width / 7 * 6;
    this.instructionsPositionY = height / 12;
    this.instructionsTextSize = 32;
    this.instructionsFill = {
      r: 248,
      g: 232,
      b: 21
    }

    //instructions button variables
    this.instructionsButtonWidth = 200;
    this.instructionsButtonHeight = 50;
    this.instructionsButtonUpperCornerX = this.instructionsPositionX + this.instructionsButtonWidth / 2;
    this.instructionsButtonUpperCornerY = this.instructionsPositionY - this.instructionsButtonHeight / 2;
    this.instructionsButtonBottomCornerX = this.instructionsPositionX - this.instructionsButtonWidth / 2;
    this.instructionsButtonBottomCornerY = this.instructionsPositionY + this.instructionsButtonHeight / 2;
    this.instructionsButtonRoundedCorner = 20;
    this.instructionsButtonColor = {
      r: 191,
      g: 88,
      b: 156,
      a: 0
    }
    this.buttonMaximumAlpha = 255;
    this.buttonMinimumAlpha = 0;
    this.buttonModifiedAlphaValue = 50;


    //Opening instructions
    this.instructionsButtonOpened = false;
    this.instructionsButtonResizingValue = 50;
    this.instructionsButtonMaximumBottomCornerX = 50;
    this.instructionsButtonMaximumBottomCornerY = height - 50;
    this.instructionsButtonMinimumBottomCornerX = this.instructionsPositionX - this.instructionsButtonWidth / 2;
    this.instructionsButtonMinimumBottomCornerY = this.instructionsPositionY + this.instructionsButtonHeight / 2;

    ////Generalbackground color
    this.background = {
      r: 59,
      g: 61,
      b: 126
    }
  }

  update() {
    this.setBackground();
    this.displayBackRaymondHolt();
    this.displayTitle();
    this.displayRaymondHolt();
    this.displayInstructions();
    this.instructionsButtonResize()
  }

  setBackground() {
    background(this.background.r, this.background.g, this.background.b);
  }


  displayBackRaymondHolt() {
    ////RHImg2 (t-shirt Raymond, right)
    //move RHImg2
    if (this.RHImg2PositionX > this.RHImg2FinalPositionX) {
      this.RHImg2PositionX += this.RHImg2velocity
    }
    //Display RHImg2
    push()
    imageMode(CENTER);
    image(this.RHImg2, this.RHImg2PositionX, this.RHImg2PositionY, this.RHImg2Width, this.RHImg2Height)
    pop()

  }

  displayTitle() {
    if (frameCount % this.titleFlickerSpeed === 0) {
      let titleImages = [this.titleImg0, this.titleImg1, this.titleImg2]
      this.titleImg = random(titleImages);
    }
    push()
    imageMode(CENTER);
    image(this.titleImg, this.titleImgX, this.titleImgY, this.titleImgWidth, this.titleImgHeight);
    pop()
  }

  displayRaymondHolt() {
    ////RHImg1 (two left pictures)
    //move RHImg1
    if (this.RHImg1PositionX < this.RHImg1FinalPositionX) {
      this.RHImg1PositionX += this.RHImg1velocity
    }
    //Display RHImg1
    push()
    imageMode(CENTER);
    image(this.RHImg1, this.RHImg1PositionX, this.RHImg1PositionY, this.RHImg1Width, this.RHImg1Height)
    pop()

    ////RHImg0 (pointing Raymond)
    //move RHImg0
    if (this.RHImg0PositionY > this.RHImg0FinalPositionY) {
      this.RHImg0PositionY -= this.RHImg0velocity
    }
    //Display RHImg0
    push()
    imageMode(CENTER);
    image(this.RHImg0, this.RHImg0PositionX, this.RHImg0PositionY, this.RHImg0Width, this.RHImg0Height)
    pop()
  }

  displayInstructions() {
    //wait a few seconds for the instruction button to appear
    if (this.instructionsCurrentTimer < this.instructionsAppearanceTime && frameCount % 60 === 0) {
      this.instructionsCurrentTimer++
    }

    //when the timer has passed, instructions button will appear
    if (this.instructionsCurrentTimer >= this.instructionsAppearanceTime) {

      ////button
      //If you hover over the instructions, the background button will appear gradually, otherwise it will disappear gradually (max alpha of 255, minimum of 0)
      if (mouseX > this.instructionsPositionX - this.instructionsButtonWidth / 2 &&
        mouseX < this.instructionsPositionX + this.instructionsButtonWidth / 2 &&
        mouseY > this.instructionsPositionY - this.instructionsButtonHeight / 2 &&
        mouseY < this.instructionsPositionY + this.instructionsButtonHeight / 2) {
        if (this.instructionsButtonColor.a < this.buttonMaximumAlpha) {
          this.instructionsButtonColor.a += this.buttonModifiedAlphaValue
        }
      } else {
        if (!this.instructionsButtonOpened) {
          if (this.instructionsButtonColor.a > this.buttonMinimumAlpha) {
            this.instructionsButtonColor.a -= this.buttonModifiedAlphaValue
          }
        }
      }
      //Display button
      push();
      rectMode(CORNERS);
      noStroke();
      fill(this.instructionsButtonColor.r, this.instructionsButtonColor.g, this.instructionsButtonColor.b, this.instructionsButtonColor.a);
      rect(this.instructionsButtonUpperCornerX, this.instructionsButtonUpperCornerY, this.instructionsButtonBottomCornerX, this.instructionsButtonBottomCornerY, this.instructionsButtonRoundedCorner)
      pop();

      ////string
      //display the string
      push();
      // textFont(this.instructionsFont);
      fill(this.instructionsFill.r, this.instructionsFill.g, this.instructionsFill.b);
      textAlign(CENTER, CENTER);
      textSize(this.instructionsTextSize);
      text(this.instructionsString, this.instructionsPositionX, this.instructionsPositionY)
      pop();
    }
  }

  mousePressed() {
    if (
      mouseX > this.instructionsPositionX - this.instructionsButtonWidth / 2 &&
      mouseX < this.instructionsPositionX + this.instructionsButtonWidth / 2 &&
      mouseY > this.instructionsPositionY - this.instructionsButtonHeight / 2 &&
      mouseY < this.instructionsPositionY + this.instructionsButtonHeight / 2) {
      if (!this.instructionsButtonOpened) {
        this.instructionsButtonOpened = true
      } else if (this.instructionsButtonOpened) {
        this.instructionsButtonOpened = false
      }
    }
  }

  instructionsButtonResize() {
    if (this.instructionsButtonOpened) {
      if (this.instructionsButtonBottomCornerX > this.instructionsButtonMaximumBottomCornerX)
        this.instructionsButtonBottomCornerX -= this.instructionsButtonResizingValue;
      if (this.instructionsButtonBottomCornerY < this.instructionsButtonMaximumBottomCornerY) {
        this.instructionsButtonBottomCornerY += this.instructionsButtonResizingValue;
      }
      this.instructionsString = `              X`;
    } else if (!this.instructionsButtonOpened) {
      if (this.instructionsButtonBottomCornerX < this.instructionsButtonMinimumBottomCornerX) {
        this.instructionsButtonBottomCornerX += this.instructionsButtonResizingValue;
      }
      if (this.instructionsButtonBottomCornerY > this.instructionsButtonMinimumBottomCornerY) {
        this.instructionsButtonBottomCornerY -= this.instructionsButtonResizingValue
      }
      this.instructionsString = `Instructions`
    }

  }

}