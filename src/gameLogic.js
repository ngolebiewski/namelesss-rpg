// rename to gameStructure
// gameContent & a different gameLogic for attack/moves/actions with objects/dialogue
class Character {
  constructor(name, hp = 10) {
    this.name = name;
    this.hp = hp;
    this.alive = true;
    this.level = 1;
    this.maxHP = hp;
    this.xp = 0;
    this.items = [];
    this.path = [];
  }

  getName() {
    return this.name;
  }

  getHP() {
    return this.hp;
  }

  getMaxHP() {
    return this.maxHP;
  }

  getLevel() {
    return this.level;
  }

  // Adjust HP: + amount for healing, - amount for damage
  adjustHP(amount) {
    this.hp += amount;
    if (amount > 0) {
      console.log("healing...");
    } else {
      console.log(
        `%c${this.name} loses ${Math.abs(amount)} HP.`,
        "color: red; font-weight: bold;"
      );
    }
    console.log(
      `%cCurrent HP: ${this.hp}`,
      "color: lightblue; font-weight: bold;"
    );

    // Cap HP to maxHP
    // if (this.hp > this.maxHP) {
    //   this.hp = this.maxHP;
    //   console.log(`You've reached the maximum HP: ${this.maxHP}, cannot heal any higher`)
    // }

    // Check for death
    if (this.hp <= 0) {
      this.alive = false;
      console.log(this.death());
    }
  }

  death() {
    return `${this.name} has died. Play again?`;
  }

  addXP(xpAmt) {
    this.xp += xpAmt;
  }
}

/* Room: 
Description
Items
  Things
  NPCs
  Monsters
Exits
Actions
  Responses
Image URL + Alt Tag
*/
class Room {
  static currentId = 0; // Static variable to track IDs

  constructor({ id = null, key, name, description, items = [], exits, actions, imageURL, alt }) {
    this.id = id || ++Room.currentId; // Auto-increment ID
    this.key = key;
    this.name = name;
    this.description = description;
    this.items = items; // Use provided items
    this.exits = exits;
    this.actions = actions;
    this.imageURL = imageURL;
    this.alt = alt;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  printRoom() {
    console.log(`ID: ${this.id}`);
    console.log(`Key: ${this.key}`);
    console.log(`Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Items: ${this.items.join(", ")}`); // Join array items for printing
    console.log(`Exits: ${JSON.stringify(this.exits)}`); // Use stringify for object-like structures
    console.log(`Actions: ${JSON.stringify(this.actions)}`);
    console.log(`Image URL: ${this.imageURL}`);
    console.log(`Alt Text: ${this.alt}`);
  }
}



////////
//      Perhaps an object of all the Room objects would be best to make it easier to export. Key: Room object for the structure. 
//      When there's 100 rooms it would start to get ridiculous having that many imports and exports.
///////

// Create an instance of Room
const farmField = new Room({
  key: 'field',
  name: "Farm Field with mountains in the distance",
  description:
    "You're standing in a farmer's field, sheep graze in the far distance. The wind isn't howling, but it could be soon as you feel your shoulder-length hair whip around in the breeze...",
  items: [],
  exits: { north: [ "misty-mountains", "There are mountains to the north with a tinge of mist"], south: ["sea", "You hear the sound of the sea to the south."] }, // direction: [ key , description ]
  actions: {}, // Assuming you will define actions later
  imageURL: "images/scotland3.webp",
  alt: "Sky, mountains in the distance, and a green field going back into the distance.",
});

// Export the classes and instance
export { Character, Room, farmField };
