import tttApp from './'
import initialState from './initialState.js'

describe('tttGame reducer', () => {

  // beforeEach(() => {
  //   jest.resetModules()
  // })

  it('should return the initial state', () => {
    // const initialState = { humanPlayer: null }
    expect(tttApp(undefined, {})).toEqual(initialState)
  })
})
