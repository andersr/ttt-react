export const runTttGame = (players, currentPlayer, dispatch) => {
  const bot = players.botPlayer
  const human = players.humanPlayer
  // console.log('players: ', players);

  const startingMove = () => currentPlayer === human ? humanMove() : botMove()

  const botMove = () => {

  }

  const humanMove = () => {
    // dispatch()
  }

  const playerMove = () => {

  }

  startingMove()

}
