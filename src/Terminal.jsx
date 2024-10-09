import { useEffect, useState } from "react";
import * as parser from "./inputParser"

const Terminal = ({ commands, setCommands, room, setRoom }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      console.log(inputValue)
      const parsed = parser.parseInput(inputValue, room)
      setRoom(parser.dmResponse(parsed, room))
      if (inputValue !== commands[-1]) {
        setCommands((commands) => [...commands, ["pc", inputValue]]);
      }
      setInputValue('')
    }
  }

  useEffect(() => { console.log("Commands: ", commands) }, [commands])

  useEffect(() => {
    if (room.getDescription() !== commands[-1]) {
      setCommands((commands) => [...commands, ["dm", room.getDescription()]]);
    }
  }, [room])



  return (
    <div className="fixed bottom-0 left-[10vw] right-[10vw] bottom-[5vh] p-4 z-10 min-h-[30vh] max-h-[50vh] rounded-lg bg-black bg-opacity-90 text-[#87CEEB] border-4 border-yellow-300 overflow-auto ">
      <h2>{room.getDescription()}</h2>
      <p className="text-red-500"> <span className="text-lime-500">**debug mode** Exits: </span>{
        Object.keys(room.exits).map((exit, index) => (
          <span key={index}>{exit.toUpperCase()}{index < Object.keys(room.exits).length - 1 ? ', ' : ''}</span>
        ))
      }</p>

      <form id="userInput" onSubmit={onSubmit}>
        <label htmlFor="command">&gt; </label>
        <input
          type="input"
          id="command"
          name="command"
          placeholder="What is your action?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
          minLength="1"
          maxLength="400"
          autoFocus
          autoCorrect="on"
          className="bg-transparent text-white w-[90%] resize-none outline-none" // outline-none after debugging
          rows={1}
          wrap="soft"
        />
      </form>
    </div>
  )
}

export default Terminal;