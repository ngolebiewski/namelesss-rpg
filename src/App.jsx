import React, { useState } from "react"
import { Character, Room, farmField } from './gameLogic.js'
import Splash from "./Splash.jsx";

const App = () => {
  const [pc] = useState(new Character("Gandalf", 20));
  const [hp, setHP] = useState(pc.getHP());

  const [room] = useState(farmField);

  const handleHPclick = (amt) => {
    pc.adjustHP(amt);
    setHP(pc.getHP())
  }

  console.log(room.printRoom())

  return (
    <>
      <div id="full-screen-container" className="w-screen h-screen overflow-hidden bg-rose">
        {/* <Splash /> */}
        <h1 className="text-3xl underline text-center p-2">
          Nameless RPG
          | Name: {pc.getName()}
          | {hp > 0 ? `HP: ${hp}` : "DEAD"}
        </h1>
        <p className="text-center">{room.getName()}</p>
        <div className="flex justify-center">
          <button className="m-2 border border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded"
            onClick={() => (handleHPclick(-1))}>Deal 1 HP Damage</button>
          <button className="m-2 border border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded"
            onClick={() => (handleHPclick(1))}>Heal 1 HP</button>
        </div>
        {/* <div className="w-full h-70%"> */}
        <img className="w-full h-full object-cover" src="images/scotland3.webp" />
        {/* </div> */}
        {/* <div className="w-full h-screen bg-indigo-500"></div> */}
        {/* <div className="w-100vw h-100vh bg-cover bg-center" style={{backgroundImage: "url('/images/scotland3.webp')"}}></div> */}
      </div>
    </>
  )
}

export default App
