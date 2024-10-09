import React, { useState, useEffect } from "react"
import { Character, Room, farmField, mistyMountains } from './gameLogic.js'
import Splash from "./Splash.jsx";
import Terminal from "./Terminal"
import HUD from "./HUD"

const App = () => {
  const [pc] = useState(new Character("Gandalf", 20));
  const [hp, setHP] = useState(pc.getHP());
  const [stats, setStats] = useState(pc.getStats())
  const [commands, setCommands] = useState([]);
  const [room, setRoom] = useState(farmField);
  const [bgImage, setBgImage] = useState('images/scotland3.webp')
  const [fade, setFade] = useState(true); // To trigger fade effect


  const handleHPclick = (amt) => {
    pc.adjustHP(amt);
    setHP(pc.getHP())
  }

  // useEffect(() => {
  //   const timeout = setTimeout(()=> {setBgImage(room.imageURL)}, 500)
  //   return () => clearTimeout(timeout); 
  // }, [room])

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => {
      setBgImage(room.imageURL);
      setFade(true);
    }, 500); // Match the duration of your fade-out animation (500ms)

    return () => clearTimeout(timeout); // Cleanup the timeout when the component unmounts
  }, [room]);


  return (
    <>
      <div id="full-screen-container" className="w-screen h-screen overflow-hidden bg-black transition-colors duration-500 ${fade ? 'bg-rose-500' : 'bg-black'}">
        <HUD hp={hp} stats={stats} />
        {/* <Splash /> */}

        {/* <h1 className="text-3xl underline text-center p-2">
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
        </div> */}

        {/* <div className="w-full h-70%"> */}
        {/* Control image visibility with showImage state */}

        <div className={`bg-black transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <img className="w-full h-full object-cover" src={bgImage} alt={room.alt} />
        </div>

        {/* </div> */}
        {/* <div className="w-full h-screen bg-indigo-500"></div> */}
        {/* <div className="w-100vw h-100vh bg-cover bg-center" style={{backgroundImage: "url('/images/scotland3.webp')"}}></div> */}
      </div >
      <Terminal commands={commands} setCommands={setCommands} room={room} setRoom={setRoom} />
    </>
  )
}

export default App
