class Lvl2 extends Lvl {
  constructor() {
    super();
    this.image = lvl2Image;

    this.questionString = `Why are you not having fun?`;

    this.annyangCommand = "I specifically requested it";

    this.answerA = `I want it that way`;

    this.answerB = `I specifically requested it`;

    this.answerC = `I ordered you to`;

    this.answerD = `I commanded it`;

    this.winningAnswer = this.answerB;
    this.losingAnswers = [this.answerA, this.answerC, this.answerD]

    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    this.winningDoubleButton = this.doubleButton.a;
    this.winningSquareButton = this.squareButton.b;

  }

  update() {
    super.update();
  }

  nextLvl() {
    currentState = new Lvl3;
  }

  mousePressed() {
    super.mousePressed();
  }

  keyTyped() {
    super.keyTyped();
  }

  keyPressed() {
    super.keyPressed();
  }
}