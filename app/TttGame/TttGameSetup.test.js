import TttGameSetup from './TttGameSetup.js'

describe('TTTGameSetup()', function(){
  let selectedPlayer
  let testGame

  beforeEach(() => {
    jest.resetModules()
  })

  afterEach(() => {
    selectedPlayer = null
    testGame = null
  })

  it('should set humanPlayer to x or o based on the passed in selectedPlayer arg', function(){
    selectedPlayer = 'x'
    testGame = new TttGameSetup(selectedPlayer)
    expect(testGame.humanPlayer).toBe(selectedPlayer)

    selectedPlayer = 'o'
    testGame = new TttGameSetup(selectedPlayer)
    expect(testGame.humanPlayer).toBe(selectedPlayer)
  })

  it('should set the bot player as the opponent of the human player', function(){
    var botPlayer
    selectedPlayer = 'x'
    botPlayer = 'o'
    testGame = new TttGameSetup(selectedPlayer)
    expect(testGame.botPlayer).toBe(botPlayer)

    selectedPlayer = 'o'
    botPlayer = 'x'
    testGame = new TttGameSetup(selectedPlayer)
    expect(testGame.botPlayer).toBe(botPlayer)
  })

  it('should instantiate 9 game squares', function(){
    selectedPlayer = 'x'
    testGame = new TttGameSetup(selectedPlayer)
    expect(testGame.gameSquares.length).toBe(9)
  })

  it('should set the state param of each game square to be an empty string', function(){
    selectedPlayer = 'x'
    testGame = new TttGameSetup(selectedPlayer)
    var emptySquare = ''
    // console.log('testGame: ', testGame)
    for (var i = 0; i < testGame.gameSquares.length; i++) {
      expect(testGame.gameSquares[i].state).toBe(emptySquare)
    }
    // expect(testGame.gameSquares.length).to.equal(9)
  })

  it('should set the id param of each game square to be an incrementing value from 0-8', function(){
    selectedPlayer = 'x'
    testGame = new TttGameSetup(selectedPlayer)
    var squareId = 0
    // console.log('testGame: ', testGame)
    for (var i = 0; i < testGame.gameSquares.length; i++) {
      expect(testGame.gameSquares[i].id).toBe(squareId)
      squareId++
    }
    // expect(testGame.gameSquares.length).to.equal(9)
  })
  // it('should run a callback when setup is completed')
})
