const Splash = () => {
  //full screen image
  //
  return (<>
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="images/scotland5.webp"
      alt="Beautiful Landscape"
    />
      {/* Title and Form Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <h1 className="text-9xl font-bold mb-4">Nameless RPG</h1>
        
        <form className="flex flex-col items-center">
          <label htmlFor="playerName" className="mb-2 text-lg">
            Enter Your Name:
          </label>
          <input
            type="text"
            id="playerName"
            placeholder="Your Name"
            className="p-2 mb-4 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Start Game
          </button>
        </form>
      </div>
  </>)
}

export default Splash;
