const HUD = ({ hp, stats }) => {
  return (
    <div className="fixed top-0 left-[10vw] top-[5vh] p-4 z-10 rounded-lg bg-black bg-opacity-85 text-white border-4 border-yellow-300 ">
      <h1 className="text-red-500">Nameless RPG</h1>
      <p>{stats.name}/Lvl: {stats.level}</p>
      <p>HP: {hp}/{stats.maxHP}</p>
      <p>XP: {stats.xp}/100</p>
      <p>Equipped: {stats.eqipped}</p>
    </div>
  )
}

export default HUD;