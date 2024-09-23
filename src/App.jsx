import React, { useState } from "react"
import Character from './gameLogic.js'

const App = () => {
  const [pc] = useState(new Character("Gandalf", 20));
  const [hp, setHP] = useState(pc.getHP());
  console.log(pc.getHP(), pc.getName())

  const handleHPclick = () => {
    pc.takeDamage(1);
    setHP(pc.getHP())
  }

  return (
    <>
      <div id="full-screen-container" className="w-screen h-screen overflow-hidden bg-rose">
        <h1 className="text-3xl font-bold underline text-center p-2">
          Nameless RPG
          | Name: {pc.getName()}
          | {hp>0? `HP: ${hp}`: "DEAD"}
        </h1>
        <button className="m-2 border border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded"
          onClick={(handleHPclick)}>Deal 1 HP Damage</button>
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
