import { Room, farmField, mistyMountains, sea, roomMap } from "./gameLogic.js";

const goNorth = "Go North";

export const actionDict = {
  movement: ["run", "walk", "go", "move", "skip"],
  inventory: ["inv", "items", "inventory"],
  attack: [
    "strike",
    "attack",
    "shoot",
    "throw",
    "punch",
    "stab",
    "slice",
    "slash",
    "spear",
  ],
  equip: ["equip", "arm"],
  use: ["use"],
  look: ["search", "look"],
  help: ["instructions", "help"],
  data: ["stats", "hp", "xp", "name"],
  talk: ["ask", "say"],
  take: ["take", "get"]
};

export const findAction = (input, category = "movement") => {
  console.log(input);
  for (let word of actionDict[category]) {
    console.log("------", word, "-------");
    if (input.toLowerCase().includes(word)) {
      console.log(word, "is a match");
      return [category, word];
    }
  }
};

export const findDirection = (input, room) => {
  const exits = Object.keys(room.exits);
  console.log(exits);
  for (let direction of exits) {
    console.log("------", direction, "-------");
    if (input.toLowerCase().includes(direction)) {
      console.log(direction, "is a match");
      return direction;
    }
  }
  return "not a dir";
};

// need the text from user to parse, and the room to see what you can do, plus the character?
// SHOULD: run through all the keys in the action dictionary
export const parseInput = (input, room) => {
  let action = findAction(input);
  let noun = findDirection(input, room);
  if (action[0] === "movement" && noun) {
    return [action, noun];
  } else {
    return "not a valid move";
  }
};

export const dmResponse = ([action, noun], room) => {
  if (action[0] === "movement") {
    // should print out to user that you "GO NORTH" for example...
    // eventualy will setRoom(room.exits[noun])
    // add error handling
    const newRoomKey = room.exits[noun][0];
    const newRoom = roomMap[newRoomKey];
    console.log(newRoom);
    return newRoom;
  }

};

// findAction(goNorth, 'movement')

// console.log("**********\n", parseInput(goNorth, farmField))
// console.log("**********\n", parseInput("go down", farmField))

dmResponse([["movement", "go"], "north"], farmField);

// findDirection(goNorth, farmField)
