const HUD = ({ hp, stats }) => {
  console.log("current hp: ", hp)
  return (
    <div className="fixed top-0 left-[10vw] top-[5vh] p-4 z-10 rounded-lg bg-black bg-opacity-85 text-white border-4 border-yellow-300 ">
      <h1 className="text-red-500">Nameless RPG</h1>
      <p>{stats.name}</p>
      <p>_</p>
      <p>HP: {hp}/{stats.maxHP}</p>
      <p>XP: {stats.xp}</p>
      <p>XP next level: 1000</p>
      <p>Level: {stats.level}</p>
      <p>Equipped: {stats.eqipped}</p>
    </div>
  )
}

export default HUD;