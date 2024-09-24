class Character {
  constructor(name, hp=10) {
    this.name = name;
    this.hp = hp;
    this.alive = true;
    this.level = 1;
    this.maxHP = 10;
    this.XP = 0;
    this.items = [];
    this.path = [];
  }

  getName() {
    return this.name
  }

  getHP() {
    return this.hp
  }

  getMaxHP() {
    return this.maxHP
  }

  getLevel() {
    return this.level
  }

  //+ amount for healing HP and - amount for damage
  adjustHP(amount) {
    this.hp += amount
    amount > 0? console.log('healing...') : console.log(`%c${this.name} loses ${amount} HP.`, "color: red; font-weight: bold;");
    console.log(`%cCurrent HP: ${this.hp}`, "color: lightblue; font-weight: bold;");
    if (this.hp <0) {
      this.alive = false;
      death()
    }
  }

  death() {
    return (`${this.name} has died. Play again?`)
  }

}

export default Character;