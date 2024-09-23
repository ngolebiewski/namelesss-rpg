class Character {
  constructor(name, hp=10) {
    this.name = name;
    this.hp = hp;
  }

  getName() {
    return this.name
  }

  getHP() {
    return this.hp
  }

  adjustHP(amount) {
    this.hp += amount
    amount > 0? console.log('healing...') : console.log(`%c${this.name} loses ${amount} HP.`, "color: red; font-weight: bold;");
    console.log(`%cCurrent HP: ${this.hp}`, "color: lightblue; font-weight: bold;");
  }

}

export default Character;