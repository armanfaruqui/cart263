class Dialog extends Scene {
  constructor() {
    super();

    this.dialogBox = {
      titleBox: {
        string: undefined,
        font: alienEncounterFont,
        textSize: 30,
        rectMode: CORNER,
        size: {
          width: 300,
          height: 50
        },
        cornerRoundness: 10,
        position: {
          x: width / 10,
          y: height + 50
        },
        textOffset: {
          x: 25,
          y: 37
        },
        textPosition: {
          x: undefined,
          y: undefined
        },
        landingPosition: {
          x: width / 10,
          y: height / 3 * 2
        },
        backgroundColor: {
          r: 191,
          g: 225,
          b: 229
        },
        textColor: {
          r: 230,
          g: 36,
          b: 133
        },
        slideInSpeed: -5,
        easing: 0.5,
      },
      textBox: {
        fullTextDisplayed: false,
        string: undefined,
        font: `courier`,
        textSize: 14,
        rectMode: CENTER,
        size: {
          width: width - 200,
          height: 150
        },
        cornerRoundness: 10,
        position: {
          x: width / 2,
          y: height + 150,
        },
        textOffset: {
          x: -width / 3,
          y: -40,
          x2: width / 5,
          y2: 100
        },
        textPosition: {
          x: undefined,
          y: undefined,
          x2: undefined,
          y2: undefined
        },
        landingPosition: {
          x: width / 2,
          y: height / 7 * 6
        },
        backgroundColor: {
          r: 143,
          g: 140,
          b: 243
        },
        textColor: {
          r: 0,
          g: 0,
          b: 0
        },
        slideInSpeed: -5,
        easing: 0.5,
      },

      // Buttons and answers variables
      answerButton: {
        rectMode: CENTER,
        textSize: 14,
        strokeWeight: 3,
        cornerRoundness: 10,
        size: {
          width: width,
          height: 10
        },
        position: {
          //x defined under specific answer a or b
          y: height / 10 * 9.5
        },
        fill: {
          r: 230,
          g: 36,
          b: 133
        },
        strokeFill: {
          r: 0,
          g: 0,
          g: 0
        },
        hoverFill: {
          r: 0,
          g: 0,
          b: 0
        },
        textFill: {
          r: 0,
          g: 0,
          b: 0
        },
        a: {
          x: 100,
          string: undefined
        },
        b: {
          x: 500,
          string: undefined
        }
      }
    }


    this.answerChoices = [this.dialogBox.answerButton.a, this.dialogBox.answerButton.b]

    this.typewriter = {
      fullText: ``,
      displayText: ``,
      nextChar: 0,
      speed: 50,
      interval: undefined,
    }
  }

  update() {
    super.update();
    this.setBackgroundImg();
    this.animateAndDisplayDialogBox();
    this.animateAndDisplayDialogQuestion();
    this.animateAndDisplayAnswers();
  }

  setBackgroundImg() {
    push();
    imageMode(CENTER);
    image(this.backgroundImg.img, this.backgroundImg.position.x, this.backgroundImg.position.y, this.backgroundImg.size.width, this.backgroundImg.size.height);
    pop();
  }

  animateAndDisplayDialogBox() {
    //animation text box
    if (this.dialogBox.textBox.position.y > this.dialogBox.textBox.landingPosition.y) {
      this.dialogBox.textBox.position.y += this.dialogBox.textBox.slideInSpeed
    }

    //display text box
    push()
    rectMode(this.dialogBox.textBox.rectMode);
    noStroke();
    fill(this.dialogBox.textBox.backgroundColor.r, this.dialogBox.textBox.backgroundColor.g, this.dialogBox.textBox.backgroundColor.b);
    rect(this.dialogBox.textBox.position.x, this.dialogBox.textBox.position.y, this.dialogBox.textBox.size.width, this.dialogBox.textBox.size.height, this.dialogBox.textBox.cornerRoundness)
    pop()

    //animate title Box and title string
    if (this.dialogBox.titleBox.position.y > this.dialogBox.titleBox.landingPosition.y) {
      this.dialogBox.titleBox.position.y += this.dialogBox.titleBox.slideInSpeed
    }

    //display title box
    push()
    rectMode(this.dialogBox.titleBox.rectMode);
    noStroke();
    fill(this.dialogBox.titleBox.backgroundColor.r, this.dialogBox.titleBox.backgroundColor.g, this.dialogBox.titleBox.backgroundColor.b);
    rect(this.dialogBox.titleBox.position.x, this.dialogBox.titleBox.position.y, this.dialogBox.titleBox.size.width, this.dialogBox.titleBox.size.height, this.dialogBox.titleBox.cornerRoundness)
    pop()

    //calculate position of text based on position of title box and text offset
    this.dialogBox.titleBox.textPosition.x = this.dialogBox.titleBox.position.x + this.dialogBox.titleBox.textOffset.x;
    this.dialogBox.titleBox.textPosition.y = this.dialogBox.titleBox.position.y + this.dialogBox.titleBox.textOffset.y;

    //display title
    push()
    textAlign(LEFT, BOTTOM);
    textFont(this.dialogBox.titleBox.font);
    textSize(this.dialogBox.titleBox.textSize)
    fill(this.dialogBox.titleBox.textColor.r, this.dialogBox.titleBox.textColor.g, this.dialogBox.titleBox.textColor.b);
    text(this.dialogBox.titleBox.string, this.dialogBox.titleBox.textPosition.x, this.dialogBox.titleBox.textPosition.y);
    pop()
  }


  animateAndDisplayDialogQuestion() {
    if (this.dialogBox.textBox.position.y <= this.dialogBox.textBox.landingPosition.y) {
      //typewriter effect to be added

      //calculate position of text based on position of title box and text offset
      this.dialogBox.textBox.textPosition.x = this.dialogBox.textBox.position.x + this.dialogBox.textBox.textOffset.x;
      this.dialogBox.textBox.textPosition.y = this.dialogBox.textBox.position.y + this.dialogBox.textBox.textOffset.y;
      this.dialogBox.textBox.textPosition.x2 = this.dialogBox.textBox.position.x + this.dialogBox.textBox.textOffset.x2;
      this.dialogBox.textBox.textPosition.y2 = this.dialogBox.textBox.position.y + this.dialogBox.textBox.textOffset.y2;

      this.dialogBox.textBox.fullTextDisplayed = true;

      //display text
      push();
      textAlign(LEFT);
      textFont(this.dialogBox.textBox.font);
      textSize(this.dialogBox.textBox.textSize)
      fill(this.dialogBox.textBox.textColor.r, this.dialogBox.textBox.textColor.g, this.dialogBox.textBox.textColor.b);
      text(this.dialogBox.textBox.string, this.dialogBox.textBox.textPosition.x, this.dialogBox.textBox.textPosition.y, this.dialogBox.textBox.textPosition.x2, this.dialogBox.textBox.textPosition.y2);
      pop();
    }
  }

  animateAndDisplayAnswers() {
    //check if text is displayed. If so, display answer buttons
    if (this.dialogBox.textBox.fullTextDisplayed === true) {

      //(Taken from my project 1)
      for (let i = 0; i < this.answerChoices.length; i++) {

        console.log(this.answerChoices[i])
        //button (fill color changes if hovering over)
        push();
        if (
          mouseX >
          this.answerChoices[i].x - this.dialogBox.answerButton.size.width / 2 &&
          mouseX <
          this.answerChoices[i].x + this.dialogBox.answerButton.size.width / 2 &&
          mouseY >
          this.dialogBox.answerButton.position.y - this.dialogBox.answerButton.size.height / 2 &&
          mouseY <
          this.dialogBox.answerButton.position.y + this.dialogBox.answerButton.size.height / 2
        ) {
          fill(
            this.dialogBox.answerButton.hoverFill.r,
            this.dialogBox.answerButton.hoverFill.g,
            this.dialogBox.answerButton.hoverFill.b
          );
        } else {
          fill(
            this.dialogBox.answerButton.fill.r,
            this.dialogBox.answerButton.fill.g,
            this.dialogBox.answerButton.fill.b
          );
        }
        rectMode(CENTER);
        strokeWeight(this.dialogBox.answerButton.strokeWeight);
        stroke(
          this.dialogBox.answerButton.strokeFill.r,
          this.dialogBox.answerButton.strokeFill.g,
          this.dialogBox.answerButton.strokeFill.b
        );
        rect(
          this.answerChoices[i].x,
          this.dialogBox.answerButton.y,
          this.dialogBox.answerButton.size.width,
          this.dialogBox.answerButton.size.height,
          this.dialogBox.answerButton.cornerRoundness
        );
        pop();

        //text
        push();
        fill(
          this.dialogBox.answerButton.textFill.r,
          this.dialogBox.answerButton.textFill.g,
          this.dialogBox.answerButton.textFill.b
        );
        textAlign(CENTER, CENTER);
        textSize(this.dialogBox.answerButton.textSize);
        text(
          this.answerChoices[i].string,
          this.answerChoices[i].x,
          this.dialogBox.answerButton.position.y
        );
        pop();
      }






      //display background stroke ======= REDACTED cause it's fugly.
      // push();
      // rectMode(this.dialogBox.answerButton.backgroundStroke.rectMode)
      // noStroke();
      // fill(this.dialogBox.answerButton.backgroundStroke.color.r, this.dialogBox.answerButton.backgroundStroke.color.g, this.dialogBox.answerButton.backgroundStroke.color.b)
      // rect(this.dialogBox.answerButton.backgroundStroke.position.x, this.dialogBox.answerButton.backgroundStroke.position.y, this.dialogBox.answerButton.backgroundStroke.size.width, this.dialogBox.answerButton.backgroundStroke.size.height)
      // pop();
    }

  }


}