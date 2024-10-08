import { useEffect, useState } from "react";

const Terminal = ({ commands, setCommands, room }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      console.log(inputValue)
      // trigger DO SOMETHING FUNCTION
      setCommands((commands) => [...commands, inputValue]);
      setInputValue('')
    }
  }

  useEffect(()=>{console.log("Commands: ", commands)},[commands])

  
  return (
    <div className="fixed bottom-0 left-[10vw] right-[10vw] bottom-[5vh] p-4 z-10 h-[25vh] rounded-lg bg-black bg-opacity-85 text-blue-300 border-4 border-yellow-300 ">
      <h2>{room.getDescription()}</h2>
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