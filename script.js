function rollDice() {
  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const roll = Math.floor(Math.random() * 6);
  document.getElementById("dice").textContent = diceFaces[roll];
}