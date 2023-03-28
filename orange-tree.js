// const Orange = require('./orange');

class OrangeTree {
  constructor(age = 0, height = 0, oranges = []) {
    this.oranges = oranges;
    this.age = age;
    this.height = height;
  }

  passGrowingSeason() {
    this.age += 1;
    if (this.height >= 25) {
      this.height = 25;
    } else {
      this.height += 2.5;
    }
    if (this.age >= 6) {
      const amount = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
      for (let i = 0; i < amount; i += 1) {
        const orange = new Orange();
        this.oranges.push(orange);
      }
    }

    return this;
  }

  isMature() {
    //  Returns true if the tree is old enough to bear fruit, false otherwise
    return this.age >= 6;
  }

  hasOranges() {
    return this.oranges.length > 0;
    //  Returns true if there are any oranges on the tree, false otherwise
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    let wantedOrange;
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    } else {
      wantedOrange = this.oranges[0];
      this.oranges = this.oranges.splice(0, 1);
    }

    //  orange-picking logic goes here
    return wantedOrange;
  }

  isDead() {
    return this.age >= 100;
  }
}

// module.exports = OrangeTree;

// const orangeTree = new OrangeTree(10, 3, []);

// orangeTree.passGrowingSeason();

// console.log('orangeTree.oranges', orangeTree.pickAnOrange());

// orangeTree.pickAnOrange()