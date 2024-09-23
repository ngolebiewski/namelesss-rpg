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

  takeDamage(damage) {
    this.hp -= damage
    console.log(`%c${this.name} loses ${damage} HP.`, "color: red; font-weight: bold;");
    console.log(`%cCurrent HP: ${this.hp}`, "color: lightblue; font-weight: bold;");
  }
}

export default Character;