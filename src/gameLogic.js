// rename to gameStructure
// gameContent & a different gameLogic for attack/moves/actions with objects/dialogue
const xpChart = {
  1:0,
  2:200,
  3:400,
  4:800,
  5:1600,
  6:3200,
  7:6400
}

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
    this.equipped = 'Nothing'
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

  getStats() {
    return {
      'hp':this.hp,
      'xp':this.xp,
      'name':this.name,
      'level':this.level,
      'eqipped':this.equipped,
      'maxHP':this.maxHP,
      'name':this.name
    }
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
    if (this.hp > this.maxHP) {
      this.hp = this.maxHP;
      console.log(`You've reached the maximum HP: ${this.maxHP}, cannot heal any higher`)
    }
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
//      Or set up as modules. Like, castle island. Goblin Caverns
///////

// Create an instance of Room
export const farmField = new Room({
  key: 'farmField',
  name: "Farm Field with mountains in the distance",
  description:
    "You're standing in a farmer's field, sheep graze in the far distance. The wind isn't howling, but it could be soon as you feel your shoulder-length hair whip around in the breeze...",
  items: [],
  exits: { north: [ "mistyMountains", "There are mountains to the north with a tinge of mist"], south: ["sea", "You hear the sound of the sea to the south."] }, // direction: [ key , description ]
  actions: {}, 
  imageURL: "images/scotland3.webp",
  alt: "Sky, mountains in the distance, and a green field going back into the distance.",
});

export const mistyMountains = new Room({
  key: 'mistyMountains',
  name: "Craggy mountains surrounded by mist",
  description:
    "You've made it up to the craggy mountains and the mist is thick, you feel the damp down to your bones...",
  items: [],
  exits: { south: [ "farmField", "Farmer's field with sheep grazing, ending in mountains"], north: ["shore", "You smell salt in the air to the North"] }, // direction: [ key , description ]
  actions: {}, 
  imageURL: "images/scotland2.webp",
  alt: "Mossy, craggy mountains, covered in mist.",
});

export const sea = new Room({
  key: 'sea',
  name: "Sea shore with castle in distance on island",
  description:
    "You're at a shore with a castle on an island in the distance...",
  items: [],
  exits: { north: [ "farmField", "Farmer's field with sheep grazing, ending in mountains"], south: ["harbor", "You're swimming across the bay to the castle island"] }, // direction: [ key , description ]
  actions: {}, 
  imageURL: "images/scotland.webp",
  alt: "Mossy, craggy mountains, covered in mist.",
});

export const shore = new Room({
  key: 'shore',
  name: "Rockey shore line",
  description:
    "Edge of the island, waves beat against the shore, is that something metallic reflecting the sun in the water?",
  items: ['Shimmering Scythe'],
  exits: { south: [ "mistyMountains", "There are mountains with a tinge of mist"] }, // direction: [ key , description ]
  actions: {}, 
  imageURL: "images/scotland5.webp",
  alt: "Rockey shore to this island, with waves.",
});

export const roomMap = {
  'farmField': farmField,
  'mistyMountains': mistyMountains,
  'sea': sea,
  'shore': shore
}



// Export the classes and instance
export { Character, Room };
